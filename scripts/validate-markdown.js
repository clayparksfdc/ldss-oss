#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/content';
const MEDIA_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/public/assets/images';

function validateMarkdownFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Check for frontmatter
  if (!content.startsWith('---')) {
    issues.push('Missing frontmatter');
  }

  // Check for required frontmatter fields
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    if (!frontmatter.includes('title:')) issues.push('Missing title field');
    if (!frontmatter.includes('slug:')) issues.push('Missing slug field');
    if (!frontmatter.includes('category:')) issues.push('Missing category field');
  }

  // Check for broken image references
  const imageRefs = content.match(/!\[.*?\]\((.*?)\)/g);
  if (imageRefs) {
    imageRefs.forEach(ref => {
      const match = ref.match(/!\[.*?\]\((.*?)\)/);
      if (match) {
        const imagePath = match[1];
        if (imagePath.startsWith('/assets/images/')) {
          const filename = imagePath.split('/assets/images/')[1];
          const fullPath = path.join(MEDIA_DIR, filename);
          if (!fs.existsSync(fullPath)) {
            issues.push(`Broken image reference: ${imagePath}`);
          }
        }
      }
    });
  }

  return issues;
}

function validateAll() {
  console.log('Validating markdown files...\n');

  const categories = fs.readdirSync(CONTENT_DIR);
  let totalFiles = 0;
  let filesWithIssues = 0;
  let totalIssues = 0;

  categories.forEach(category => {
    const categoryPath = path.join(CONTENT_DIR, category);
    if (!fs.statSync(categoryPath).isDirectory()) return;

    const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));

    files.forEach(file => {
      totalFiles++;
      const filePath = path.join(categoryPath, file);
      const issues = validateMarkdownFile(filePath);

      if (issues.length > 0) {
        filesWithIssues++;
        totalIssues += issues.length;
        console.log(`\n${category}/${file}:`);
        issues.forEach(issue => console.log(`  - ${issue}`));
      }
    });
  });

  console.log('\n=== Validation Summary ===');
  console.log(`Total files checked: ${totalFiles}`);
  console.log(`Files with issues: ${filesWithIssues}`);
  console.log(`Total issues found: ${totalIssues}`);
  console.log(`Success rate: ${((totalFiles - filesWithIssues) / totalFiles * 100).toFixed(1)}%`);
}

validateAll();
