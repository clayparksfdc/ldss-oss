#!/bin/bash

echo "🔍 Migration Quality Validation Report"
echo "======================================"
echo ""

cd /Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/content

echo "📊 File Statistics:"
echo "  Total markdown files: $(find . -name "*.md" | wc -l | tr -d ' ')"
echo ""

echo "📁 Files by Category:"
for dir in */; do
  count=$(find "$dir" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
  if [ "$count" -gt 0 ]; then
    echo "  ${dir%/}: $count files"
  fi
done
echo ""

echo "✅ Frontmatter Validation:"
files_with_frontmatter=$(grep -l "^---" */*.md 2>/dev/null | wc -l | tr -d ' ')
echo "  Files with frontmatter: $files_with_frontmatter"
echo ""

echo "📋 Content Type Distribution:"
echo "  Headings (##): $(grep -h "^##" */*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "  Lists (-): $(grep -h "^- " */*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "  Tables (|): $(grep -h "^|" */*.md 2>/dev/null | wc -l | tr -d ' ')"
echo "  Links: $(grep -oh "\[.*\](.*)" */*.md 2>/dev/null | wc -l | tr -d ' ')"
echo ""

echo "📈 Largest Files:"
find . -name "*.md" -exec wc -l {} \; 2>/dev/null | sort -rn | head -5 | while read lines file; do
  echo "  $lines lines: $(basename $file)"
done
echo ""

echo "✨ Sample Quality Check (first 3 component files):"
for file in ./component/*.md; do
  [ -f "$file" ] || continue
  echo ""
  echo "  📄 $(basename $file):"
  
  # Check for frontmatter
  if head -1 "$file" | grep -q "^---"; then
    echo "    ✓ Has frontmatter"
  else
    echo "    ✗ Missing frontmatter"
  fi
  
  # Check for title
  if grep -q "^title:" "$file"; then
    echo "    ✓ Has title"
  else
    echo "    ✗ Missing title"
  fi
  
  # Check for content
  lines=$(wc -l < "$file")
  echo "    ✓ $lines lines of content"
  
  # Only check first 3 files
  count=$((count + 1))
  [ $count -ge 3 ] && break
done

echo ""
echo "======================================"
echo "✅ Validation Complete!"
