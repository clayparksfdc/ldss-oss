/**
 * Many "missing" /assets/images/slds-uploads-<HASH>.<ext> paths in
 * frontend/public/ / content/ are actually references to images that were
 * previously rehosted from zeroheight S3 — and we already migrated those S3
 * URLs to Cloudinary in scripts/zh-cloudinary-map.json.
 *
 * This script bridges the two maps: for each "missing" local path, extract the
 * hash, look it up in the zh map, and add an entry to local-cloudinary-map
 * pointing at the same Cloudinary URL. Then the existing
 * scripts/local-images-apply.ts patches markdown.
 *
 * Reads:  scripts/local-cloudinary-map.json (existing local→Cloudinary map)
 *         scripts/zh-cloudinary-map.json    (zeroheight→Cloudinary map)
 *         frontend/public/ tree (to skip paths that actually exist)
 * Walks:  content/, frontend/src/ (to find slds-uploads-* refs)
 * Writes: scripts/local-cloudinary-map.json (extended in place)
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const REPO = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(REPO, 'frontend', 'public');
const LOCAL_MAP_PATH = path.join(__dirname, 'local-cloudinary-map.json');
const ZH_MAP_PATH = path.join(__dirname, 'zh-cloudinary-map.json');

const REF_RE = /\/assets\/images\/slds-uploads-([A-Za-z0-9_-]+)\.(png|jpg|jpeg|gif|webp|svg)/g;

interface Entry {
  cloudinaryUrl: string;
  publicId: string;
  width: number;
  height: number;
  bytes: number;
  format: string;
  uploadedAt: string;
  originalPath: string;
}

function findRefs(): Set<string> {
  const refs = new Set<string>();
  const dirs = [path.join(REPO, 'content'), path.join(REPO, 'frontend', 'src')];
  function walk(dir: string) {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.(md|tsx|ts|css)$/.test(e.name)) {
        const content = fs.readFileSync(full, 'utf-8');
        for (const m of content.matchAll(REF_RE)) {
          refs.add(`/assets/images/slds-uploads-${m[1]}.${m[2]}`);
        }
      }
    }
  }
  for (const d of dirs) walk(d);
  return refs;
}

function buildHashIndex(zhMap: Record<string, Entry>): Map<string, Entry> {
  const idx = new Map<string, Entry>();
  for (const [zhUrl, entry] of Object.entries(zhMap)) {
    // zhUrl like https://zeroheight-user-uploads.s3.../images/<HASH>.<ext>
    const m = zhUrl.match(/\/([A-Za-z0-9_-]+)\.([a-z]+)$/);
    if (!m) continue;
    const key = `${m[1]}.${m[2]}`;
    idx.set(key, entry);
  }
  return idx;
}

function main() {
  if (!fs.existsSync(ZH_MAP_PATH)) {
    console.error(`Missing ${ZH_MAP_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(LOCAL_MAP_PATH)) {
    console.error(`Missing ${LOCAL_MAP_PATH}`);
    process.exit(1);
  }

  const zhMap = JSON.parse(fs.readFileSync(ZH_MAP_PATH, 'utf-8')) as Record<string, Entry>;
  const localMap = JSON.parse(fs.readFileSync(LOCAL_MAP_PATH, 'utf-8')) as Record<string, Entry>;

  const refs = findRefs();
  const zhByHash = buildHashIndex(zhMap);

  console.log(`Local refs to slds-uploads-*: ${refs.size}`);
  console.log(`Zh map entries: ${Object.keys(zhMap).length}`);

  let bridged = 0;
  let onDisk = 0;
  let alreadyMapped = 0;
  let unmatched = 0;
  const unmatchedList: string[] = [];

  for (const ref of refs) {
    if (localMap[ref]) { alreadyMapped++; continue; }
    if (fs.existsSync(path.join(PUBLIC_DIR, ref))) { onDisk++; continue; }

    // Extract hash + ext
    const m = ref.match(/\/assets\/images\/slds-uploads-([A-Za-z0-9_-]+)\.([a-z]+)$/);
    if (!m) { unmatched++; unmatchedList.push(ref); continue; }
    const lookupKey = `${m[1]}.${m[2]}`;
    const zhEntry = zhByHash.get(lookupKey);
    if (zhEntry) {
      localMap[ref] = { ...zhEntry, originalPath: ref };
      bridged++;
    } else {
      unmatched++;
      unmatchedList.push(ref);
    }
  }

  fs.writeFileSync(LOCAL_MAP_PATH, JSON.stringify(localMap, null, 2));

  console.log(`\nResults:`);
  console.log(`  Already mapped:        ${alreadyMapped}`);
  console.log(`  Exist on disk:         ${onDisk}`);
  console.log(`  Bridged via zh map:    ${bridged}`);
  console.log(`  Still unmatched:       ${unmatched}`);

  if (unmatched > 0 && unmatchedList.length <= 30) {
    console.log(`\nUnmatched paths:`);
    for (const u of unmatchedList) console.log(`  ${u}`);
  } else if (unmatched > 30) {
    console.log(`\nFirst 30 unmatched:`);
    for (const u of unmatchedList.slice(0, 30)) console.log(`  ${u}`);
    console.log(`  ... ${unmatched - 30} more`);
  }

  console.log(`\n✓ Updated ${LOCAL_MAP_PATH}`);
  console.log(`Run scripts/local-images-apply.ts to patch markdown with the new mappings.`);
}

main();
