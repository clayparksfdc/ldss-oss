#!/bin/bash

# Verification script for Lightning Design System Next.js frontend

echo "=========================================="
echo "Lightning Design System - Build Verification"
echo "=========================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Dependencies installed"
else
    echo -e "${RED}✗${NC} Dependencies not installed"
    echo "  Run: npm install"
fi

# Check if .next exists
if [ -d ".next" ]; then
    echo -e "${GREEN}✓${NC} Production build exists"
else
    echo -e "${RED}✗${NC} Production build not found"
    echo "  Run: npm run build"
fi

# Check key source files
echo ""
echo "Checking source files..."

files=(
    "src/app/layout.tsx"
    "src/app/globals.css"
    "src/app/(frontend)/layout.tsx"
    "src/app/(frontend)/page.tsx"
    "src/app/(frontend)/[category]/page.tsx"
    "src/app/(frontend)/[category]/[[...slug]]/page.tsx"
    "src/components/layout/Header.tsx"
    "src/components/layout/Sidebar.tsx"
    "src/components/layout/Footer.tsx"
    "src/components/markdown/Callout.tsx"
    "src/components/markdown/ComponentDemo.tsx"
    "src/components/markdown/CodeBlock.tsx"
    "src/lib/markdown.ts"
    "src/lib/content.ts"
    "src/lib/navigation.ts"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file"
    fi
done

# Check config files
echo ""
echo "Checking configuration files..."

configs=(
    "package.json"
    "tsconfig.json"
    "next.config.ts"
    "tailwind.config.ts"
    ".eslintrc.json"
    ".gitignore"
)

for config in "${configs[@]}"; do
    if [ -f "$config" ]; then
        echo -e "${GREEN}✓${NC} $config"
    else
        echo -e "${RED}✗${NC} $config"
    fi
done

# Check content directory
echo ""
echo "Checking content..."

if [ -d "content" ]; then
    echo -e "${GREEN}✓${NC} content/ directory exists"

    # Count markdown files
    md_count=$(find content -name "*.md" | wc -l)
    echo "  Found $md_count markdown files"

    # List top-level categories
    echo "  Categories:"
    for dir in content/*/; do
        if [ -d "$dir" ]; then
            dirname=$(basename "$dir")
            file_count=$(find "$dir" -name "*.md" | wc -l)
            echo "    - $dirname ($file_count files)"
        fi
    done
else
    echo -e "${RED}✗${NC} content/ directory not found"
fi

# Check if build was successful
echo ""
echo "Build verification..."

if [ -f ".next/BUILD_ID" ]; then
    echo -e "${GREEN}✓${NC} Build ID exists"
    echo "  Build ID: $(cat .next/BUILD_ID)"
else
    echo -e "${RED}✗${NC} Build ID not found"
fi

if [ -f ".next/build-manifest.json" ]; then
    echo -e "${GREEN}✓${NC} Build manifest exists"
else
    echo -e "${RED}✗${NC} Build manifest not found"
fi

# Summary
echo ""
echo "=========================================="
echo "Summary"
echo "=========================================="
echo ""
echo "To start development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "To start production server:"
echo "  npm start"
echo ""
echo "Documentation:"
echo "  See README.md for full documentation"
echo "  See PROJECT_STRUCTURE.md for file structure"
echo ""
