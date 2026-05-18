/**
 * Diff cached zeroheight pages against migrated content/ markdown files.
 *
 * Reads:  scripts/zh-cache/_index.json + per-page JSON
 * Reads:  content/*.md frontmatter
 * Writes: docs/zeroheight-audit.md
 *
 * Output sections:
 *   1. MATCHED       — zh slug found in content/ (by slug or fuzzy name match)
 *   2. MISSING       — zh page with no obvious counterpart in content/
 *   3. EXTRA         — content/ files with no matching zh page (rare, but flagged)
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(__dirname, 'zh-cache');
const CONTENT_DIR = path.join(REPO, 'content');
const OUT_PATH = path.join(REPO, 'docs', 'zeroheight-audit.md');

interface ZhIndexEntry {
  id: number;
  uid: string;
  slug: string;
  url: string;
  name: string;
  hasTabs: boolean;
}

function loadIndex(): ZhIndexEntry[] {
  const indexPath = path.join(CACHE_DIR, '_index.json');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing ${indexPath} — run scripts/zeroheight-fetch-all.ts first`);
  }
  return JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
}

function* walkContent(dir: string, base = ''): Generator<{ relPath: string; absPath: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      yield* walkContent(path.join(dir, e.name), path.join(base, e.name));
    } else if (e.name.endsWith('.md') && e.name !== 'navigation.md') {
      yield { relPath: path.join(base, e.name), absPath: path.join(dir, e.name) };
    }
  }
}

function normalizeForMatch(s: string): string {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface ContentFile {
  relPath: string;
  basename: string;
  normalized: string;
  title?: string;
}

function loadContent(): ContentFile[] {
  const files: ContentFile[] = [];
  for (const f of walkContent(CONTENT_DIR)) {
    const basename = path.basename(f.relPath, '.md');
    // Read just the first 30 lines for frontmatter
    const head = fs.readFileSync(f.absPath, 'utf-8').slice(0, 1500);
    const titleMatch = head.match(/^title:\s*(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : undefined;
    files.push({
      relPath: f.relPath,
      basename,
      normalized: normalizeForMatch(basename),
      title,
    });
  }
  return files;
}

function matchPage(zh: ZhIndexEntry, content: ContentFile[]): ContentFile | null {
  // 1. Exact slug match (zeroheight slug is `<uid>-<slug>` in their URL, but `slug` field has just the slug part)
  const zhNorm = normalizeForMatch(zh.name);
  const direct = content.find(c => c.normalized === zhNorm);
  if (direct) return direct;

  // 2. Title match
  const byTitle = content.find(c => c.title && normalizeForMatch(c.title) === zhNorm);
  if (byTitle) return byTitle;

  // 3. Substring match on basename — name "Color" matches "color.md" but also "color-system.md"
  // Prefer the shortest match (most likely the actual page).
  const subs = content.filter(c => c.normalized.startsWith(zhNorm + '-') || c.normalized === zhNorm);
  if (subs.length > 0) {
    return subs.sort((a, b) => a.normalized.length - b.normalized.length)[0];
  }

  return null;
}

function categoryOfRelPath(relPath: string): string {
  const seg = relPath.split(path.sep)[0];
  return seg === relPath ? '(root)' : seg;
}

function main() {
  const index = loadIndex();
  const content = loadContent();

  const matched: Array<{ zh: ZhIndexEntry; file: ContentFile }> = [];
  const missing: ZhIndexEntry[] = [];
  const usedFiles = new Set<string>();

  for (const zh of index) {
    const file = matchPage(zh, content);
    if (file) {
      matched.push({ zh, file });
      usedFiles.add(file.relPath);
    } else {
      missing.push(zh);
    }
  }

  const extra = content.filter(c => !usedFiles.has(c.relPath));

  const lines: string[] = [];
  lines.push('# Zeroheight → content/ migration audit');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Source: zeroheight styleguide ${process.env.ZEROHEIGHT_STYLEGUIDE_ID} (cached at \`scripts/zh-cache/\`)`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Zeroheight pages cached: **${index.length}**`);
  lines.push(`- Migrated content files: **${content.length}**`);
  lines.push(`- ✅ Matched: **${matched.length}**`);
  lines.push(`- ❌ Missing (in zeroheight but not in content/): **${missing.length}**`);
  lines.push(`- ➕ Extra (in content/ but not in zeroheight): **${extra.length}**`);
  lines.push('');

  lines.push('## ❌ Missing pages — present on zeroheight, not yet migrated');
  lines.push('');
  if (missing.length === 0) {
    lines.push('_None — every zeroheight page has a counterpart in `content/`._');
  } else {
    lines.push('| zeroheight page | URL | Suggested content path |');
    lines.push('|---|---|---|');
    for (const zh of missing.sort((a, b) => a.name.localeCompare(b.name))) {
      const suggestedSlug = normalizeForMatch(zh.name);
      lines.push(`| ${zh.name} | [open](${zh.url}) | \`content/<category>/${suggestedSlug}.md\` |`);
    }
  }
  lines.push('');

  lines.push('## ➕ Extra files — in `content/` but no matching zeroheight page');
  lines.push('');
  lines.push('_These may be expected (sub-tabs like `button--usage.md`, or pages added directly in the new repo) but worth a glance._');
  lines.push('');
  if (extra.length === 0) {
    lines.push('_None._');
  } else {
    // Group by category
    const byCat = new Map<string, ContentFile[]>();
    for (const c of extra) {
      const cat = categoryOfRelPath(c.relPath);
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat)!.push(c);
    }
    for (const [cat, files] of [...byCat.entries()].sort()) {
      lines.push(`### ${cat} (${files.length})`);
      lines.push('');
      for (const f of files.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
        lines.push(`- \`${f.relPath}\`${f.title ? ` — ${f.title}` : ''}`);
      }
      lines.push('');
    }
  }

  lines.push('## ✅ Matched pages');
  lines.push('');
  lines.push('<details><summary>Click to expand</summary>');
  lines.push('');
  lines.push('| zeroheight page | content/ file |');
  lines.push('|---|---|');
  for (const m of matched.sort((a, b) => a.zh.name.localeCompare(b.zh.name))) {
    lines.push(`| ${m.zh.name} | \`${m.file.relPath}\` |`);
  }
  lines.push('');
  lines.push('</details>');
  lines.push('');

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, lines.join('\n'));

  console.log(`✓ Wrote ${OUT_PATH}`);
  console.log(`  ✅ Matched: ${matched.length}`);
  console.log(`  ❌ Missing: ${missing.length}`);
  console.log(`  ➕ Extra:   ${extra.length}`);
}

main();
