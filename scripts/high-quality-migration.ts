#!/usr/bin/env tsx

import * as fs from 'fs';
import * as path from 'path';
import { parse as parseHtml } from 'node-html-parser';

// Configuration
const SOURCE_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-os/data/content';
const TARGET_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/content';
const IMAGES_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/public/assets/images';

interface Block {
  id: string;
  type: string;
  tag: string;
  content: string;
  html: string;
  images: Array<{ src: string; alt?: string; caption?: string }>;
  links: Array<{ href: string; text: string }>;
  level?: number;
  listType?: 'ordered' | 'unordered';
  calloutType?: string;
  language?: string;
}

interface PageData {
  title: string;
  url: string;
  href: string;
  slug: string;
  isSubTab: boolean;
  pageTitle: string;
  blocks: Block[];
  images: any[];
  embeds: any[];
  tabs: any[];
  extractedAt: string;
  cleanSlug: string;
  originalSlug: string;
}

interface MigrationStats {
  totalFiles: number;
  successful: number;
  failed: number;
  skipped: number;
  errors: Array<{ file: string; error: string }>;
}

// HTML cleaning utilities
function cleanHtml(html: string): string {
  if (!html) return '';

  return html
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlToMarkdown(html: string): string {
  if (!html) return '';

  let markdown = cleanHtml(html);

  // Remove class and data attributes
  markdown = markdown.replace(/\s*(class|data-[a-z-]+)="[^"]*"/gi, '');

  // Convert strong/b tags to bold
  markdown = markdown.replace(/<(strong|b)[^>]*>(.*?)<\/(strong|b)>/gi, '**$2**');

  // Convert em/i tags to italic
  markdown = markdown.replace(/<(em|i)[^>]*>(.*?)<\/(em|i)>/gi, '*$2*');

  // Convert code tags
  markdown = markdown.replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`');

  // Convert links
  markdown = markdown.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Convert underline spans to just the text (or keep underline if needed)
  markdown = markdown.replace(/<span[^>]*style="[^"]*text-decoration:\s*underline[^"]*"[^>]*>(.*?)<\/span>/gi, '$1');

  // Remove other spans
  markdown = markdown.replace(/<\/?span[^>]*>/gi, '');

  // Remove remaining HTML tags except specific ones we want to preserve
  markdown = markdown.replace(/<\/?p[^>]*>/gi, '');
  markdown = markdown.replace(/<\/?div[^>]*>/gi, '');
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');

  // Clean up extra whitespace
  markdown = markdown.replace(/\s+/g, ' ').trim();

  return markdown;
}

// Table conversion
function convertTableToMarkdown(block: Block): string {
  const html = block.html;
  if (!html) return '';

  try {
    const root = parseHtml(html);
    const rows: string[][] = [];

    // Extract table rows
    const trs = root.querySelectorAll('tr');
    trs.forEach(tr => {
      const cells: string[] = [];
      const tds = tr.querySelectorAll('td, th');
      tds.forEach(td => {
        const text = htmlToMarkdown(td.innerHTML);
        cells.push(text);
      });
      if (cells.length > 0) {
        rows.push(cells);
      }
    });

    if (rows.length === 0) return '';

    // Determine number of columns
    const numCols = Math.max(...rows.map(r => r.length));

    // Build markdown table
    let markdown = '\n';

    // Header row (use first row as header)
    const headerRow = rows[0];
    markdown += '| ' + headerRow.map(cell => cell || ' ').join(' | ') + ' |\n';
    markdown += '| ' + headerRow.map(() => '---').join(' | ') + ' |\n';

    // Data rows
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      // Pad row to match column count
      while (row.length < numCols) {
        row.push('');
      }
      markdown += '| ' + row.map(cell => cell || ' ').join(' | ') + ' |\n';
    }

    return markdown + '\n';
  } catch (error) {
    console.error('Error converting table:', error);
    return '\n[Table conversion error]\n';
  }
}

// List conversion
function convertListToMarkdown(block: Block): string {
  const html = block.html;
  if (!html) return '';

  try {
    const root = parseHtml(html);
    const items = root.querySelectorAll('li');
    const isOrdered = block.listType === 'ordered';

    let markdown = '\n';
    items.forEach((item, index) => {
      const text = htmlToMarkdown(item.innerHTML);
      if (text) {
        const prefix = isOrdered ? `${index + 1}. ` : '- ';
        markdown += prefix + text + '\n';
      }
    });

    return markdown + '\n';
  } catch (error) {
    console.error('Error converting list:', error);
    return '\n' + block.content + '\n';
  }
}

// Image conversion
function convertImageToMarkdown(block: Block): string {
  if (block.images && block.images.length > 0) {
    const image = block.images[0];
    const alt = image.alt || '';
    let src = image.src || '';

    // Update image paths
    if (src.includes('slds-uploads-') || src.includes('slds-other-')) {
      const filename = src.split('/').pop() || src;
      src = `/assets/images/${filename}`;
    }

    let markdown = `\n![${alt}](${src})\n`;

    if (image.caption) {
      markdown += `\n*${image.caption}*\n`;
    }

    return markdown;
  }

  return '';
}

// Code block conversion
function convertCodeToMarkdown(block: Block): string {
  const language = block.language || 'javascript';
  const code = block.content || '';

  return `\n\`\`\`${language}\n${code}\n\`\`\`\n`;
}

// Callout conversion
function convertCalloutToMarkdown(block: Block): string {
  const type = block.calloutType || 'info';
  const content = htmlToMarkdown(block.html || block.content);

  return `\n::: callout type="${type}"\n${content}\n:::\n`;
}

// Block conversion dispatcher
function convertBlockToMarkdown(block: Block, prevBlock: Block | null, allBlocks: Block[], currentIndex: number): string {
  let markdown = '';

  switch (block.type) {
    case 'heading':
      const level = block.level || 2;
      const headingPrefix = '#'.repeat(level);
      markdown = `\n${headingPrefix} ${htmlToMarkdown(block.content)}\n`;
      break;

    case 'paragraph':
      const paraContent = htmlToMarkdown(block.html || block.content);
      if (paraContent && paraContent.trim()) {
        // Check if this paragraph is a duplicate from a previous list or table
        let isDuplicate = false;

        // Look back at recent blocks (up to 10) to find lists or tables
        for (let i = Math.max(0, currentIndex - 10); i < currentIndex; i++) {
          const checkBlock = allBlocks[i];
          if (checkBlock.type === 'list' || checkBlock.type === 'table') {
            const checkContent = checkBlock.content || checkBlock.html || '';
            // Check if this paragraph content appears in the list/table
            if (checkContent.includes(block.content.trim())) {
              isDuplicate = true;
              break;
            }
          }
        }

        if (!isDuplicate) {
          markdown = `\n${paraContent}\n`;
        }
      }
      break;

    case 'list':
      markdown = convertListToMarkdown(block);
      break;

    case 'table':
      markdown = convertTableToMarkdown(block);
      break;

    case 'image':
      markdown = convertImageToMarkdown(block);
      break;

    case 'code':
      markdown = convertCodeToMarkdown(block);
      break;

    case 'callout':
      markdown = convertCalloutToMarkdown(block);
      break;

    case 'div':
      // Try to extract useful content from divs
      const divContent = htmlToMarkdown(block.html || block.content);
      if (divContent && divContent.trim()) {
        markdown = `\n${divContent}\n`;
      }
      break;

    default:
      // For unknown types, try to extract text
      const unknownContent = htmlToMarkdown(block.content || '');
      if (unknownContent && unknownContent.trim()) {
        markdown = `\n${unknownContent}\n`;
      }
  }

  return markdown;
}

// Category detection from slug or URL
function detectCategory(pageData: PageData): string {
  const slug = pageData.cleanSlug.toLowerCase();
  const href = pageData.href.toLowerCase();

  // Check for explicit category markers
  if (slug.includes('component') || href.includes('/components/')) return 'component';
  if (slug.includes('foundation') || href.includes('/foundation/')) return 'foundation';
  if (slug.includes('guideline') || href.includes('/guidelines/')) return 'guideline';
  if (slug.includes('pattern') || href.includes('/patterns/')) return 'pattern';
  if (slug.includes('design') || href.includes('/design/')) return 'design';
  if (slug.includes('develop') || href.includes('/develop/')) return 'develop';

  // Component names
  const componentKeywords = [
    'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'button', 'card', 'carousel',
    'checkbox', 'combobox', 'datepicker', 'dropdown', 'form', 'icon', 'input', 'list',
    'menu', 'modal', 'pill', 'popover', 'progress', 'radio', 'select', 'spinner',
    'table', 'tabs', 'textarea', 'toast', 'toggle', 'tooltip', 'tree'
  ];

  for (const keyword of componentKeywords) {
    if (slug.includes(keyword)) return 'component';
  }

  // Foundation keywords
  const foundationKeywords = [
    'color', 'typography', 'spacing', 'grid', 'layout', 'motion', 'elevation',
    'border', 'radius', 'shadow', 'sizing', 'accessibility'
  ];

  for (const keyword of foundationKeywords) {
    if (slug.includes(keyword)) return 'foundation';
  }

  // Default to general
  return 'general';
}

// Generate frontmatter
function generateFrontmatter(pageData: PageData, category: string): string {
  const title = pageData.pageTitle || pageData.title || 'Untitled';

  // Get description from first paragraph
  let description = '';
  const firstParagraph = pageData.blocks.find(b => b.type === 'paragraph');
  if (firstParagraph) {
    description = htmlToMarkdown(firstParagraph.content).substring(0, 200);
  }

  const slug = pageData.cleanSlug;
  const status = 'published';
  const lastModified = new Date().toISOString().split('T')[0];

  return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
category: "${category}"
slug: "${slug}"
status: "${status}"
lastModified: "${lastModified}"
---\n`;
}

// Convert page to markdown
function convertPageToMarkdown(pageData: PageData): string {
  const category = detectCategory(pageData);
  let markdown = generateFrontmatter(pageData, category);

  // Process blocks
  let prevBlock: Block | null = null;
  for (let i = 0; i < pageData.blocks.length; i++) {
    const block = pageData.blocks[i];
    const blockMarkdown = convertBlockToMarkdown(block, prevBlock, pageData.blocks, i);
    markdown += blockMarkdown;
    prevBlock = block;
  }

  // Clean up excessive newlines
  markdown = markdown.replace(/\n{4,}/g, '\n\n\n');

  return markdown;
}

// Write markdown file
function writeMarkdownFile(pageData: PageData, markdown: string): void {
  const category = detectCategory(pageData);
  const slug = pageData.cleanSlug;

  const targetCategoryDir = path.join(TARGET_DIR, category);
  if (!fs.existsSync(targetCategoryDir)) {
    fs.mkdirSync(targetCategoryDir, { recursive: true });
  }

  const filename = `${slug}.md`;
  const filepath = path.join(targetCategoryDir, filename);

  fs.writeFileSync(filepath, markdown, 'utf-8');
}

// Process single file
function processFile(filename: string, stats: MigrationStats): boolean {
  try {
    const filepath = path.join(SOURCE_DIR, filename);

    // Skip non-JSON files
    if (!filename.endsWith('.json')) {
      stats.skipped++;
      return true;
    }

    // Skip manifest and error files
    if (filename.startsWith('_')) {
      stats.skipped++;
      return true;
    }

    console.log(`Processing: ${filename}`);

    const content = fs.readFileSync(filepath, 'utf-8');
    const pageData: PageData = JSON.parse(content);

    // Skip pages with no blocks
    if (!pageData.blocks || pageData.blocks.length === 0) {
      console.log(`  ⚠ Skipping (no content blocks): ${filename}`);
      stats.skipped++;
      return true;
    }

    const markdown = convertPageToMarkdown(pageData);
    writeMarkdownFile(pageData, markdown);

    console.log(`  ✓ Converted: ${pageData.cleanSlug}.md (${pageData.blocks.length} blocks)`);
    stats.successful++;
    return true;

  } catch (error: any) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
    stats.failed++;
    stats.errors.push({ file: filename, error: error.message });
    return false;
  }
}

// Main migration function
async function migrate() {
  console.log('🚀 Starting High-Quality Migration');
  console.log('=====================================\n');

  const stats: MigrationStats = {
    totalFiles: 0,
    successful: 0,
    failed: 0,
    skipped: 0,
    errors: []
  };

  // Get all JSON files
  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.json'));
  stats.totalFiles = files.length;

  console.log(`Found ${stats.totalFiles} JSON files\n`);

  // Process files
  for (const file of files) {
    processFile(file, stats);
  }

  // Print summary
  console.log('\n=====================================');
  console.log('📊 Migration Summary');
  console.log('=====================================');
  console.log(`Total files: ${stats.totalFiles}`);
  console.log(`✓ Successful: ${stats.successful}`);
  console.log(`✗ Failed: ${stats.failed}`);
  console.log(`⚠ Skipped: ${stats.skipped}`);

  if (stats.errors.length > 0) {
    console.log('\n❌ Errors:');
    stats.errors.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`);
    });
  }

  console.log('\n✅ Migration complete!');

  // Save detailed report
  const reportPath = path.join(path.dirname(TARGET_DIR), 'migration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
}

// Run migration
migrate().catch(console.error);
