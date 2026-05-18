/**
 * Fetches every page in the SLDS 2 zeroheight styleguide and caches the JSON
 * locally. Subsequent audit / migration scripts read from the cache instead of
 * hitting the API — replayable, no rate limits.
 *
 * Output: scripts/zh-cache/<page-id>.json + scripts/zh-cache/_index.json
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const ZH_API = 'https://zeroheight.com/open_api/v2';
const TOKEN = process.env.ZEROHEIGHT_API_TOKEN;
const CLIENT_ID = process.env.ZEROHEIGHT_CLIENT_ID;
const STYLEGUIDE_ID = process.env.ZEROHEIGHT_STYLEGUIDE_ID;

if (!TOKEN || !CLIENT_ID || !STYLEGUIDE_ID) {
  console.error('Missing ZEROHEIGHT_API_TOKEN, ZEROHEIGHT_CLIENT_ID, or ZEROHEIGHT_STYLEGUIDE_ID in .env');
  process.exit(1);
}

const CACHE_DIR = path.resolve(__dirname, 'zh-cache');
fs.mkdirSync(CACHE_DIR, { recursive: true });

const headers = {
  'X-API-CLIENT': CLIENT_ID,
  'X-API-KEY': TOKEN,
  'Accept': 'application/json',
};

interface PageListEntry {
  id: number;
  name: string;
  hidden: boolean;
  is_category: boolean;
  created_at: string;
  updated_at: string;
}

async function getJson<T>(url: string, attempt = 1): Promise<T> {
  const res = await fetch(url, { headers });
  if (res.status === 429) {
    const body = await res.json().catch(() => ({} as any));
    const resetTime = body?.data?.reset_time ? body.data.reset_time * 1000 : Date.now() + 30000;
    const waitMs = Math.max(1000, resetTime - Date.now() + 500);
    console.log(`  ⏳ 429 rate-limited, waiting ${Math.ceil(waitMs / 1000)}s before retry (attempt ${attempt})`);
    await new Promise(r => setTimeout(r, waitMs));
    if (attempt < 5) return getJson(url, attempt + 1);
  }
  if (!res.ok) {
    throw new Error(`GET ${url} → ${res.status}: ${await res.text().then(t => t.slice(0, 200))}`);
  }
  return res.json() as Promise<T>;
}

async function fetchPageList(): Promise<PageListEntry[]> {
  const all: PageListEntry[] = [];
  let cursor = 1;
  while (true) {
    const data = await getJson<{ data: { pages: PageListEntry[] } }>(
      `${ZH_API}/styleguides/${STYLEGUIDE_ID}/pages?per_page=200&page=${cursor}`,
    );
    if (!data.data.pages || data.data.pages.length === 0) break;
    all.push(...data.data.pages);
    if (data.data.pages.length < 200) break;
    cursor++;
  }
  return all;
}

async function fetchPage(id: number): Promise<any> {
  return getJson<any>(`${ZH_API}/pages/${id}`);
}

async function main() {
  console.log(`Fetching page list for styleguide ${STYLEGUIDE_ID}…`);
  const pages = await fetchPageList();
  console.log(`  Found ${pages.length} pages (${pages.filter(p => !p.is_category).length} non-category)`);

  fs.writeFileSync(path.join(CACHE_DIR, '_pages-list.json'), JSON.stringify(pages, null, 2));

  const real = pages.filter(p => !p.is_category && !p.hidden);
  const index: Array<{ id: number; uid: string; slug: string; url: string; name: string; hasTabs: boolean }> = [];

  let i = 0;
  for (const p of real) {
    i++;
    const cachePath = path.join(CACHE_DIR, `${p.id}.json`);
    if (fs.existsSync(cachePath)) {
      const cached = JSON.parse(fs.readFileSync(cachePath, 'utf-8'));
      index.push({
        id: p.id,
        uid: cached.data?.page?.uid || '',
        slug: cached.data?.page?.slug || '',
        url: cached.data?.page?.url || '',
        name: p.name,
        hasTabs: Array.isArray(cached.data?.page?.tabs) && cached.data.page.tabs.length > 0,
      });
      if (i % 25 === 0) console.log(`  [${i}/${real.length}] cached`);
      continue;
    }

    try {
      const detail = await fetchPage(p.id);
      fs.writeFileSync(cachePath, JSON.stringify(detail, null, 2));
      const page = detail.data?.page;
      index.push({
        id: p.id,
        uid: page?.uid || '',
        slug: page?.slug || '',
        url: page?.url || '',
        name: p.name,
        hasTabs: Array.isArray(page?.tabs) && page.tabs.length > 0,
      });
      console.log(`  [${i}/${real.length}] ${p.name} → ${cachePath}`);
      // Small delay to be polite to the API
      await new Promise(r => setTimeout(r, 100));
    } catch (err: any) {
      console.error(`  [${i}/${real.length}] ${p.name} FAILED: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(CACHE_DIR, '_index.json'), JSON.stringify(index, null, 2));
  console.log(`✓ Cached ${index.length} pages → ${CACHE_DIR}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
