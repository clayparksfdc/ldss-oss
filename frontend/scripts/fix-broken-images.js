#!/usr/bin/env node

/**
 * Fix Broken Images Script
 *
 * This script removes broken image placeholders (file input elements)
 * from markdown files that were incorrectly exported from the CMS.
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(__dirname, '../content');

// Pattern to match file input elements in markdown
const FILE_INPUT_PATTERN = /\| \* <input type="file"[^>]+> .*?\* \|/g;

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(path.relative(CONTENT_DIR, filePath));
    }
  });

  return fileList;
}

function fixMarkdownFiles() {
  console.log('🔍 Scanning markdown files for broken images...\n');

  // Find all markdown files
  const files = getAllMarkdownFiles(CONTENT_DIR);

  let totalFixed = 0;
  let filesModified = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Count matches
    const matches = content.match(FILE_INPUT_PATTERN);

    if (matches && matches.length > 0) {
      console.log(`📝 ${file}: Found ${matches.length} broken image(s)`);

      // Remove the file input elements
      const fixed = content.replace(FILE_INPUT_PATTERN, '');

      // Write back to file
      fs.writeFileSync(filePath, fixed, 'utf-8');

      totalFixed += matches.length;
      filesModified++;
    }
  }

  console.log(`\n✅ Fixed ${totalFixed} broken images across ${filesModified} files`);
}

// Run the script
try {
  fixMarkdownFiles();
} catch (error) {
  console.error('Error:', error);
  process.exit(1);
}
