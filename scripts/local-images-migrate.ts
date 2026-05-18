/**
 * Migrate locally-stored images in frontend/public/ to Cloudinary.
 *
 * Phase 1 (this script): upload only the images that are *referenced* from
 * markdown / source code. Unreferenced images (~447 of them in frontend/public/
 * assets/images and media) are dead weight and handled separately via
 * scripts/local-images-cleanup.ts (not yet written).
 *
 * IMPORTANT: this script does NOT modify any markdown. It produces a map at
 * scripts/local-cloudinary-map.json which the existing
 * scripts/zeroheight-apply-cloudinary.ts pattern can consume in a follow-up.
 *
 * Output:
 *   scripts/local-cloudinary-map.json
 *   docs/local-images-migration-report.md
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

const REPO = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(REPO, 'frontend', 'public');
const MAP_PATH = path.join(__dirname, 'local-cloudinary-map.json');
const REPORT_PATH = path.join(REPO, 'docs', 'local-images-migration-report.md');

if (!process.env.CLOUDINARY_URL) {
  console.error('CLOUDINARY_URL not set in .env');
  process.exit(1);
}
cloudinary.config({ secure: true });
const FOLDER_BASE = process.env.CLOUDINARY_UPLOAD_FOLDER || 'ldss-cms';

interface MapEntry {
  cloudinaryUrl: string;
  publicId: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  uploadedAt: string;
  originalPath: string; // /assets/images/foo.png — what to replace in markdown
}

/**
 * Find every image path under frontend/public/ that's referenced from
 * .md / .tsx / .ts / .css / .html across the repo. Excludes node_modules,
 * dist, and frontend/out (the rebuilt static export).
 */
function findReferencedPaths(): { existing: Set<string>; missing: Set<string> } {
  const refRegex = /\/(?:assets\/images|media)\/[a-zA-Z0-9_./-]+\.(?:png|jpg|jpeg|gif|webp|svg)/g;
  const refs = new Set<string>();

  function walk(dir: string) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      // Skip node_modules, dist, out, .git, anything that'd be a noise read
      if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git' || e.name === 'out' || e.name === 'zh-cache') continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (/\.(md|tsx|ts|css|html|json)$/.test(e.name)) {
        try {
          const content = fs.readFileSync(full, 'utf-8');
          const matches = content.match(refRegex);
          if (matches) for (const m of matches) refs.add(m);
        } catch {
          // ignore unreadable files
        }
      }
    }
  }
  walk(REPO);

  const existing = new Set<string>();
  const missing = new Set<string>();
  for (const ref of refs) {
    const abs = path.join(PUBLIC_DIR, ref);
    if (fs.existsSync(abs)) existing.add(ref);
    else missing.add(ref);
  }
  return { existing, missing };
}

function loadMap(): Record<string, MapEntry> {
  if (!fs.existsSync(MAP_PATH)) return {};
  return JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'));
}

function saveMap(map: Record<string, MapEntry>) {
  fs.writeFileSync(MAP_PATH, JSON.stringify(map, null, 2));
}

function publicIdFor(originalPath: string): string {
  // Preserve the path structure, sanitize Cloudinary-unsafe chars in the basename
  // /assets/images/foo.png → ldss-cms-dev/local/assets/images/foo
  // /media/home.jpg       → ldss-cms-dev/local/media/home
  const noExt = originalPath.replace(/\.[^.]+$/, '');
  // Sanitize: keep only [a-zA-Z0-9/_-]
  const sanitized = noExt.replace(/[^a-zA-Z0-9/_-]/g, '_');
  // Hash suffix to disambiguate legitimately-different files that sanitize to the same name
  const hash = crypto.createHash('sha256').update(originalPath).digest('hex').slice(0, 8);
  return `${FOLDER_BASE}/local${sanitized}-${hash}`;
}

async function uploadOne(originalPath: string): Promise<MapEntry> {
  const abs = path.join(PUBLIC_DIR, originalPath);
  const publicId = publicIdFor(originalPath);
  const result = await cloudinary.uploader.upload(abs, {
    public_id: publicId,
    overwrite: false,
    invalidate: false,
    resource_type: 'auto',
    tags: ['ldss-cms', 'local-migration'],
    context: {
      source: 'frontend/public',
      originalPath,
    },
  });
  return {
    cloudinaryUrl: result.secure_url,
    publicId: result.public_id,
    width: result.width,
    height: result.height,
    bytes: result.bytes,
    format: result.format,
    uploadedAt: new Date().toISOString(),
    originalPath,
  };
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const concurrency = (() => {
    const arg = process.argv.find(a => a.startsWith('--concurrency='));
    return arg ? Math.max(1, parseInt(arg.split('=')[1], 10)) : 4;
  })();

  const { existing, missing } = findReferencedPaths();
  const map = loadMap();

  const todo = [...existing].filter(p => !map[p]);
  console.log(`Referenced & exists:   ${existing.size}`);
  console.log(`Referenced but missing: ${missing.size} (will be reported, not uploaded)`);
  console.log(`Already in map:         ${existing.size - todo.length}`);
  console.log(`Plan to upload:         ${todo.length}`);

  if (dryRun) {
    console.log('--dry-run set, no uploads.');
    if (missing.size > 0) {
      console.log('\nReferenced-but-missing files:');
      for (const m of [...missing].sort()) console.log(`  ${m}`);
    }
    return;
  }

  let cursor = 0;
  let completed = 0;
  let failures = 0;
  async function worker(workerId: number) {
    while (true) {
      const idx = cursor++;
      if (idx >= todo.length) return;
      const p = todo[idx];
      try {
        const entry = await uploadOne(p);
        map[p] = entry;
        completed++;
        if (completed % 5 === 0 || completed === todo.length) {
          saveMap(map);
        }
        console.log(`  [${completed + failures}/${todo.length}] (w${workerId}) ${p} → ${entry.publicId}`);
      } catch (err: any) {
        failures++;
        console.error(`  [${completed + failures}/${todo.length}] (w${workerId}) ${p} FAILED: ${err.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, (_, i) => worker(i + 1)));
  saveMap(map);

  // Report
  const lines: string[] = [];
  lines.push('# Local images → Cloudinary migration report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Referenced file paths (existing on disk): **${existing.size}**`);
  lines.push(`- Referenced but missing on disk: **${missing.size}**`);
  lines.push(`- Uploaded to Cloudinary this run: **${completed}** (${failures} failed)`);
  lines.push(`- Total in map: **${Object.keys(map).length}**`);
  lines.push('');
  lines.push('## Migrated paths');
  lines.push('');
  lines.push('| Path | Cloudinary URL | Size |');
  lines.push('|---|---|---|');
  for (const [p, entry] of Object.entries(map).sort()) {
    lines.push(`| \`${p}\` | [${entry.publicId}](${entry.cloudinaryUrl}) | ${entry.width}×${entry.height} (${(entry.bytes / 1024).toFixed(0)}KB) |`);
  }
  lines.push('');
  lines.push('## Referenced-but-missing files');
  lines.push('');
  if (missing.size === 0) {
    lines.push('_None._');
  } else {
    lines.push('These paths are referenced in markdown / source but the actual file does not exist in `frontend/public/`. They were broken on the live site before this migration.');
    lines.push('');
    for (const m of [...missing].sort()) lines.push(`- \`${m}\``);
  }
  lines.push('');

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));
  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`✓ Map:    ${MAP_PATH}`);
  console.log(`  Uploaded: ${completed}, Failed: ${failures}`);
}

main().catch(err => { console.error(err); process.exit(1); });
