# Quick Start Guide

## Get Started in 3 Steps

### 1. Start Development Server

```bash
cd /Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system
npm run dev
```

Open http://localhost:3000 in your browser.

### 2. Add New Content

Create a new markdown file in `content/`:

```bash
# Example: Add a new component page
cat > content/components/input.md << 'EOF'
---
title: Input Component
description: Input fields for user data entry
category: components
order: 2
---

# Input Component

Your content here...

::: callout type="info"
Inputs allow users to enter text.
:::

EOF
```

The page will automatically appear at `/components/input`.

### 3. Build for Production

```bash
npm run build
npm start
```

## Key Commands

```bash
npm run dev          # Development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
./verify.sh          # Verify installation
```

## Project Structure at a Glance

```
lightning-design-system/
├── content/                    # Add your markdown files here
│   ├── components/
│   ├── guidelines/
│   └── getting-started/
│
├── src/
│   ├── app/(frontend)/        # Pages and layouts
│   ├── components/            # React components
│   └── lib/                   # Utilities (markdown, content, nav)
│
├── public/assets/images/      # Static images
├── README.md                  # Full documentation
└── IMPLEMENTATION_SUMMARY.md  # Complete implementation details
```

## Add Custom Directives

### Callout

```markdown
::: callout type="info"
Your message
:::
```

Types: `info`, `warning`, `error`, `success`

### Component Demo

```markdown
::: component-demo storybook="https://your-storybook-url" title="Demo" height="400"
:::
```

### Code Example

```markdown
::: code-example language="javascript"
```javascript
const code = 'example';
```
:::
```

## Customize Styles

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      'slds-blue': {
        500: '#0284c7',  // Change primary color
      },
    },
  },
},
```

## File Frontmatter

Every markdown file should have frontmatter:

```markdown
---
title: Page Title          # Required
description: Brief desc     # Optional
category: components        # Optional
order: 1                   # Optional (for sorting)
---

# Content starts here
```

## Navigation

Navigation is auto-generated from:
- `content/` directory structure
- Frontmatter metadata
- File names

## Troubleshooting

### Port 3000 already in use

```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build errors

```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Content not showing up

1. Check frontmatter is valid YAML
2. Verify file has `.md` extension
3. Restart dev server: `Ctrl+C` then `npm run dev`

## Next Steps

1. Browse to http://localhost:3000
2. Check existing content in `content/` directory (502 files)
3. Add your own content
4. Customize colors in `tailwind.config.ts`
5. Deploy to Vercel/Netlify

## Documentation

- **README.md** - Complete documentation
- **PROJECT_STRUCTURE.md** - File structure
- **IMPLEMENTATION_SUMMARY.md** - Implementation details

## Quick Links

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Remark/Rehype: https://unifiedjs.com

---

**Ready to go!** The project is fully set up and ready for development.
