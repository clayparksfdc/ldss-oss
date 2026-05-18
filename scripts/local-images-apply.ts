/**
 * Apply scripts/local-cloudinary-map.json to source files: replace every
 * local path like /assets/images/foo.png with the matching Cloudinary URL.
 *
 * Reads:  scripts/local-cloudinary-map.json
 * Walks:  content/**\/*.md, frontend/src/**\/*.{tsx,ts,css}
 *         (NOT frontend/out/ — that's regenerated; NOT frontend/public/ — those are the originals)
 * Writes: docs/local-images-apply-report.md
 *
 * Run --dry-run first.
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const MAP_PATH = path.join(__dirname, 'local-cloudinary-map.json');
const REPORT_PATH = path.join(REPO, 'docs', 'local-images-apply-report.md');

interface MapEntry {
  cloudinaryUrl: string;
  publicId: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  uploadedAt: string;
  originalPath: string;
}

const SCAN_DIRS = [
  path.join(REPO, 'content'),
  path.join(REPO, 'frontend', 'src'),
];

function* walk(dir: string, base = ''): Generator<{ relPath: string; absPath: string }> {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      yield* walk(path.join(dir, e.name), path.join(base, e.name));
    } else if (/\.(md|tsx|ts|css)$/.test(e.name)) {
      yield { relPath: path.join(base, e.name), absPath: path.join(dir, e.name) };
    }
  }
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

interface Hit {
  relPath: string;
  originalPath: string;
  cloudinaryUrl: string;
  occurrences: number;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');

  if (!fs.existsSync(MAP_PATH)) {
    console.error(`Missing ${MAP_PATH} — run scripts/local-images-migrate.ts first`);
    process.exit(1);
  }

  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8')) as Record<string, MapEntry>;
  const entries = Object.entries(map);
  console.log(`Loaded ${entries.length} URL mappings.`);
  if (dryRun) console.log('🚧 --dry-run');

  const hits: Hit[] = [];
  const filesTouched = new Set<string>();
  let filesScanned = 0;

  for (const baseDir of SCAN_DIRS) {
    if (!fs.existsSync(baseDir)) continue;
    const baseLabel = path.relative(REPO, baseDir);
    for (const file of walk(baseDir)) {
      filesScanned++;
      const relFromRepo = path.join(baseLabel, file.relPath);
      let content = fs.readFileSync(file.absPath, 'utf-8');
      let modified = false;

      for (const [originalPath, entry] of entries) {
        // Match the path as a complete URL (preceded by start/quote/paren and followed by end/quote/paren/closing-bracket etc).
        // Avoids partial matches if a path is a substring of another.
        const re = new RegExp(`(?<![A-Za-z0-9_-])${escapeRegex(originalPath)}(?![A-Za-z0-9_./-])`, 'g');
        let count = 0;
        const next = content.replace(re, () => {
          count++;
          return entry.cloudinaryUrl;
        });
        if (count > 0) {
          hits.push({ relPath: relFromRepo, originalPath, cloudinaryUrl: entry.cloudinaryUrl, occurrences: count });
          content = next;
          modified = true;
        }
      }

      if (modified) {
        filesTouched.add(relFromRepo);
        if (!dryRun) fs.writeFileSync(file.absPath, content);
      }
    }
  }

  // Report
  const lines: string[] = [];
  lines.push('# Local images → Cloudinary apply report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Mode: ${dryRun ? '🚧 DRY RUN (no files written)' : '✅ APPLIED'}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Map entries: **${entries.length}**`);
  lines.push(`- Files scanned: **${filesScanned}**`);
  lines.push(`- Files modified: **${filesTouched.size}**`);
  lines.push(`- Total replacements: **${hits.reduce((acc, h) => acc + h.occurrences, 0)}**`);
  lines.push('');

  if (hits.length === 0) {
    lines.push('_No matching paths found._');
  } else {
    const byFile = new Map<string, Hit[]>();
    for (const h of hits) {
      if (!byFile.has(h.relPath)) byFile.set(h.relPath, []);
      byFile.get(h.relPath)!.push(h);
    }
    lines.push('## Files modified');
    lines.push('');
    for (const [file, fileHits] of [...byFile.entries()].sort()) {
      const total = fileHits.reduce((acc, h) => acc + h.occurrences, 0);
      lines.push(`### \`${file}\` (${total})`);
      lines.push('');
      for (const h of fileHits) {
        lines.push(`- \`${h.originalPath}\` × ${h.occurrences}`);
      }
      lines.push('');
    }
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Files scanned:  ${filesScanned}`);
  console.log(`  Files modified: ${filesTouched.size} ${dryRun ? '(would be modified)' : ''}`);
  console.log(`  Replacements:   ${hits.reduce((acc, h) => acc + h.occurrences, 0)}`);
}

main();
