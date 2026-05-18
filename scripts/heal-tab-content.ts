/**
 * Many pages in content/ are tab-pages: e.g. content/foundation/color--color-palette.md
 * is the "Color Palette" tab of the zeroheight "Color" page (slug 655b28-color).
 * The original migration kept only the prose paragraphs and dropped the rich tables,
 * code blocks, lists with images, etc. that lived under each H3 section.
 *
 * This script:
 *   1. Walks content/ for files named `<slug>--<tab>.md` (the convention)
 *   2. Looks up the parent zh page by slug
 *   3. Finds the matching tab in the cached zh JSON
 *   4. If our markdown file is "skeleton-only" (heading + empty sections),
 *      replaces the body with the zh tab's full content
 *
 * Strategy is conservative — only replaces files that look skeletal. Files
 * with substantial body content beyond the H3 headings are left alone.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const CACHE_DIR = path.join(__dirname, 'zh-cache');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-tab-content-report.md');

interface ZhIndexEntry {
  id: number;
  uid: string;
  slug: string;
  url: string;
  name: string;
  hasTabs: boolean;
}

function loadIndex(): ZhIndexEntry[] {
  return JSON.parse(fs.readFileSync(path.join(CACHE_DIR, '_index.json'), 'utf-8'));
}

function loadPageJson(id: number): any {
  const p = path.join(CACHE_DIR, `${id}.json`);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

/**
 * Bare slug from a zh slug: "655b28-color" → "color"
 */
function bareSlug(zhSlug: string): string {
  const m = zhSlug.match(/^[a-f0-9]+-(.+)$/);
  return m ? m[1] : zhSlug;
}

/**
 * Build a map from "category/tab-slug" → { tabContent, parentTitle, tabName }
 * by walking the zh cache.
 */
interface TabLookup {
  parentSlug: string;
  parentTitle: string;
  parentUrl: string;
  tabName: string;
  tabContent: string;
}
function buildTabIndex(): Map<string, TabLookup> {
  const idx = loadIndex();
  const map = new Map<string, TabLookup>();
  for (const entry of idx) {
    if (!entry.hasTabs) continue;
    const data = loadPageJson(entry.id);
    if (!data || !data.data?.page?.tabs) continue;
    const parentSlug = bareSlug(entry.slug);
    for (const tab of data.data.page.tabs) {
      if (!tab.content || tab.content.length < 50) continue;
      const tabSlug = slugify(tab.name);
      const key = `${parentSlug}--${tabSlug}`;
      map.set(key, {
        parentSlug,
        parentTitle: entry.name,
        parentUrl: entry.url,
        tabName: tab.name,
        tabContent: tab.content,
      });
    }
  }
  return map;
}

function slugify(s: string): string {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * A markdown file is "skeleton" if, after frontmatter, the body is mostly
 * H3 headings with little substance between them.
 * Heuristic: count non-blank lines that aren't headings vs. heading lines.
 * If headings outnumber prose (or near-equal), treat as skeleton.
 */
function isSkeleton(body: string): boolean {
  const lines = body.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const headings = lines.filter(l => /^#{2,4}\s/.test(l)).length;
  const prose = lines.filter(l => !/^#{1,4}\s/.test(l) && !/^[-*]\s/.test(l)).length;
  // If 3+ headings AND prose is less than 2x headings, it's skeletal
  return headings >= 3 && prose < headings * 2;
}

function splitFrontmatter(content: string): { frontmatter: string; body: string } {
  if (!content.startsWith('---')) return { frontmatter: '', body: content };
  const end = content.indexOf('\n---', 3);
  if (end === -1) return { frontmatter: '', body: content };
  return {
    frontmatter: content.slice(0, end + 4),
    body: content.slice(end + 4).replace(/^\n+/, ''),
  };
}

interface FileReport {
  relPath: string;
  parentSlug: string;
  tabName: string;
  oldBodyLen: number;
  newBodyLen: number;
  action: 'replaced' | 'left-alone-not-skeletal';
}

function* walk(dir: string, base = ''): Generator<{ rel: string; abs: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full, path.join(base, e.name));
    else if (e.name.endsWith('.md')) yield { rel: path.join(base, e.name), abs: full };
  }
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const tabIdx = buildTabIndex();
  console.log(`Loaded ${tabIdx.size} tab-content entries from zh cache`);

  const reports: FileReport[] = [];

  for (const f of walk(CONTENT_DIR)) {
    const baseName = path.basename(f.rel, '.md');
    if (!baseName.includes('--')) continue;
    const tabKey = baseName; // e.g. "color--color-palette"
    const lookup = tabIdx.get(tabKey);
    if (!lookup) continue;

    const content = fs.readFileSync(f.abs, 'utf-8');
    const { frontmatter, body } = splitFrontmatter(content);

    if (!isSkeleton(body)) {
      reports.push({
        relPath: f.rel,
        parentSlug: lookup.parentSlug,
        tabName: lookup.tabName,
        oldBodyLen: body.length,
        newBodyLen: body.length,
        action: 'left-alone-not-skeletal',
      });
      continue;
    }

    const newBody = lookup.tabContent;
    const newContent = `${frontmatter}\n\n${newBody}\n`;

    reports.push({
      relPath: f.rel,
      parentSlug: lookup.parentSlug,
      tabName: lookup.tabName,
      oldBodyLen: body.length,
      newBodyLen: newBody.length,
      action: 'replaced',
    });

    if (!dryRun) fs.writeFileSync(f.abs, newContent);
  }

  const replaced = reports.filter(r => r.action === 'replaced');
  const leftAlone = reports.filter(r => r.action === 'left-alone-not-skeletal');

  // Report
  const lines: string[] = [];
  lines.push('# Tab-content healing report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Tab files matched against zh cache: **${reports.length}**`);
  lines.push(`- Replaced (skeletal): **${replaced.length}**`);
  lines.push(`- Left alone (had substantial content): **${leftAlone.length}**`);
  lines.push('');
  lines.push('## Replaced files');
  lines.push('');
  lines.push('| File | Parent | Tab | Old body | New body |');
  lines.push('|---|---|---|---|---|');
  for (const r of replaced.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    lines.push(`| \`${r.relPath}\` | ${r.parentSlug} | ${r.tabName} | ${r.oldBodyLen} chars | ${r.newBodyLen} chars |`);
  }
  lines.push('');
  if (leftAlone.length > 0) {
    lines.push('## Left alone (not skeletal)');
    lines.push('');
    lines.push('| File | Parent | Tab | Body |');
    lines.push('|---|---|---|---|');
    for (const r of leftAlone.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
      lines.push(`| \`${r.relPath}\` | ${r.parentSlug} | ${r.tabName} | ${r.oldBodyLen} chars |`);
    }
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Replaced: ${replaced.length}`);
  console.log(`  Left alone: ${leftAlone.length}`);
}

main();
