#!/usr/bin/env node

/**
 * Migrates content from the live Payload CMS API to markdown files.
 * Fetches all pages, converts layout blocks to markdown, writes to content/.
 *
 * Usage:
 *   node migrate-from-payload-api.js                # migrate pages with missing/empty content
 *   node migrate-from-payload-api.js --all           # overwrite all existing files
 *   node migrate-from-payload-api.js --pages foo,bar # only specific slugs
 *   node migrate-from-payload-api.js --dry           # show what would change without writing
 */

const fs = require('fs');
const path = require('path');

const API_BASE = process.env.PAYLOAD_API || 'http://localhost:3001/api';
const TARGET_DIR = path.resolve(__dirname, '../lightning-design-system/content');
const PAGE_SIZE = 100;

const args = process.argv.slice(2);
const FLAG_ALL = args.includes('--all');
const FLAG_DRY = args.includes('--dry');
const pagesIdx = args.indexOf('--pages');
const FLAG_PAGES = pagesIdx >= 0 ? (args[pagesIdx + 1] || '').split(',').filter(Boolean) : [];

// ── Block → Markdown converters ──────────────────────────────────────────────

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>\s*<p[^>]*>/gi, '\n\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<\/div>\s*/gi, '\n')
    .replace(/<div[^>]*>/gi, '')
    .replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gis, (_, level, text) => '#'.repeat(+level) + ' ' + text.trim() + '\n\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gis, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/gis, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gis, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/gis, '*$1*')
    .replace(/<code[^>]*>(.*?)<\/code>/gis, '`$1`')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gis, '[$2]($1)')
    .replace(/<span[^>]*>(.*?)<\/span>/gis, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function htmlListToMarkdown(html, listType) {
  if (!html) return '';
  const items = [];
  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let match;
  while ((match = liRegex.exec(html)) !== null) {
    const text = cleanHtml(match[1]).trim();
    if (text) items.push(text);
  }
  if (items.length === 0) {
    const fallback = cleanHtml(html).trim();
    if (fallback) return fallback + '\n\n';
    return '';
  }
  return items.map((item, i) => {
    const prefix = listType === 'ordered' ? `${i + 1}.` : '-';
    return `${prefix} ${item}`;
  }).join('\n') + '\n\n';
}

function htmlTableToMarkdown(html) {
  if (!html) return '';

  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  const rows = [];
  let rowMatch;
  while ((rowMatch = rowRegex.exec(html)) !== null) {
    const cells = [];
    const cellStr = rowMatch[1];
    const cellRe = /<t([dh])[^>]*>([\s\S]*?)<\/t\1>/gi;
    let cellMatch;
    while ((cellMatch = cellRe.exec(cellStr)) !== null) {
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
    if (i === 0) {
      md += '| ' + cells.map(() => '---').join(' | ') + ' |\n';
    }
  });
  return md + '\n';
}

function convertCardBlock(block) {
  const items = block.items || block.cards || [];
  if (items.length === 0) return '';

  const cols = block.columns || Math.min(items.length, 3);
  const lines = [`:::card-grid{columns=${cols}}`];

  for (const item of items) {
    const title = (item.title || '').replace(/"/g, '\\"');
    const desc = (item.description || item.body || '').replace(/"/g, '\\"');
    const href = item.href || item.link || item.url || '#';
    const image = item.image?.url || item.image || '';
    const gradient = item.gradient || '';

    let attrs = `title="${title}"`;
    if (desc) attrs += ` description="${desc}"`;
    attrs += ` href="${href}"`;
    if (image && typeof image === 'string') attrs += ` image="${image}"`;
    if (gradient) attrs += ` gradient="${gradient}"`;

    lines.push(`::card{${attrs}}`);
  }
  lines.push(':::');
  return lines.join('\n') + '\n\n';
}

function convertLinkBlock(block) {
  const items = block.items || block.links || [];
  if (items.length === 0) return '';

  const cols = block.columns || Math.min(items.length, 4);
  const titleAttr = block.title ? ` title="${block.title.replace(/"/g, '\\"')}"` : '';
  const lines = [`:::link-grid{columns=${cols}${titleAttr}}`];

  for (const item of items) {
    const title = (item.title || '').replace(/"/g, '\\"');
    const href = item.href || item.link || item.url || '#';
    const gradient = item.gradient || '';
    const icon = item.icon || '';

    let attrs = `title="${title}" href="${href}"`;
    if (gradient) attrs += ` gradient="${gradient}"`;
    if (icon) attrs += ` icon="${icon}"`;

    lines.push(`::link-card{${attrs}}`);
  }
  lines.push(':::');
  return lines.join('\n') + '\n\n';
}

function convertBlock(block) {
  const type = block.blockType;

  switch (type) {
    case 'heading': {
      const level = parseInt(block.level) || 2;
      const text = block.text || cleanHtml(block.htmlOverride) || '';
      if (!text.trim()) return '';
      return '#'.repeat(level) + ' ' + text.trim() + '\n\n';
    }

    case 'paragraph':
    case 'richText': {
      const text = block.htmlOverride
        ? cleanHtml(block.htmlOverride)
        : (block.content || block.text || block.html || '');
      const cleaned = cleanHtml(text);
      if (!cleaned.trim()) return '';
      return cleaned.trim() + '\n\n';
    }

    case 'list': {
      if (block.contentMode === 'html' && block.html) {
        return htmlListToMarkdown(block.html, block.listType);
      }
      if (block.items && Array.isArray(block.items)) {
        return block.items.map((item, i) => {
          const prefix = block.listType === 'ordered' ? `${i + 1}.` : '-';
          const text = typeof item === 'string' ? item : (item.text || item.content || '');
          return `${prefix} ${cleanHtml(text).trim()}`;
        }).filter(l => l.length > 2).join('\n') + '\n\n';
      }
      if (block.html) return htmlListToMarkdown(block.html, block.listType);
      return '';
    }

    case 'html': {
      const h = block.html || '';
      if (block.htmlType === 'layoutTable' || /<table[\s>]/i.test(h)) {
        return htmlTableToMarkdown(h);
      }
      if (/<[ou]l[\s>]/i.test(h)) {
        return htmlListToMarkdown(h, /<ol[\s>]/i.test(h) ? 'ordered' : 'unordered');
      }
      const cleaned = cleanHtml(h);
      if (!cleaned.trim()) return '';
      return cleaned.trim() + '\n\n';
    }

    case 'table': {
      return htmlTableToMarkdown(block.html || block.content || '');
    }

    case 'cardGrid':
    case 'cards':
    case 'card-grid':
      return convertCardBlock(block);

    case 'linkGrid':
    case 'links':
    case 'link-grid':
    case 'quickLinks':
      return convertLinkBlock(block);

    case 'image': {
      const src = block.src || block.url || '';
      const alt = block.alt || block.label || '';
      if (!src) return '';
      return `![${alt}](${src})\n\n`;
    }

    case 'storybook': {
      const sbUrl = block.url || block.storybookUrl || '';
      if (!sbUrl) return '';
      let title = block.title || block.label || '';
      if (!title && sbUrl.includes('id=')) {
        const storyId = sbUrl.split('id=')[1].split('&')[0]
          .replace(/^components-/, '')
          .replace(/-lbc-examples/g, '');
        const segments = storyId.split('--');
        title = segments.map(seg =>
          seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        ).join(' - ');
      }
      const height = block.height || '400px';
      const lines = ['```storybook'];
      lines.push(`url: ${sbUrl}`);
      if (title) lines.push(`title: ${title}`);
      lines.push(`height: ${height}`);
      lines.push('```\n');
      return lines.join('\n') + '\n';
    }

    case 'code': {
      const lang = block.language || '';
      const code = block.code || block.content || '';
      if (!code.trim()) return '';
      return '```' + lang + '\n' + code.trim() + '\n```\n\n';
    }

    case 'callout': {
      const cType = block.type || block.calloutType || 'info';
      const text = cleanHtml(block.content || block.text || block.html || '');
      if (!text.trim()) return '';
      return `::: callout type=${cType}\n${text.trim()}\n:::\n\n`;
    }

    case 'divider':
      return '---\n\n';

    default: {
      const fallback = block.htmlOverride || block.html || block.content || block.text || '';
      const cleaned = cleanHtml(fallback);
      if (cleaned.trim()) return cleaned.trim() + '\n\n';
      return '';
    }
  }
}

function layoutToMarkdown(layout) {
  if (!layout || !Array.isArray(layout)) return '';
  return layout.map(convertBlock).join('').trim();
}

// ── Category slug mapping ────────────────────────────────────────────────────

function categorySlug(doc) {
  const cat = doc.category;
  if (cat && typeof cat === 'object' && cat.slug) {
    const s = cat.slug.toLowerCase();
    if (s === 'components') return 'component';
    if (s === 'foundations') return 'foundation';
    if (s === 'guidelines') return 'guideline';
    if (s === 'patterns') return 'pattern';
    return s;
  }
  const slug = doc.slug || '';
  if (slug.includes('--')) {
    const base = slug.split('--')[0];
    const componentKeywords = ['accordion', 'avatar', 'badge', 'button', 'card',
      'carousel', 'checkbox', 'combobox', 'data-table', 'datepicker', 'dropdown',
      'input', 'menu', 'modal', 'popover', 'progress', 'radio', 'select', 'slider',
      'spinner', 'tab', 'textarea', 'toast', 'tooltip', 'tree'];
    if (componentKeywords.some(k => base.includes(k))) return 'component';
  }
  return 'general';
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function fetchAllPages() {
  const allDocs = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${API_BASE}/pages?limit=${PAGE_SIZE}&page=${page}&depth=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API returned ${res.status}: ${await res.text()}`);
    const data = await res.json();
    allDocs.push(...data.docs);
    hasMore = data.hasNextPage;
    page++;
    process.stdout.write(`  Fetched ${allDocs.length} / ${data.totalDocs} pages...\r`);
  }
  console.log(`  Fetched ${allDocs.length} pages total.`);
  return allDocs;
}

function existingIsEmpty(filePath) {
  if (!fs.existsSync(filePath)) return true;
  const content = fs.readFileSync(filePath, 'utf8');
  const afterFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '');
  return afterFrontmatter.trim().length === 0;
}

async function main() {
  console.log('=== Payload CMS API → Markdown Migration ===');
  if (FLAG_ALL) console.log('  Mode: overwrite ALL');
  if (FLAG_DRY) console.log('  Mode: DRY RUN (no writes)');
  if (FLAG_PAGES.length) console.log(`  Mode: specific pages [${FLAG_PAGES.join(', ')}]`);
  console.log('');
  console.log('Fetching pages from Payload CMS API...');

  const docs = await fetchAllPages();

  let written = 0;
  let skippedEmpty = 0;
  let updated = 0;
  let skippedExisting = 0;
  const categoryCounts = {};

  for (const doc of docs) {
    const slug = doc.slug;
    if (!slug) continue;
    if (FLAG_PAGES.length && !FLAG_PAGES.includes(slug)) continue;

    const title = doc.title || 'Untitled';
    const cat = categorySlug(doc);
    const layout = doc.layout || [];
    const body = layoutToMarkdown(layout);

    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;

    const parentPage = doc.parentPage;
    const parentSlug = parentPage && typeof parentPage === 'object'
      ? parentPage.slug : (typeof parentPage === 'string' ? parentPage : '');

    const lines = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `slug: "${slug}"`,
      `category: "${cat}"`,
    ];
    if (parentSlug) lines.push(`parent: "${parentSlug}"`);
    if (doc.order != null) lines.push(`order: ${doc.order}`);
    if (doc.hidden) lines.push(`hidden: true`);
    lines.push('---', '');

    const frontmatter = lines.join('\n');
    const fullContent = frontmatter + (body ? '\n' + body + '\n' : '\n');

    const catDir = path.join(TARGET_DIR, cat);
    const filePath = path.join(catDir, `${slug}.md`);
    const existed = fs.existsSync(filePath);

    const shouldWrite = FLAG_ALL
      || !existed
      || existingIsEmpty(filePath)
      || FLAG_PAGES.includes(slug);

    if (body.trim() && shouldWrite) {
      if (!FLAG_DRY) {
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
        fs.writeFileSync(filePath, fullContent, 'utf8');
      }
      if (existed) { updated++; if (FLAG_DRY) console.log(`  [UPDATE] ${cat}/${slug}.md`); }
      else { written++; if (FLAG_DRY) console.log(`  [CREATE] ${cat}/${slug}.md`); }
    } else if (!body.trim() && !existed) {
      if (!FLAG_DRY) {
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
        fs.writeFileSync(filePath, fullContent, 'utf8');
      }
      written++;
      skippedEmpty++;
    } else if (existed && !shouldWrite) {
      skippedExisting++;
    } else {
      skippedEmpty++;
    }
  }

  console.log(`\n=== Migration Complete${FLAG_DRY ? ' (DRY RUN)' : ''} ===`);
  console.log(`New files written: ${written}`);
  console.log(`Existing files updated: ${updated}`);
  console.log(`Pages with empty layout: ${skippedEmpty}`);
  console.log(`Skipped (existing with content): ${skippedExisting}`);
  console.log(`\nBy category:`);
  Object.entries(categoryCounts)
    .sort(([, a], [, b]) => b - a)
    .forEach(([cat, count]) => console.log(`  ${cat}: ${count}`));
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
