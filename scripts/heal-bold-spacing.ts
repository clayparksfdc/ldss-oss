/**
 * Add a missing space between `**bold.**Word` and the next sentence.
 *
 * Background: many migrated pages have patterns like:
 *   1. **Styling hooks flexibility.** The hierarchical framework... ✅ correct
 *   2. **Agentic Experience pattern library.**Partners and ISVs...      ❌ broken
 *
 * The broken form runs together because the markdown source lacks a space
 * after `**`. Most renderers tolerate it but it visually breaks the layout.
 *
 * This script inserts a single space before any uppercase letter that
 * immediately follows `**` (the closing bold marker).
 *
 * Conservative — only triggers on uppercase-after-`**`, not lowercase, to
 * avoid false positives in rare inline-bold cases like `**word**ed`.
 *
 * Run with --dry-run first.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-bold-spacing-report.md');

interface Report {
  relPath: string;
  count: number;
}

/**
 * Walk a single line, toggling an "inside bold" state on each `**`.
 * When we encounter a closing `**` immediately followed by an uppercase
 * letter, insert a space.
 */
function healLine(line: string, onFix: () => void): string {
  // Skip lines that are clearly not prose
  if (/^```/.test(line)) return line; // code fence
  if (/^\|/.test(line)) return line; // table row — bold cells legit start with **
  if (/^\s{4,}/.test(line)) return line; // indented code

  let inBold = false;
  let result = '';
  let i = 0;
  while (i < line.length) {
    if (line[i] === '*' && line[i + 1] === '*') {
      // Toggle bold state
      result += '**';
      i += 2;
      const wasBold = inBold;
      inBold = !inBold;
      // If this was a closing marker AND next char is an uppercase letter, insert a space
      if (wasBold && i < line.length && /[A-Z]/.test(line[i])) {
        result += ' ';
        onFix();
      }
      continue;
    }
    result += line[i];
    i++;
  }
  return result;
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
  const reports: Report[] = [];
  let totalFixes = 0;

  for (const f of walk(CONTENT_DIR)) {
    const before = fs.readFileSync(f.abs, 'utf-8');
    const lines = before.split('\n');
    let count = 0;
    const newLines = lines.map(line => healLine(line, () => count++));
    const after = newLines.join('\n');
    if (count > 0) {
      reports.push({ relPath: f.rel, count });
      totalFixes += count;
      if (!dryRun) fs.writeFileSync(f.abs, after);
    }
  }

  const lines: string[] = [];
  lines.push('# Bold-spacing healing report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files modified: **${reports.length}**`);
  lines.push(`- Total spaces inserted: **${totalFixes}**`);
  lines.push('');
  lines.push('## Files');
  lines.push('');
  lines.push('| File | Fixes |');
  lines.push('|---|---|');
  for (const r of reports.sort((a, b) => b.count - a.count)) {
    lines.push(`| \`${r.relPath}\` | ${r.count} |`);
  }
  lines.push('');
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Files modified: ${reports.length}`);
  console.log(`  Spaces inserted: ${totalFixes}`);
}

main();
