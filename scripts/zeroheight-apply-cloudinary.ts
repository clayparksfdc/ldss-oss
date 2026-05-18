/**
 * Apply the URL replacement map produced by zeroheight-migrate-images.ts to
 * the markdown files under content/.
 *
 * Reads:  scripts/zh-cloudinary-map.json + scripts/zh-image-inventory.json
 * Writes: every content/**\/*.md that references a migrated S3 URL is rewritten
 *         in place — original S3 URL → matched Cloudinary URL.
 *
 * Strategy: for each entry in the map (cleanUrl → cloudinaryUrl), grep the
 * markdown corpus for the cleanUrl and replace. Signed query strings on the
 * S3 URL (?X-Amz-...) are stripped during the match so re-fetched URLs match
 * the same map entry.
 *
 * IMPORTANT: this script DOES mutate content/. Run with `--dry-run` first.
 * Outputs a diff-style report at docs/zeroheight-apply-cloudinary-report.md.
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(REPO, 'content');
const MAP_PATH = path.join(__dirname, 'zh-cloudinary-map.json');
const REPORT_PATH = path.join(REPO, 'docs', 'zeroheight-apply-cloudinary-report.md');

interface CloudinaryMapEntry {
  cloudinaryUrl: string;
  publicId: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  uploadedAt: string;
  pageId: number;
  pageName: string;
}

interface ReplacementHit {
  filePath: string;
  cleanUrl: string;
  cloudinaryUrl: string;
  occurrences: number;
}

function* walkContent(dir: string, base = ''): Generator<{ relPath: string; absPath: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      yield* walkContent(path.join(dir, e.name), path.join(base, e.name));
    } else if (e.name.endsWith('.md')) {
      yield { relPath: path.join(base, e.name), absPath: path.join(dir, e.name) };
    }
  }
}

/**
 * Replace every occurrence of an S3 URL (with or without query string) with the
 * Cloudinary URL. We match by the path portion of the URL — that's stable across
 * signed-URL refreshes.
 *
 * Returns: { content: newContent, count: numReplacements }
 */
function replaceInContent(content: string, cleanUrl: string, cloudinaryUrl: string): { content: string; count: number } {
  // Build a regex that matches:
  //   <hostname><path>(\?[^)\s"'<>]*)?
  // i.e. the clean URL plus an optional query string, terminated by markdown/HTML boundary chars
  const url = new URL(cleanUrl);
  const escaped = `${url.hostname}${url.pathname}`.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`https?://${escaped}(\\?[^)\\s"'<>]*)?`, 'g');
  let count = 0;
  const next = content.replace(pattern, () => {
    count++;
    return cloudinaryUrl;
  });
  return { content: next, count };
}

function main() {
  const dryRun = process.argv.includes('--dry-run');

  if (!fs.existsSync(MAP_PATH)) {
    console.error(`Missing ${MAP_PATH} — run scripts/zeroheight-migrate-images.ts first`);
    process.exit(1);
  }

  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8')) as Record<string, CloudinaryMapEntry>;
  const entries = Object.entries(map);
  console.log(`Loaded ${entries.length} URL mappings.`);
  if (dryRun) console.log('🚧 --dry-run: no files will be written.');

  const hits: ReplacementHit[] = [];
  const filesTouched = new Set<string>();

  // For each markdown file, do a single pass that applies every map entry.
  // Faster than N * M (N entries * M files) because we read each file once.
  let filesScanned = 0;
  for (const file of walkContent(CONTENT_DIR)) {
    filesScanned++;
    let content = fs.readFileSync(file.absPath, 'utf-8');
    let modified = false;

    for (const [cleanUrl, entry] of entries) {
      const { content: next, count } = replaceInContent(content, cleanUrl, entry.cloudinaryUrl);
      if (count > 0) {
        hits.push({
          filePath: file.relPath,
          cleanUrl,
          cloudinaryUrl: entry.cloudinaryUrl,
          occurrences: count,
        });
        content = next;
        modified = true;
      }
    }

    if (modified && !dryRun) {
      fs.writeFileSync(file.absPath, content);
      filesTouched.add(file.relPath);
    } else if (modified) {
      filesTouched.add(file.relPath);
    }
  }

  // Report
  const lines: string[] = [];
  lines.push('# Zeroheight → Cloudinary URL replacement report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN (no files written)' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Map entries loaded: **${entries.length}**`);
  lines.push(`- Markdown files scanned: **${filesScanned}**`);
  lines.push(`- Markdown files modified: **${filesTouched.size}**`);
  lines.push(`- Total replacements: **${hits.reduce((acc, h) => acc + h.occurrences, 0)}**`);
  lines.push('');

  if (hits.length === 0) {
    lines.push('_No matching S3 URLs found in content/. Either the migration map is empty or the markdown has already been patched._');
  } else {
    // Group hits by file
    const byFile = new Map<string, ReplacementHit[]>();
    for (const h of hits) {
      if (!byFile.has(h.filePath)) byFile.set(h.filePath, []);
      byFile.get(h.filePath)!.push(h);
    }

    lines.push('## Files modified');
    lines.push('');
    for (const [file, fileHits] of [...byFile.entries()].sort()) {
      const totalOccurrences = fileHits.reduce((acc, h) => acc + h.occurrences, 0);
      lines.push(`### \`${file}\` (${totalOccurrences} replacement${totalOccurrences === 1 ? '' : 's'})`);
      lines.push('');
      for (const h of fileHits) {
        const filename = path.basename(new URL(h.cleanUrl).pathname);
        lines.push(`- \`${filename}\` × ${h.occurrences}`);
      }
      lines.push('');
    }
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Files scanned:    ${filesScanned}`);
  console.log(`  Files modified:   ${filesTouched.size} ${dryRun ? '(would be modified)' : ''}`);
  console.log(`  Replacements:     ${hits.reduce((acc, h) => acc + h.occurrences, 0)}`);
}

main();
