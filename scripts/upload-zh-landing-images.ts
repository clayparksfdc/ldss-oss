/**
 * Upload all images from scripts/zh-landing-raw/*.json to Cloudinary,
 * producing a single manifest at scripts/zh-landing-images.json with
 * Cloudinary URLs ready for the markdown patcher.
 *
 * Cloudinary's `upload(remoteUrl)` follows redirects server-side, so we
 * pass `https://www.lightningdesignsystem.com/uploads/<id>` URLs directly
 * — they 302 to the signed CDN, which Cloudinary fetches.
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';

const REPO = path.resolve(__dirname, '..');
const RAW_DIR = path.join(__dirname, 'zh-landing-raw');
const OUTPUT_PATH = path.join(__dirname, 'zh-landing-images.json');

if (!process.env.CLOUDINARY_URL) {
  console.error('CLOUDINARY_URL not set');
  process.exit(1);
}
cloudinary.config({ secure: true });
const FOLDER_BASE = process.env.CLOUDINARY_UPLOAD_FOLDER || 'ldss-cms';
const FOLDER = `${FOLDER_BASE}/zh-landing`;

interface RawCard {
  title: string;
  description: string;
  href: string;
  cover: string | null;
}

interface RawPage {
  url: string;
  slug: string;
  name: string;
  hero: string | null;
  cards: RawCard[];
}

interface OutCard {
  title: string;
  description: string;
  href: string;
  cover: string | null;        // remote
  coverCloudinary: string | null;
}

interface OutPage extends RawPage {
  heroCloudinary: string | null;
  cards: any[];
}

async function uploadRemote(remoteUrl: string, slug: string, kind: string): Promise<string> {
  const filename = remoteUrl.split('/').pop()!.replace(/\.[^.]+$/, '');
  const publicId = `${FOLDER}/${slug}/${kind}-${filename}`;
  const r = await cloudinary.uploader.upload(remoteUrl, {
    public_id: publicId,
    overwrite: false,
    invalidate: false,
    resource_type: 'auto',
    tags: ['ldss-cms', 'zh-landing'],
  });
  return r.secure_url;
}

async function processPage(raw: RawPage): Promise<OutPage> {
  console.log(`\n[${raw.slug}] ${raw.name}`);
  const out: OutPage = { ...raw, heroCloudinary: null, cards: [] };

  if (raw.hero) {
    try {
      out.heroCloudinary = await uploadRemote(raw.hero, raw.slug, 'hero');
      console.log(`  ✓ hero → ${out.heroCloudinary}`);
    } catch (e: any) {
      console.error(`  ✗ hero failed: ${e.message}`);
    }
  }

  for (const card of raw.cards) {
    const outCard: OutCard = { ...card, coverCloudinary: null };
    if (card.cover) {
      try {
        const safeTitleSlug = card.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 30);
        outCard.coverCloudinary = await uploadRemote(card.cover, raw.slug, `card-${safeTitleSlug}`);
        console.log(`  ✓ ${card.title} → ${outCard.coverCloudinary.split('/').slice(-2).join('/')}`);
      } catch (e: any) {
        console.error(`  ✗ ${card.title} cover failed: ${e.message}`);
      }
    }
    out.cards.push(outCard);
  }
  return out;
}

async function main() {
  const files = fs.readdirSync(RAW_DIR).filter(f => f.endsWith('.json')).sort();
  console.log(`Loading ${files.length} raw pages from ${RAW_DIR}`);

  const result: OutPage[] = [];
  for (const f of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, f), 'utf-8')) as RawPage;
    const out = await processPage(raw);
    result.push(out);
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2));
  }

  const heroCount = result.filter(p => p.heroCloudinary).length;
  const cardCount = result.reduce((acc, p) => acc + p.cards.filter((c: any) => c.coverCloudinary).length, 0);
  console.log(`\n✓ ${OUTPUT_PATH}`);
  console.log(`  Heroes uploaded: ${heroCount}/${result.length}`);
  console.log(`  Card covers uploaded: ${cardCount}`);
}

main().catch(err => { console.error(err); process.exit(1); });
