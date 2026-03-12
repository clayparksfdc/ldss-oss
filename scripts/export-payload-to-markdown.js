#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const SOURCE_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-os/data/content';
const SOURCE_MEDIA_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-os/public/media';
const TARGET_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/content';
const TARGET_MEDIA_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/public/assets/images';

// Helper function to clean HTML and convert to text
function cleanHtml(html) {
  if (!html) return '';

  // Simple HTML tag removal
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<p[^>]*>/gi, '')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

// Extract list items from HTML
function parseListItems(html) {
  if (!html) return [];

  const items = [];
  const liMatches = html.match(/<li[^>]*>.*?<\/li>/gs);

  if (liMatches) {
    liMatches.forEach(li => {
      const text = cleanHtml(li);
      if (text) items.push(text);
    });
  }

  return items;
}

// Parse table from HTML
function parseTable(html) {
  if (!html) return '';

  try {
    const dom = new JSDOM(html);
    const table = dom.window.document.querySelector('table');
    if (!table) return cleanHtml(html);

    const rows = Array.from(table.querySelectorAll('tr'));
    if (rows.length === 0) return '';

    let markdown = '\n';

    rows.forEach((row, rowIndex) => {
      const cells = Array.from(row.querySelectorAll('td, th'));
      const cellTexts = cells.map(cell => cleanHtml(cell.innerHTML).replace(/\n/g, ' ').trim());

      markdown += '| ' + cellTexts.join(' | ') + ' |\n';

      // Add separator after first row (header)
      if (rowIndex === 0) {
        markdown += '| ' + cellTexts.map(() => '---').join(' | ') + ' |\n';
      }
    });

    return markdown + '\n';
  } catch (error) {
    console.error('Error parsing table:', error);
    return cleanHtml(html);
  }
}

// Convert content blocks to markdown
function blocksToMarkdown(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  let markdown = '';

  blocks.forEach((block, index) => {
    switch (block.type) {
      case 'heading':
        const level = block.level || 2;
        const headingMarker = '#'.repeat(level);
        markdown += `${headingMarker} ${cleanHtml(block.content)}\n\n`;
        break;

      case 'paragraph':
        const text = cleanHtml(block.content || block.html);
        if (text) {
          markdown += `${text}\n\n`;
        }
        break;

      case 'list':
        const items = parseListItems(block.html) || block.content?.split('\n').filter(Boolean);
        if (items && items.length > 0) {
          const isOrdered = block.listType === 'ordered';
          items.forEach((item, i) => {
            const prefix = isOrdered ? `${i + 1}.` : '-';
            markdown += `${prefix} ${item}\n`;
          });
          markdown += '\n';
        }
        break;

      case 'code':
        const language = block.language || '';
        const code = block.content || '';
        markdown += `\`\`\`${language}\n${code}\n\`\`\`\n\n`;
        break;

      case 'image':
        if (block.images && block.images.length > 0) {
          const img = block.images[0];
          const imgSrc = img.src || '';
          const imgAlt = img.alt || '';

          // Convert image URL to new path
          let newPath = imgSrc;
          if (imgSrc.includes('/uploads/')) {
            const filename = imgSrc.split('/uploads/')[1];
            // Try with slds-uploads prefix first, then slds-other, then original
            const possibleFiles = [
              `slds-uploads-${filename}`,
              `slds-other-${filename}`,
              filename
            ];

            let actualFilename = filename;
            for (const possibleFile of possibleFiles) {
              const testPath = path.join(SOURCE_MEDIA_DIR, possibleFile);
              if (fs.existsSync(testPath)) {
                actualFilename = possibleFile;
                break;
              }
            }

            newPath = `/assets/images/${actualFilename}`;
          }

          markdown += `![${imgAlt}](${newPath})\n`;

          if (block.content) {
            markdown += `*${cleanHtml(block.content)}*\n`;
          }
          markdown += '\n';
        }
        break;

      case 'table':
        markdown += parseTable(block.html);
        break;

      case 'div':
        // Handle special div blocks (do/don't patterns, etc.)
        const divText = cleanHtml(block.content || block.html);
        if (divText && divText.length < 500) {
          markdown += `${divText}\n\n`;
        }
        break;

      default:
        // For unknown types, try to extract text
        const content = cleanHtml(block.content || block.html);
        if (content) {
          markdown += `${content}\n\n`;
        }
    }
  });

  return markdown;
}

// Extract category from slug or title
function extractCategory(slug, title) {
  if (!slug) return 'uncategorized';

  // Common categories
  const categories = {
    'component': ['button', 'input', 'card', 'modal', 'tab', 'accordion', 'dropdown', 'menu', 'tooltip', 'popover'],
    'pattern': ['pattern', 'layout', 'navigation', 'search', 'filter'],
    'foundation': ['color', 'typography', 'spacing', 'icon', 'motion', 'grid'],
    'guideline': ['accessibility', 'writing', 'voice', 'conversation', 'guidance'],
    'design': ['design', 'theme', 'styling', 'hook'],
    'develop': ['develop', 'code', 'api', 'token'],
  };

  const slugLower = slug.toLowerCase();

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => slugLower.includes(keyword))) {
      return category;
    }
  }

  return 'general';
}

// Process a single JSON file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);

    // Skip special files
    const filename = path.basename(filePath);
    if (filename.startsWith('_')) {
      console.log(`Skipping special file: ${filename}`);
      return null;
    }

    // Extract metadata
    const title = data.pageTitle || data.title || 'Untitled';
    const slug = data.cleanSlug || data.slug || filename.replace('.json', '');
    const category = extractCategory(slug, title);
    const url = data.url || '';
    const extractedAt = data.extractedAt || '';

    // Convert blocks to markdown
    const markdownContent = blocksToMarkdown(data.blocks);

    // Generate frontmatter
    const frontmatter = `---
title: "${title}"
slug: "${slug}"
category: "${category}"
url: "${url}"
extractedAt: "${extractedAt}"
---

`;

    const fullMarkdown = frontmatter + markdownContent;

    return {
      slug,
      category,
      title,
      markdown: fullMarkdown,
      filename: filename
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

// Copy media files
function copyMediaFiles() {
  console.log('\nCopying media files...');

  if (!fs.existsSync(SOURCE_MEDIA_DIR)) {
    console.log('Source media directory not found');
    return;
  }

  // Create target media directory
  if (!fs.existsSync(TARGET_MEDIA_DIR)) {
    fs.mkdirSync(TARGET_MEDIA_DIR, { recursive: true });
  }

  const files = fs.readdirSync(SOURCE_MEDIA_DIR);
  let copiedCount = 0;

  files.forEach(file => {
    const sourcePath = path.join(SOURCE_MEDIA_DIR, file);
    const targetPath = path.join(TARGET_MEDIA_DIR, file);

    // Skip symlinks and directories
    const stats = fs.lstatSync(sourcePath);
    if (stats.isSymbolicLink() || stats.isDirectory()) {
      return;
    }

    // Copy file
    try {
      fs.copyFileSync(sourcePath, targetPath);
      copiedCount++;
    } catch (error) {
      console.error(`Error copying ${file}:`, error.message);
    }
  });

  console.log(`Copied ${copiedCount} media files`);
}

// Main function
function main() {
  console.log('Starting Payload CMS to Markdown export...\n');

  // Create target directories
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }

  // Read all JSON files
  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} JSON files\n`);

  let processedCount = 0;
  let skippedCount = 0;
  const categoryCounts = {};

  files.forEach(file => {
    const filePath = path.join(SOURCE_DIR, file);
    const result = processFile(filePath);

    if (!result) {
      skippedCount++;
      return;
    }

    // Create category directory
    const categoryDir = path.join(TARGET_DIR, result.category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    // Write markdown file
    const outputPath = path.join(categoryDir, `${result.slug}.md`);
    fs.writeFileSync(outputPath, result.markdown, 'utf8');

    processedCount++;
    categoryCounts[result.category] = (categoryCounts[result.category] || 0) + 1;

    if (processedCount % 50 === 0) {
      console.log(`Processed ${processedCount} files...`);
    }
  });

  console.log(`\n=== Export Complete ===`);
  console.log(`Processed: ${processedCount} files`);
  console.log(`Skipped: ${skippedCount} files`);
  console.log(`\nFiles by category:`);
  Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([category, count]) => {
      console.log(`  ${category}: ${count}`);
    });

  // Copy media files
  copyMediaFiles();

  console.log(`\nMarkdown files written to: ${TARGET_DIR}`);
  console.log(`Media files copied to: ${TARGET_MEDIA_DIR}`);
}

// Run the script
main();
