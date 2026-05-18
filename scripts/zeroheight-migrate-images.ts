/**
 * Migrate zeroheight S3-hosted images to Cloudinary.
 *
 * Reads:  scripts/zh-image-inventory.json (from zeroheight-extract-images.ts)
 * Writes: scripts/zh-cloudinary-map.json — { originalCleanUrl: { cloudinaryUrl, publicId, ... } }
 *         docs/zeroheight-migration-report.md — per-page replacement table
 *
 * Each image is uploaded to Cloudinary folder `<CLOUDINARY_UPLOAD_FOLDER>/zeroheight/<page-slug>/`
 * with a deterministic public_id based on the S3 file's basename, so re-runs are idempotent.
 *
 * Note: zeroheight S3 URLs are signed and expire in ~24h. Run this within a day
 * of `zeroheight-fetch-all.ts`. If signatures expire, re-fetch then re-run.
 *
 * IMPORTANT: this script does NOT modify any markdown in content/. It produces a
 * map you can apply manually or via a follow-up patch script.
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { v2 as cloudinary } from 'cloudinary';

const REPO = path.resolve(__dirname, '..');
const INVENTORY_PATH = path.join(__dirname, 'zh-image-inventory.json');
const MAP_PATH = path.join(__dirname, 'zh-cloudinary-map.json');
const REPORT_PATH = path.join(REPO, 'docs', 'zeroheight-migration-report.md');

if (!process.env.CLOUDINARY_URL) {
  console.error('CLOUDINARY_URL not set in .env — cannot upload');
  process.exit(1);
}

cloudinary.config({ secure: true });

const FOLDER_BASE = process.env.CLOUDINARY_UPLOAD_FOLDER || 'ldss-cms';

interface ImageRef {
  url: string;
  cleanUrl: string;
  alt: string;
  context: 'markdown' | 'html-img';
  hostname: string;
}

interface PageInventory {
  pageId: number;
  pageName: string;
  pageUrl: string;
  pageSlug: string;
  images: ImageRef[];
}

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

function loadMap(): Record<string, CloudinaryMapEntry> {
  if (!fs.existsSync(MAP_PATH)) return {};
  return JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'));
}

function saveMap(map: Record<string, CloudinaryMapEntry>) {
  fs.writeFileSync(MAP_PATH, JSON.stringify(map, null, 2));
}

function publicIdFor(cleanUrl: string, pageSlug: string): string {
  // Deterministic, idempotent ID. Use cleanUrl hash + S3 basename to avoid collisions.
  const filename = path.basename(new URL(cleanUrl).pathname).replace(/\.[^.]+$/, '');
  const hash = crypto.createHash('sha256').update(cleanUrl).digest('hex').slice(0, 8);
  return `${FOLDER_BASE}/zeroheight/${pageSlug || 'unsorted'}/${filename}-${hash}`;
}

async function uploadOne(img: ImageRef, page: PageInventory): Promise<CloudinaryMapEntry> {
  const publicId = publicIdFor(img.cleanUrl, page.pageSlug);
  const result = await cloudinary.uploader.upload(img.url, {
    public_id: publicId,
    overwrite: false,
    invalidate: false,
    resource_type: 'auto',
    tags: ['ldss-cms', 'zeroheight-migration', `page:${page.pageId}`],
    context: {
      source: 'zeroheight',
      pageId: String(page.pageId),
      pageName: page.pageName,
      pageUrl: page.pageUrl,
      originalUrl: img.cleanUrl,
      alt: img.alt,
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
    pageId: page.pageId,
    pageName: page.pageName,
  };
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const dryRun = args.has('--dry-run');
  const limit = (() => {
    const arg = process.argv.find(a => a.startsWith('--limit='));
    return arg ? parseInt(arg.split('=')[1], 10) : Infinity;
  })();
  const filterPageId = (() => {
    const arg = process.argv.find(a => a.startsWith('--page-id='));
    return arg ? parseInt(arg.split('=')[1], 10) : null;
  })();

  if (!fs.existsSync(INVENTORY_PATH)) {
    console.error(`Missing ${INVENTORY_PATH} — run scripts/zeroheight-extract-images.ts first`);
    process.exit(1);
  }

  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf-8')) as PageInventory[];
  const map = loadMap();

  const work: Array<{ page: PageInventory; img: ImageRef }> = [];
  for (const page of inventory) {
    if (filterPageId && page.pageId !== filterPageId) continue;
    for (const img of page.images) {
      if (map[img.cleanUrl]) continue; // already uploaded
      work.push({ page, img });
    }
  }
  const toProcess = work.slice(0, limit);

  console.log(`Plan: ${toProcess.length} uploads (skipping ${work.length - toProcess.length})`);
  console.log(`Already in map: ${Object.keys(map).length}`);

  if (dryRun) {
    console.log('--dry-run set, exiting before any uploads.');
    return;
  }

  let i = 0;
  let failures = 0;
  for (const job of toProcess) {
    i++;
    try {
      const entry = await uploadOne(job.img, job.page);
      map[job.img.cleanUrl] = entry;
      if (i % 10 === 0 || i === toProcess.length) {
        saveMap(map);
        console.log(`  [${i}/${toProcess.length}] ${job.page.pageName} → ${entry.publicId}`);
      }
    } catch (err: any) {
      failures++;
      console.error(`  [${i}/${toProcess.length}] ${job.page.pageName} FAILED: ${err.message}`);
      // Save progress on failures too
      if (failures % 5 === 0) saveMap(map);
    }
  }
  saveMap(map);

  // Generate report
  const lines: string[] = [];
  lines.push('# Zeroheight → Cloudinary migration report');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Total images in inventory: **${inventory.reduce((acc, p) => acc + p.images.length, 0)}**`);
  lines.push(`- Uploaded to Cloudinary:    **${Object.keys(map).length}**`);
  lines.push(`- This run uploaded:         **${i - failures}** (${failures} failed)`);
  lines.push('');
  lines.push('Each Cloudinary URL replaces the corresponding zeroheight S3 URL in markdown.');
  lines.push('Apply replacements with a follow-up patch script (not yet written).');
  lines.push('');

  for (const page of inventory) {
    if (filterPageId && page.pageId !== filterPageId) continue;
    const migrated = page.images.filter(img => map[img.cleanUrl]);
    if (migrated.length === 0) continue;
    lines.push(`### ${page.pageName}`);
    lines.push('');
    lines.push(`[zeroheight page](${page.pageUrl}) — ${migrated.length}/${page.images.length} images uploaded`);
    lines.push('');
    lines.push('| Original | Cloudinary | Size |');
    lines.push('|---|---|---|');
    for (const img of migrated) {
      const m = map[img.cleanUrl];
      const orig = path.basename(new URL(img.cleanUrl).pathname);
      lines.push(`| \`${orig}\` | [${m.publicId}](${m.cloudinaryUrl}) | ${m.width}×${m.height} (${(m.bytes / 1024).toFixed(0)}KB) |`);
    }
    lines.push('');
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Map:    ${MAP_PATH}`);
  console.log(`✓ Report: ${REPORT_PATH}`);
  console.log(`  Uploaded this run: ${i - failures}`);
  console.log(`  Failed this run:   ${failures}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
