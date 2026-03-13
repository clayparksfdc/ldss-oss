#!/usr/bin/env tsx
/**
 * Backfill stub markdown pages from existing crawl data (Pass 1)
 * and targeted Puppeteer crawls of lightningdesignsystem.com (Pass 3).
 *
 * Usage:
 *   npx tsx scripts/backfill-stubs.ts --dry-run          # preview changes
 *   npx tsx scripts/backfill-stubs.ts --pass=json         # only JSON pass
 *   npx tsx scripts/backfill-stubs.ts --pass=crawl        # only Puppeteer pass
 *   npx tsx scripts/backfill-stubs.ts --pass=all          # both passes
 *   npx tsx scripts/backfill-stubs.ts                     # defaults to --pass=all
 */

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.resolve(__dirname, '../content');
const CRAWL_DATA_DIR = path.resolve(__dirname, '../../ldss-os/data/content');
const MIN_BODY_LINES = 10;

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const passArg = args.find(a => a.startsWith('--pass='))?.split('=')[1] || 'all';
const RUN_JSON = passArg === 'json' || passArg === 'all';
const RUN_CRAWL = passArg === 'crawl' || passArg === 'all';

interface StubFile {
  filePath: string;
  relativePath: string;
  slug: string;
  frontmatter: string;
  bodyLines: number;
}

interface CrawlBlock {
  type: string;
  tag?: string;
  content?: string;
  html?: string;
  items?: Array<{ text?: string; content?: string }>;
  listType?: string;
  level?: number;
  images?: Array<{ src?: string; alt?: string }>;
  links?: Array<{ href?: string; text?: string }>;
}

// ── HTML → Markdown helpers ────────────────────────────────────────────────

function cleanHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/div>\s*/gi, '\n')
    .replace(/<div[^>]*>/gi, '')
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gis, (_, level, text) =>
      '#'.repeat(+level) + ' ' + text.trim() + '\n\n')
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gis, '**$1**')
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gis, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gis, '*$1*')
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gis, '*$1*')
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gis, '`$1`')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gis, '[$2]($1)')
    .replace(/<span[^>]*>([\s\S]*?)<\/span>/gis, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function htmlListToMarkdown(html: string, listType?: string): string {
  if (!html) return '';
  const items: string[] = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(html)) !== null) {
    const text = cleanHtml(match[1]).trim();
    if (text) items.push(text);
  }
  if (items.length === 0) {
    const fallback = cleanHtml(html).trim();
    return fallback ? fallback + '\n\n' : '';
  }
  return items
    .map((item, i) => {
      const prefix = listType === 'ordered' ? `${i + 1}.` : '-';
      return `${prefix} ${item}`;
    })
    .join('\n') + '\n\n';
}

function htmlTableToMarkdown(html: string): string {
  if (!html) return '';
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const rows: string[][] = [];
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const cells: string[] = [];
    const cellRe = /<t([dh])[^>]*>([\s\S]*?)<\/t\1>/gi;
    let cellMatch;
    while ((cellMatch = cellRe.exec(rowMatch[1])) !== null) {
      cells.push(cleanHtml(cellMatch[2]).replace(/\|/g, '\\|').replace(/\n/g, ' ').trim());
    }
    if (cells.length > 0) rows.push(cells);
  }
  if (rows.length === 0) return cleanHtml(html) + '\n\n';

  const colCount = Math.max(...rows.map(r => r.length));
  const normalized = rows.map(r => {
    while (r.length < colCount) r.push('');
    return r;
  });

  let md = '\n';
  normalized.forEach((cells, i) => {
    md += '| ' + cells.join(' | ') + ' |\n';
    if (i === 0) md += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
  });
  return md + '\n';
}

// ── Block → Markdown converter (for crawl JSON format) ────────────────────

function convertBlock(block: CrawlBlock): string {
  switch (block.type) {
    case 'heading': {
      const level = block.level || (block.tag ? parseInt(block.tag.replace(/\D/g, '')) : 2) || 2;
      const text = block.content || cleanHtml(block.html || '');
      if (!text.trim()) return '';
      return '#'.repeat(level) + ' ' + text.trim() + '\n\n';
    }

    case 'paragraph': {
      const text = block.html ? cleanHtml(block.html) : (block.content || '');
      if (!text.trim()) return '';
      return text.trim() + '\n\n';
    }

    case 'list': {
      if (block.html) return htmlListToMarkdown(block.html, block.listType);
      if (block.content) {
        return block.content.trim() + '\n\n';
      }
      return '';
    }

    case 'table': {
      if (block.html) return htmlTableToMarkdown(block.html);
      if (block.content) return block.content.trim() + '\n\n';
      return '';
    }

    case 'image': {
      const alt = block.content || '';
      const images = block.images || [];
      if (images.length > 0 && images[0].src) {
        return `![${alt}](${images[0].src})\n\n`;
      }
      if (alt) return `*${alt.trim()}*\n\n`;
      return '';
    }

    case 'callout': {
      const text = block.html ? cleanHtml(block.html) : (block.content || '');
      if (!text.trim()) return '';
      return `:::callout\n${text.trim()}\n:::\n\n`;
    }

    case 'code': {
      const text = block.content || cleanHtml(block.html || '');
      if (!text.trim()) return '';
      return '```\n' + text.trim() + '\n```\n\n';
    }

    case 'div': {
      const text = block.html ? cleanHtml(block.html) : (block.content || '');
      if (!text.trim()) return '';
      return text.trim() + '\n\n';
    }

    default:
      return '';
  }
}

// ── Find stubs ─────────────────────────────────────────────────────────────

function findStubs(): StubFile[] {
  const stubs: StubFile[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.md') && entry.name !== 'navigation.md') {
        const rel = path.relative(CONTENT_DIR, full);
        const raw = fs.readFileSync(full, 'utf-8');

        const fmEnd = raw.indexOf('\n---', 3);
        const frontmatter = fmEnd >= 0 ? raw.substring(0, fmEnd + 4) : '';
        const body = fmEnd >= 0 ? raw.substring(fmEnd + 4) : raw;
        const bodyLines = body.split('\n').filter(l => l.trim().length > 0).length;

        if (bodyLines < MIN_BODY_LINES) {
          const slug = path.basename(full, '.md');
          stubs.push({ filePath: full, relativePath: rel, slug, frontmatter, bodyLines });
        }
      }
    }
  }

  walk(CONTENT_DIR);
  return stubs;
}

// ── Pass 1: Backfill from crawl JSON ───────────────────────────────────────

function backfillFromJson(stubs: StubFile[]): { filled: string[]; remaining: StubFile[] } {
  const filled: string[] = [];
  const remaining: StubFile[] = [];

  if (!fs.existsSync(CRAWL_DATA_DIR)) {
    console.log('  ⚠ Crawl data directory not found:', CRAWL_DATA_DIR);
    return { filled, remaining: stubs };
  }

  for (const stub of stubs) {
    const jsonFile = path.join(CRAWL_DATA_DIR, stub.slug + '.json');

    if (!fs.existsSync(jsonFile)) {
      remaining.push(stub);
      continue;
    }

    try {
      const data = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));
      const blocks: CrawlBlock[] = data.blocks || [];

      if (blocks.length === 0) {
        remaining.push(stub);
        continue;
      }

      let markdown = '';
      for (const block of blocks) {
        markdown += convertBlock(block);
      }

      if (markdown.trim().split('\n').filter(l => l.trim()).length < 3) {
        remaining.push(stub);
        continue;
      }

      const newContent = stub.frontmatter + '\n\n' + markdown.trim() + '\n';

      if (DRY_RUN) {
        console.log(`  [dry] Would backfill ${stub.relativePath} (${blocks.length} blocks)`);
      } else {
        fs.writeFileSync(stub.filePath, newContent, 'utf-8');
        console.log(`  ✓ Backfilled ${stub.relativePath} (${blocks.length} blocks)`);
      }
      filled.push(stub.relativePath);
    } catch (e: any) {
      console.log(`  ✗ Error processing ${stub.relativePath}: ${e.message}`);
      remaining.push(stub);
    }
  }

  return { filled, remaining };
}

// ── Pass 3: Puppeteer crawl of lightningdesignsystem.com ───────────────────

const SLUG_URL_MAP: Record<string, string> = {};

function buildSlugUrlMap() {
  if (!fs.existsSync(CRAWL_DATA_DIR)) return;
  for (const f of fs.readdirSync(CRAWL_DATA_DIR)) {
    if (f.startsWith('_') || !f.endsWith('.json')) continue;
    try {
      const data = JSON.parse(fs.readFileSync(path.join(CRAWL_DATA_DIR, f), 'utf-8'));
      if (data.url) {
        const slug = path.basename(f, '.json');
        SLUG_URL_MAP[slug] = data.url;
      }
    } catch {}
  }
}

const EXTRACT_SCRIPT = `
(() => {
  const mainContent =
    document.querySelector('.content [class*="BodyEditor"]') ||
    document.querySelector('[data-testid="body-editor"]') ||
    document.querySelector('.content');

  if (!mainContent) return { blocks: [] };

  const blocks = [];
  let blockIdx = 0;

  const processEl = (el) => {
    const tag = el.tagName;
    const html = el.innerHTML;
    const text = (el.textContent || '').trim();
    if (!text && !el.querySelector('img') && !el.querySelector('iframe')) return;

    let type = 'div';
    if (/^H[1-6]$/.test(tag)) type = 'heading';
    else if (tag === 'P') type = 'paragraph';
    else if (tag === 'UL' || tag === 'OL') type = 'list';
    else if (tag === 'TABLE') type = 'table';
    else if (tag === 'PRE' || tag === 'CODE') type = 'code';
    else if (tag === 'BLOCKQUOTE') type = 'callout';
    else if (el.querySelector('img') && !el.querySelector('p')) type = 'image';

    const images = Array.from(el.querySelectorAll('img')).map((img) => ({
      src: img.getAttribute('src') || '',
      alt: img.getAttribute('alt') || '',
    }));

    const block = { id: 'block-' + (blockIdx++), type, tag, content: text, html, images };
    if (type === 'heading') block.level = parseInt(tag.substring(1), 10);
    if (type === 'list') block.listType = tag === 'UL' ? 'unordered' : 'ordered';
    blocks.push(block);
  };

  const contentChildren = mainContent.querySelectorAll(':scope > div > [class*="block"], :scope > div > div');
  if (contentChildren.length > 0) {
    contentChildren.forEach((child) => {
      const inner = child.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, ol, table, pre, blockquote');
      if (inner.length > 0) inner.forEach(processEl);
      else processEl(child);
    });
  } else {
    mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul, ol, table, pre, blockquote, div')
      .forEach(processEl);
  }

  return { blocks };
})()
`;

async function backfillFromCrawl(stubs: StubFile[]): Promise<{ filled: string[]; remaining: StubFile[] }> {
  const filled: string[] = [];
  const remaining: StubFile[] = [];

  if (stubs.length === 0) return { filled, remaining };

  buildSlugUrlMap();

  const withUrl = stubs.filter(s => SLUG_URL_MAP[s.slug]);
  const withoutUrl = stubs.filter(s => !SLUG_URL_MAP[s.slug]);
  remaining.push(...withoutUrl);

  if (withUrl.length === 0) {
    console.log('  ⚠ No stub pages have URL mappings for crawling');
    return { filled, remaining };
  }

  console.log(`  ${withUrl.length} pages have URLs, ${withoutUrl.length} have no URL mapping`);

  let puppeteer;
  try {
    puppeteer = require(path.resolve(__dirname, '../../ldss-os/node_modules/puppeteer'));
  } catch {
    console.log('  ⚠ Puppeteer not available — skipping crawl pass');
    remaining.push(...withUrl);
    return { filled, remaining };
  }

  console.log(`  Launching browser for ${withUrl.length} pages…`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  );

  for (let i = 0; i < withUrl.length; i++) {
    const stub = withUrl[i];
    const url = SLUG_URL_MAP[stub.slug];
    process.stdout.write(`\r  [${i + 1}/${withUrl.length}] ${stub.slug.padEnd(50).substring(0, 50)}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });

      try {
        await page.waitForSelector(
          '.content [class*="BodyEditor"], [data-testid="body-editor"], .content',
          { timeout: 8000 }
        );
      } catch {}
      await new Promise(r => setTimeout(r, 1000));

      const result: { blocks: CrawlBlock[] } = await page.evaluate(EXTRACT_SCRIPT) as any;
      const blocks = result.blocks || [];

      if (blocks.length === 0) {
        remaining.push(stub);
        continue;
      }

      let markdown = '';
      for (const block of blocks) {
        markdown += convertBlock(block);
      }

      const mdLines = markdown.trim().split('\n').filter(l => l.trim()).length;
      if (mdLines < 3) {
        remaining.push(stub);
        continue;
      }

      const newContent = stub.frontmatter + '\n\n' + markdown.trim() + '\n';

      if (DRY_RUN) {
        console.log(`\n  [dry] Would crawl-fill ${stub.relativePath} (${blocks.length} blocks → ${mdLines} lines)`);
      } else {
        fs.writeFileSync(stub.filePath, newContent, 'utf-8');
        console.log(`\n  ✓ Crawl-filled ${stub.relativePath} (${blocks.length} blocks → ${mdLines} lines)`);
      }
      filled.push(stub.relativePath);
    } catch (e: any) {
      remaining.push(stub);
    }
  }

  process.stdout.write('\n');
  await browser.close();
  return { filled, remaining };
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  Backfill Stub Pages');
  console.log('═══════════════════════════════════════════════════');
  console.log(`  Content dir:  ${CONTENT_DIR}`);
  console.log(`  Crawl data:   ${CRAWL_DATA_DIR}`);
  console.log(`  Mode:         ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`);
  console.log(`  Passes:       ${passArg}`);
  console.log('');

  console.log('Scanning for stub pages (< 10 lines of body content)…');
  const stubs = findStubs();
  console.log(`  Found ${stubs.length} stub pages\n`);

  if (stubs.length === 0) {
    console.log('Nothing to do!');
    return;
  }

  let totalFilled = 0;
  let currentStubs = stubs;

  if (RUN_JSON) {
    console.log('── Pass 1: Backfill from crawl JSON data ──');
    const { filled, remaining } = backfillFromJson(currentStubs);
    totalFilled += filled.length;
    currentStubs = remaining;
    console.log(`  Pass 1 result: ${filled.length} filled, ${remaining.length} remaining\n`);
  }

  if (RUN_CRAWL && currentStubs.length > 0) {
    console.log('── Pass 3: Targeted Puppeteer crawl ──');
    const { filled, remaining } = await backfillFromCrawl(currentStubs);
    totalFilled += filled.length;
    currentStubs = remaining;
    console.log(`  Pass 3 result: ${filled.length} filled, ${remaining.length} remaining\n`);
  }

  console.log('═══════════════════════════════════════════════════');
  console.log(`  Total filled:     ${totalFilled}`);
  console.log(`  Still empty:      ${currentStubs.length}`);
  console.log('═══════════════════════════════════════════════════');

  if (currentStubs.length > 0) {
    console.log('\nStill-empty pages:');
    for (const s of currentStubs) {
      console.log(`  - ${s.relativePath}`);
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
