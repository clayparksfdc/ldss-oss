/**
 * Convert broken card-link clumps in content/ markdown into proper
 * :::card-grid directives.
 *
 * Two patterns came over from the original migration as malformed links:
 *
 * 1. Multi-line:
 *    [
 *    Title
 *    Description
 *    ](url)
 *
 * 2. Inline clump:
 *    [TitleNoSpaceBetweenWords](url)
 *
 * Both lose their card semantics when rendered as plain markdown links.
 *
 * Strategy:
 *   - Walk content/**\/*.md
 *   - For each file, find runs of 2+ adjacent broken-card links
 *   - Replace the run with a :::card-grid{} block containing ::card{} children
 *   - Single isolated broken-card links are left alone (likely real prose links)
 *
 * --dry-run prints the report without modifying files.
 */

import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const REPORT_PATH = path.join(REPO, 'docs', 'heal-card-grids-report.md');

interface DetectedCard {
  matchStart: number;
  matchEnd: number;
  title: string;
  description: string;
  href: string;
}

/**
 * Find all multi-line broken cards in a file.
 * Pattern: [\n  Title\n  Description...\n  ](url)
 * Title is the first non-blank line; description is the rest joined.
 */
function findMultilineCards(content: string): DetectedCard[] {
  const cards: DetectedCard[] = [];
  // Greedy enough to catch the body but stop at the closing `](`.
  const re = /\[\s*\n([^\]]+?)\n\s*\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const innerLines = m[1].split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (innerLines.length < 1) continue;
    const title = innerLines[0];
    const description = innerLines.slice(1).join(' ').trim();
    cards.push({
      matchStart: m.index,
      matchEnd: m.index + m[0].length,
      title,
      description,
      href: m[2],
    });
  }
  return cards;
}

/**
 * Find all inline-clumped cards.
 * Pattern: [TitleDescription](url) where the link text starts with capital, contains a
 * lowercase→uppercase transition (CamelCase clump), and is at least 20 chars.
 * That heuristic distinguishes broken cards from normal prose links.
 */
function findInlineClumpCards(content: string): DetectedCard[] {
  const cards: DetectedCard[] = [];
  // Match link text that has a lowercase→Capital transition (the clump signal)
  const re = /\[([A-Z][a-z][^\]\n]{15,}?)\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const text = m[1];
    // Must contain at least one lower→Upper transition without a space between
    if (!/[a-z.][A-Z]/.test(text)) continue;
    // Split at the first capital-after-lowercase as the title→description boundary
    const split = text.match(/^(.+?[a-z.])([A-Z].+)$/);
    if (!split) continue;
    const title = split[1].replace(/[.]+$/, '').trim();
    const description = split[2].trim();
    if (title.length < 3 || description.length < 5) continue;
    cards.push({
      matchStart: m.index,
      matchEnd: m.index + m[0].length,
      title,
      description,
      href: m[2],
    });
  }
  return cards;
}

/**
 * Group consecutive cards (within `maxGap` chars of one another) into a single grid.
 * `maxGap` should accommodate whitespace between adjacent links.
 */
function groupAdjacent(cards: DetectedCard[], maxGap = 80): DetectedCard[][] {
  if (cards.length === 0) return [];
  // Sort by position
  cards.sort((a, b) => a.matchStart - b.matchStart);
  const groups: DetectedCard[][] = [];
  let current: DetectedCard[] = [cards[0]];
  for (let i = 1; i < cards.length; i++) {
    const gap = cards[i].matchStart - current[current.length - 1].matchEnd;
    if (gap <= maxGap) {
      current.push(cards[i]);
    } else {
      groups.push(current);
      current = [cards[i]];
    }
  }
  groups.push(current);
  return groups;
}

function escapeAttr(s: string): string {
  return s.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
}

/**
 * Render a group of cards as a :::card-grid block.
 */
function renderCardGrid(cards: DetectedCard[]): string {
  const cols = cards.length === 1 ? 1 : cards.length === 2 ? 2 : 3;
  const lines: string[] = [];
  lines.push(`:::card-grid{columns="${cols}"}`);
  for (const c of cards) {
    const parts = [
      `title="${escapeAttr(c.title)}"`,
      `href="${escapeAttr(c.href)}"`,
    ];
    if (c.description && c.description.length > 0) {
      parts.push(`description="${escapeAttr(c.description)}"`);
    }
    lines.push(`::card{${parts.join(' ')}}`);
  }
  lines.push(':::');
  return lines.join('\n');
}

interface FileReport {
  relPath: string;
  multiline: number;
  inlineClump: number;
  grids: number;
  cardsConverted: number;
}

function processFile(absPath: string, relPath: string, dryRun: boolean): FileReport {
  let content = fs.readFileSync(absPath, 'utf-8');

  const multiline = findMultilineCards(content);
  const inlineClump = findInlineClumpCards(content);
  const all = [...multiline, ...inlineClump];

  if (all.length === 0) {
    return { relPath, multiline: 0, inlineClump: 0, grids: 0, cardsConverted: 0 };
  }

  // Filter out overlapping matches (an inline clump within a multi-line link, etc.)
  // Sort by start, then keep non-overlapping ones.
  all.sort((a, b) => a.matchStart - b.matchStart);
  const nonOverlap: DetectedCard[] = [];
  let lastEnd = -1;
  for (const c of all) {
    if (c.matchStart >= lastEnd) {
      nonOverlap.push(c);
      lastEnd = c.matchEnd;
    }
  }

  const groups = groupAdjacent(nonOverlap);
  // Only group if the group has 2+ cards (single broken card might be intentional)
  const realGroups = groups.filter(g => g.length >= 2);
  if (realGroups.length === 0) {
    return { relPath, multiline: multiline.length, inlineClump: inlineClump.length, grids: 0, cardsConverted: 0 };
  }

  // Splice in reverse order so earlier match offsets remain valid
  const sortedGroups = [...realGroups].sort((a, b) => b[0].matchStart - a[0].matchStart);
  for (const group of sortedGroups) {
    const start = group[0].matchStart;
    const end = group[group.length - 1].matchEnd;
    const replacement = renderCardGrid(group);
    content = content.slice(0, start) + replacement + content.slice(end);
  }

  if (!dryRun) {
    fs.writeFileSync(absPath, content);
  }

  const totalConverted = realGroups.reduce((acc, g) => acc + g.length, 0);
  return {
    relPath,
    multiline: multiline.length,
    inlineClump: inlineClump.length,
    grids: realGroups.length,
    cardsConverted: totalConverted,
  };
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

  const reports: FileReport[] = [];
  for (const f of walk(CONTENT_DIR)) {
    const r = processFile(f.abs, f.rel, dryRun);
    if (r.cardsConverted > 0) reports.push(r);
  }

  const totalGrids = reports.reduce((acc, r) => acc + r.grids, 0);
  const totalCards = reports.reduce((acc, r) => acc + r.cardsConverted, 0);

  // Report
  const lines: string[] = [];
  lines.push('# Card-grid healing report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files modified: **${reports.length}**`);
  lines.push(`- Card grids created: **${totalGrids}**`);
  lines.push(`- Individual cards converted: **${totalCards}**`);
  lines.push('');
  lines.push('## Files');
  lines.push('');
  lines.push('| File | Multi-line cards | Inline-clump cards | Grids created | Cards |');
  lines.push('|---|---|---|---|---|');
  for (const r of reports.sort((a, b) => a.relPath.localeCompare(b.relPath))) {
    lines.push(`| \`${r.relPath}\` | ${r.multiline} | ${r.inlineClump} | ${r.grids} | ${r.cardsConverted} |`);
  }
  lines.push('');
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Files modified: ${reports.length}`);
  console.log(`  Grids created:  ${totalGrids}`);
  console.log(`  Cards converted: ${totalCards}`);
}

main();
