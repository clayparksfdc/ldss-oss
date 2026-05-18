/**
 * Resolve the 54 zh links that point to deleted/renamed pages by either:
 *   - Unwrapping inline prose links: `[text](broken-url)` → `text`
 *   - Removing the entire `::card{...}` directive when the card's href is broken
 *
 * Reads scripts/zh-cache/_index.json to determine which UIDs are valid.
 * Anything pointing at a UID not in the index is treated as deleted.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const CACHE_DIR = path.join(__dirname, 'zh-cache');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-deleted-zh-links-report.md');

interface ZhIndexEntry {
  id: number;
  uid: string;
  slug: string;
  url: string;
  name: string;
  hasTabs: boolean;
}

function buildValidUids(): Set<string> {
  const idx = JSON.parse(fs.readFileSync(path.join(CACHE_DIR, '_index.json'), 'utf-8')) as ZhIndexEntry[];
  return new Set(idx.map(e => e.uid));
}

const ZH_LINK_RE = /https:\/\/www\.lightningdesignsystem\.com\/2e1ef8501\/(?:v\/[^/]+\/)?p\/([a-f0-9]+)(?:-[a-zA-Z0-9-]+)?/g;

interface Action {
  type: 'unwrap-prose' | 'remove-card';
  detail: string;
}

interface FileReport {
  rel: string;
  actions: Action[];
}

function* walk(dir: string, base = ''): Generator<{ rel: string; abs: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full, path.join(base, e.name));
    else if (e.name.endsWith('.md')) yield { rel: path.join(base, e.name), abs: full };
  }
}

function isBrokenZhLink(url: string, validUids: Set<string>): boolean {
  const m = url.match(/p\/([a-f0-9]+)/);
  if (!m) return false;
  return !validUids.has(m[1]);
}

function processFile(absPath: string, relPath: string, validUids: Set<string>, dryRun: boolean): FileReport {
  let content = fs.readFileSync(absPath, 'utf-8');
  const actions: Action[] = [];

  // 1. Remove ::card{} directives whose href is broken
  // Pattern: ::card{...href="<broken-zh-url>"...}
  content = content.replace(/^::card\{[^}]*href="(https:\/\/www\.lightningdesignsystem\.com\/[^"]+)"[^}]*\}\s*$/gm, (line, href) => {
    if (isBrokenZhLink(href, validUids)) {
      const titleMatch = line.match(/title="([^"]+)"/);
      actions.push({ type: 'remove-card', detail: titleMatch?.[1] ?? '(no title)' });
      return '';
    }
    return line;
  });

  // 2. Unwrap inline prose links to broken zh pages
  // Pattern: [text](broken-zh-url) → text
  content = content.replace(/\[([^\]]+)\]\((https:\/\/www\.lightningdesignsystem\.com\/2e1ef8501\/(?:v\/[^/]+\/)?p\/[a-f0-9]+(?:-[a-zA-Z0-9-]+)?)\)/g, (match, text, url) => {
    if (isBrokenZhLink(url, validUids)) {
      actions.push({ type: 'unwrap-prose', detail: text.slice(0, 60) });
      return text;
    }
    return match;
  });

  // 3. Clean up empty lines left by removed cards
  content = content.replace(/\n\n\n+/g, '\n\n');

  if (actions.length > 0 && !dryRun) {
    fs.writeFileSync(absPath, content);
  }
  return { rel: relPath, actions };
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const validUids = buildValidUids();
  console.log(`Loaded ${validUids.size} valid zh page UIDs`);

  const reports: FileReport[] = [];
  for (const f of walk(CONTENT_DIR)) {
    const r = processFile(f.abs, f.rel, validUids, dryRun);
    if (r.actions.length > 0) reports.push(r);
  }

  const cardsRemoved = reports.flatMap(r => r.actions.filter(a => a.type === 'remove-card')).length;
  const proseUnwrapped = reports.flatMap(r => r.actions.filter(a => a.type === 'unwrap-prose')).length;

  const lines: string[] = [];
  lines.push('# Deleted-zh-link healing report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files touched: **${reports.length}**`);
  lines.push(`- Cards removed: **${cardsRemoved}**`);
  lines.push(`- Prose links unwrapped: **${proseUnwrapped}**`);
  lines.push('');
  lines.push('## Per file');
  lines.push('');
  for (const r of reports.sort((a, b) => a.rel.localeCompare(b.rel))) {
    lines.push(`### \`${r.rel}\``);
    for (const a of r.actions) {
      lines.push(`- ${a.type}: ${a.detail}`);
    }
    lines.push('');
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Cards removed:    ${cardsRemoved}`);
  console.log(`  Prose unwrapped:  ${proseUnwrapped}`);
}

main();
