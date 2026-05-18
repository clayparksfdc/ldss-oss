/**
 * Scan cached zeroheight pages for image references and emit an inventory.
 *
 * Pages on zeroheight render Figma embeds, screenshots, and uploaded images
 * all as `<img>` / markdown image tags pointing at S3 URLs (signed, expiring).
 * We migrate them all to Cloudinary in a follow-up step; this script does
 * discovery + reporting only.
 *
 * Reads:  scripts/zh-cache/*.json
 * Writes: docs/zeroheight-image-inventory.md
 *         scripts/zh-image-inventory.json (machine-readable for the migrator)
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const CACHE_DIR = path.join(__dirname, 'zh-cache');
const REPORT_PATH = path.join(REPO, 'docs', 'zeroheight-image-inventory.md');
const JSON_PATH = path.join(__dirname, 'zh-image-inventory.json');

interface ImageRef {
  url: string;
  cleanUrl: string; // URL with query string stripped
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

const MD_IMAGE_RE = /!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g;
const HTML_IMG_RE = /<img\s+[^>]*src=["'](https?:\/\/[^"']+)["'][^>]*?(?:alt=["']([^"']*)["'])?[^>]*>/gi;

function extractFromString(s: string): ImageRef[] {
  const refs: ImageRef[] = [];

  for (const m of s.matchAll(MD_IMAGE_RE)) {
    const url = m[2];
    refs.push({
      url,
      cleanUrl: url.split('?')[0],
      alt: m[1],
      context: 'markdown',
      hostname: safeHost(url),
    });
  }

  for (const m of s.matchAll(HTML_IMG_RE)) {
    const url = m[1];
    refs.push({
      url,
      cleanUrl: url.split('?')[0],
      alt: m[2] || '',
      context: 'html-img',
      hostname: safeHost(url),
    });
  }

  return refs;
}

function safeHost(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '?';
  }
}

function extractFromPage(pageJson: any): ImageRef[] {
  const page = pageJson?.data?.page;
  if (!page) return [];
  const refs: ImageRef[] = [];

  if (typeof page.content === 'string') {
    refs.push(...extractFromString(page.content));
  }

  if (Array.isArray(page.tabs)) {
    for (const tab of page.tabs) {
      if (typeof tab.content === 'string') {
        refs.push(...extractFromString(tab.content));
      }
    }
  }

  // Dedupe by cleanUrl (signed query strings differ each fetch)
  const seen = new Set<string>();
  const unique: ImageRef[] = [];
  for (const r of refs) {
    if (seen.has(r.cleanUrl)) continue;
    seen.add(r.cleanUrl);
    unique.push(r);
  }
  return unique;
}

function main() {
  if (!fs.existsSync(CACHE_DIR)) {
    console.error(`Cache dir missing: ${CACHE_DIR} — run scripts/zeroheight-fetch-all.ts first`);
    process.exit(1);
  }

  const inventoryPath = path.join(CACHE_DIR, '_index.json');
  if (!fs.existsSync(inventoryPath)) {
    console.error(`Cache index missing: ${inventoryPath}`);
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(inventoryPath, 'utf-8')) as Array<{
    id: number; uid: string; slug: string; url: string; name: string; hasTabs: boolean;
  }>;

  const inventory: PageInventory[] = [];
  let totalImages = 0;
  const hostCounts = new Map<string, number>();

  for (const entry of index) {
    const pagePath = path.join(CACHE_DIR, `${entry.id}.json`);
    if (!fs.existsSync(pagePath)) continue;
    const pageJson = JSON.parse(fs.readFileSync(pagePath, 'utf-8'));
    const images = extractFromPage(pageJson);
    if (images.length === 0) continue;
    inventory.push({
      pageId: entry.id,
      pageName: entry.name,
      pageUrl: entry.url,
      pageSlug: entry.slug,
      images,
    });
    totalImages += images.length;
    for (const img of images) {
      hostCounts.set(img.hostname, (hostCounts.get(img.hostname) || 0) + 1);
    }
  }

  fs.writeFileSync(JSON_PATH, JSON.stringify(inventory, null, 2));

  // Generate human-readable report
  const lines: string[] = [];
  lines.push('# Zeroheight image inventory');
  lines.push('');
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Pages with images: **${inventory.length}** of ${index.length}`);
  lines.push(`- Total unique image references: **${totalImages}**`);
  lines.push('');
  lines.push('### By host');
  lines.push('');
  lines.push('| Hostname | Image count |');
  lines.push('|---|---|');
  const sortedHosts = [...hostCounts.entries()].sort((a, b) => b[1] - a[1]);
  for (const [host, count] of sortedHosts) {
    lines.push(`| \`${host}\` | ${count} |`);
  }
  lines.push('');

  lines.push('## Pages by image count');
  lines.push('');
  lines.push('| Page | Images | URL |');
  lines.push('|---|---|---|');
  const sortedPages = [...inventory].sort((a, b) => b.images.length - a.images.length);
  for (const p of sortedPages.slice(0, 30)) {
    lines.push(`| ${p.pageName} | ${p.images.length} | [open](${p.pageUrl}) |`);
  }
  if (sortedPages.length > 30) {
    lines.push(`| _… ${sortedPages.length - 30} more_ |  |  |`);
  }
  lines.push('');

  lines.push('## Per-page detail');
  lines.push('');
  lines.push('<details><summary>Click to expand all pages</summary>');
  lines.push('');
  for (const p of inventory.sort((a, b) => a.pageName.localeCompare(b.pageName))) {
    lines.push(`### ${p.pageName}`);
    lines.push('');
    lines.push(`[Open in zeroheight](${p.pageUrl}) — ${p.images.length} image(s)`);
    lines.push('');
    for (const img of p.images) {
      const altDisplay = img.alt ? ` *${img.alt}*` : '';
      lines.push(`- \`${img.hostname}\` (${img.context})${altDisplay}`);
    }
    lines.push('');
  }
  lines.push('</details>');
  lines.push('');

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));

  console.log(`✓ Wrote ${REPORT_PATH}`);
  console.log(`✓ Wrote ${JSON_PATH} (machine-readable)`);
  console.log(`  Pages with images: ${inventory.length}`);
  console.log(`  Total images:      ${totalImages}`);
  console.log(`  Top hosts:`);
  for (const [host, count] of sortedHosts.slice(0, 5)) {
    console.log(`    ${count.toString().padStart(4)}  ${host}`);
  }
}

main();
