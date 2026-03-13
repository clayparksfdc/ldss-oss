#!/usr/bin/env node

/**
 * Generate Navigation JSON Files
 *
 * This script parses all markdown files from the content/ directory and generates
 * two JSON files for navigation:
 *
 * 1. parsed-pages.json - Flat list of all pages with their tabs
 * 2. parsed-categories.json - Hierarchical structure grouped by category
 *
 * Features:
 * - Parses frontmatter from markdown files (title, slug, category, description)
 * - Groups pages by category (component, foundation, general, develop, design, pattern)
 * - Handles tab pages (slugs with "--") and associates them with main pages
 * - Cross-category tabs (e.g., develop/accordion--develop becomes tab on component/accordion)
 * - Creates synthetic main pages for components that only have tab pages
 * - Sorts categories in specified order and pages alphabetically within categories
 *
 * Usage:
 *   node generate-navigation.js
 *
 * Output:
 *   data/migration/parsed-pages.json
 *   data/migration/parsed-categories.json
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_DIR = path.join(__dirname, 'data', 'migration');
const PAGES_OUTPUT = path.join(OUTPUT_DIR, 'parsed-pages.json');
const CATEGORIES_OUTPUT = path.join(OUTPUT_DIR, 'parsed-categories.json');

// Category order
const CATEGORY_ORDER = ['component', 'foundation', 'general', 'develop', 'design', 'pattern'];

// Parse frontmatter from markdown content
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return null;
  }

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();

      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.substring(1, value.length - 1);
      }

      frontmatter[key] = value;
    }
  }

  return frontmatter;
}

// Get all markdown files recursively
function getAllMarkdownFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Extract tab name from slug with double dash
function extractTabName(slug) {
  const parts = slug.split('--');
  if (parts.length > 1) {
    return parts[1];
  }
  return null;
}

// Get base slug (without tab suffix)
function getBaseSlug(slug) {
  return slug.split('--')[0];
}

// Capitalize first letter of each word
function titleCase(str) {
  return str.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

// Main processing function
function generateNavigationFiles() {
  console.log('Starting navigation file generation...');

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  // Get all markdown files
  const markdownFiles = getAllMarkdownFiles(CONTENT_DIR);
  console.log(`Found ${markdownFiles.length} markdown files`);

  // Parse all files
  const pages = [];
  const pageMap = new Map(); // Map to group tabs with main pages
  let pageId = 1;

  for (const filePath of markdownFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatter = parseFrontmatter(content);

    if (!frontmatter || !frontmatter.slug || !frontmatter.category) {
      console.warn(`Skipping file without proper frontmatter: ${filePath}`);
      continue;
    }

    const slug = frontmatter.slug;
    const baseSlug = getBaseSlug(slug);
    const tabName = extractTabName(slug);
    const category = frontmatter.category.toLowerCase();

    // Create page object
    const pageObj = {
      id: pageId++,
      name: frontmatter.title || titleCase(baseSlug),
      slug: slug,
      url: `/${category}/${slug}`,
      category: category,
      hidden: false,
      tabs: []
    };

    if (frontmatter.description) {
      pageObj.description = frontmatter.description;
    }

    // If this is a tab page (has --), add it to the main page
    if (tabName) {
      // For cross-category tabs (e.g., develop/accordion--develop),
      // we need to find the main page in the component category
      let mainPageCategory = category;
      let mainPageKey = `${mainPageCategory}:${baseSlug}`;

      // If this is a develop tab, look for the main page in component category
      if (category === 'develop' && tabName === 'develop') {
        mainPageCategory = 'component';
        mainPageKey = `component:${baseSlug}`;
      }

      if (!pageMap.has(mainPageKey)) {
        // Create placeholder for main page if it doesn't exist yet
        pageMap.set(mainPageKey, {
          mainPage: null,
          tabs: []
        });
      }

      // Use the actual URL from the file's category
      pageMap.get(mainPageKey).tabs.push({
        name: titleCase(tabName),
        slug: slug,
        url: `/${category}/${slug}`
      });
    } else {
      // This is a main page
      const mainPageKey = `${category}:${baseSlug}`;

      if (!pageMap.has(mainPageKey)) {
        pageMap.set(mainPageKey, {
          mainPage: pageObj,
          tabs: []
        });
      } else {
        pageMap.get(mainPageKey).mainPage = pageObj;
      }
    }
  }

  // Build final pages array with tabs
  const finalPages = [];
  const categoriesMap = new Map();

  for (const [key, data] of pageMap.entries()) {
    let mainPage = data.mainPage;

    // If there's no main page but there are tabs, create a synthetic main page
    // from the first tab (prefer "usage" tab if it exists)
    if (!mainPage && data.tabs.length > 0) {
      const usageTab = data.tabs.find(t => t.name.toLowerCase() === 'usage');
      const firstTab = usageTab || data.tabs[0];

      // Extract base slug and category from the key
      const [category, baseSlug] = key.split(':');

      // Create synthetic main page using the first tab's info
      mainPage = {
        id: pageId++,
        name: titleCase(baseSlug),
        slug: baseSlug,
        url: `/${category}/${baseSlug}`,
        category: category,
        hidden: false,
        tabs: []
      };

      console.log(`  Created synthetic main page for ${category}/${baseSlug} (had only tabs)`);
    }

    if (mainPage) {
      // Add tabs to main page
      if (data.tabs.length > 0) {
        mainPage.tabs = data.tabs.sort((a, b) => a.name.localeCompare(b.name));
      }

      finalPages.push(mainPage);

      // Group by category
      const category = mainPage.category;
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }
      categoriesMap.get(category).push(mainPage);
    }
  }

  // Sort pages alphabetically within each category
  for (const [category, categoryPages] of categoriesMap.entries()) {
    categoryPages.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Generate parsed-pages.json
  const sortedPages = finalPages.sort((a, b) => a.name.localeCompare(b.name));
  fs.writeFileSync(PAGES_OUTPUT, JSON.stringify(sortedPages, null, 2));
  console.log(`Generated ${PAGES_OUTPUT}`);
  console.log(`Total pages: ${sortedPages.length}`);

  // Generate parsed-categories.json
  const categories = [];
  let categoryId = 1;

  for (const categorySlug of CATEGORY_ORDER) {
    if (categoriesMap.has(categorySlug)) {
      const categoryPages = categoriesMap.get(categorySlug);

      categories.push({
        id: categoryId++,
        name: titleCase(categorySlug),
        slug: categorySlug,
        hidden: false,
        children: categoryPages
      });
    }
  }

  fs.writeFileSync(CATEGORIES_OUTPUT, JSON.stringify(categories, null, 2));
  console.log(`Generated ${CATEGORIES_OUTPUT}`);
  console.log(`Total categories: ${categories.length}`);

  // Print summary
  console.log('\nSummary by category:');
  for (const category of categories) {
    console.log(`  ${category.name}: ${category.children.length} pages`);
  }

  console.log('\nNavigation files generated successfully!');
}

// Run the script
try {
  generateNavigationFiles();
} catch (error) {
  console.error('Error generating navigation files:', error);
  process.exit(1);
}
