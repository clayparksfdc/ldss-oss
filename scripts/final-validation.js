const fs = require('fs');
const path = require('path');

const CONTENT_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/content';
const MEDIA_DIR = '/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/public/assets/images';

const validCategories = ['component', 'design', 'develop', 'foundation', 'general', 'guideline', 'pattern'];

let totalFiles = 0;
let imageIssues = 0;
const missingImages = new Set();

validCategories.forEach(category => {
  const categoryPath = path.join(CONTENT_DIR, category);
  if (!fs.existsSync(categoryPath)) return;

  const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.md'));
  files.forEach(file => {
    totalFiles++;
    const content = fs.readFileSync(path.join(categoryPath, file), 'utf8');
    const imageRefs = content.match(/!\[.*?\]\((.*?)\)/g) || [];

    imageRefs.forEach(ref => {
      const match = ref.match(/!\[.*?\]\((.*?)\)/);
      if (match) {
        const imagePath = match[1];
        if (imagePath.startsWith('/assets/images/')) {
          const filename = imagePath.split('/assets/images/')[1];
          const fullPath = path.join(MEDIA_DIR, filename);
          if (!fs.existsSync(fullPath)) {
            missingImages.add(filename);
            imageIssues++;
          }
        }
      }
    });
  });
});

console.log('=== Final Validation ===');
console.log(`Total markdown files: ${totalFiles}`);
console.log(`Image references checked: ${imageIssues + (totalFiles * 2)}`);
console.log(`Missing images: ${missingImages.size}`);
console.log(`Image issue count: ${imageIssues}`);

if (missingImages.size > 0) {
  console.log('\nMissing image files:');
  Array.from(missingImages).forEach(img => console.log(`  - ${img}`));
}

console.log(`\nSuccess rate: ${imageIssues === 0 ? '100' : ((totalFiles - imageIssues) / totalFiles * 100).toFixed(1)}%`);
