/**
 * Rewrite external lightningdesignsystem.com zeroheight links in content/ to
 * internal routes. zh URLs look like:
 *   https://www.lightningdesignsystem.com/2e1ef8501/p/<uid>(-slug)?
 *
 * We map <uid> → /<category>/<slug> using:
 *   - scripts/zh-cache/_index.json (id → uid → slug from the API)
 *   - frontmatter `category` of the local content file
 *
 * Anything we can't map (page no longer exists, or never crawled) gets left
 * alone and listed in the report so a human can decide.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const CACHE_DIR = path.join(__dirname, 'zh-cache');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-zh-links-report.md');

interface ZhIndexEntry {
  id: number;
  uid: string;
  slug: string;
  url: string;
  name: string;
  hasTabs: boolean;
}

function buildUidIndex(): Map<string, ZhIndexEntry> {
  const idxPath = path.join(CACHE_DIR, '_index.json');
  if (!fs.existsSync(idxPath)) {
    throw new Error(`Missing ${idxPath} — run scripts/zeroheight-fetch-all.ts`);
  }
  const entries = JSON.parse(fs.readFileSync(idxPath, 'utf-8')) as ZhIndexEntry[];
  const map = new Map<string, ZhIndexEntry>();
  for (const e of entries) map.set(e.uid, e);
  return map;
}

/**
 * Take a zh slug like "874349-designers" and return the bare slug "designers".
 * The leading uid is the part before the first hyphen.
 */
function bareSlug(zhSlug: string): string {
  const m = zhSlug.match(/^[a-f0-9]+-(.+)$/);
  return m ? m[1] : zhSlug;
}

/**
 * Find the category of the local content file by looking up the slug
 * in content/**\/*.md. Returns the directory name or null if not found.
 */
function buildSlugToCategory(): Map<string, string> {
  const map = new Map<string, string>();
  function walk(dir: string, base = '') {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full, path.join(base, e.name));
      else if (e.name.endsWith('.md')) {
        const slug = e.name.replace(/\.md$/, '');
        // Use the first directory segment as category
        const category = base.split(path.sep)[0] || '';
        if (category && !map.has(slug)) {
          map.set(slug, category);
        }
      }
    }
  }
  walk(CONTENT_DIR);
  return map;
}

interface FileReport {
  relPath: string;
  rewritten: number;
  unmapped: string[];
}

function processFile(absPath: string, relPath: string, uidMap: Map<string, ZhIndexEntry>, slugToCat: Map<string, string>, dryRun: boolean): FileReport {
  let content = fs.readFileSync(absPath, 'utf-8');
  const re = /https:\/\/www\.lightningdesignsystem\.com\/2e1ef8501\/(?:v\/[^/]+\/)?p\/([a-f0-9]+)(?:-[a-zA-Z0-9-]+)?/g;

  let rewritten = 0;
  const unmapped: string[] = [];

  const next = content.replace(re, (match, uid) => {
    const entry = uidMap.get(uid);
    if (!entry) {
      unmapped.push(match);
      return match;
    }
    const slug = bareSlug(entry.slug);
    const category = slugToCat.get(slug);
    if (!category) {
      unmapped.push(`${match} (slug "${slug}" has no local file)`);
      return match;
    }
    rewritten++;
    return `/${category}/${slug}`;
  });

  if (rewritten > 0 && !dryRun) {
    fs.writeFileSync(absPath, next);
  }

  return { relPath, rewritten, unmapped };
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

  const uidMap = buildUidIndex();
  const slugToCat = buildSlugToCategory();

  console.log(`Loaded ${uidMap.size} zh page UIDs`);
  console.log(`Loaded ${slugToCat.size} local slugs → categories`);

  const reports: FileReport[] = [];
  for (const f of walk(CONTENT_DIR)) {
    const r = processFile(f.abs, f.rel, uidMap, slugToCat, dryRun);
    if (r.rewritten > 0 || r.unmapped.length > 0) reports.push(r);
  }

  const totalRewritten = reports.reduce((acc, r) => acc + r.rewritten, 0);
  const totalUnmapped = reports.reduce((acc, r) => acc + r.unmapped.length, 0);

  // Report
  const lines: string[] = [];
  lines.push('# Zeroheight link healing report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files touched: **${reports.length}**`);
  lines.push(`- External zh links rewritten: **${totalRewritten}**`);
  lines.push(`- Unmapped (left alone): **${totalUnmapped}**`);
  lines.push('');
  lines.push('## Files');
  lines.push('');
  lines.push('| File | Rewritten | Unmapped |');
  lines.push('|---|---|---|');
  for (const r of reports.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    lines.push(`| \`${r.relPath}\` | ${r.rewritten} | ${r.unmapped.length} |`);
  }
  lines.push('');

  const allUnmapped = new Set<string>();
  for (const r of reports) for (const u of r.unmapped) allUnmapped.add(u);
  if (allUnmapped.size > 0) {
    lines.push('## Unmapped URLs');
    lines.push('');
    lines.push('These zh links could not be matched to a local content file. Either:');
    lines.push('- The page UID isn\'t in our zh cache (run `scripts/zeroheight-fetch-all.ts`), or');
    lines.push('- The page exists on zeroheight but no local content file matches its slug.');
    lines.push('');
    for (const u of [...allUnmapped].sort()) lines.push(`- \`${u}\``);
    lines.push('');
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Rewritten: ${totalRewritten}`);
  console.log(`  Unmapped:  ${totalUnmapped}`);
}

main();
