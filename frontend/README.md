# Lightning Design System - Next.js Frontend

A modern, fully-featured Next.js 15 frontend for the Lightning Design System documentation site, built with TypeScript, App Router, and Tailwind CSS v4.

## Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS v4** for SLDS-inspired styling
- **Custom Markdown Processing** with unified/remark/rehype pipeline
- **Custom Directives** for callouts, component demos, and code examples
- **Auto-generated Navigation** from file system structure
- **Responsive Layout** with header, sidebar, and footer
- **Static Site Generation** support for optimal performance

## Tech Stack

### Core
- Next.js 15.1.3+
- React 19
- TypeScript 5.6+

### Styling
- Tailwind CSS v4
- SLDS-inspired color palette and components

### Markdown Processing
- unified 11.0.4
- remark-parse 11.0.0
- remark-gfm 4.0.0 (GitHub Flavored Markdown)
- remark-directive 3.0.0 (Custom directives)
- remark-rehype 11.1.0
- rehype-highlight 7.0.0 (Syntax highlighting)
- rehype-stringify 10.0.0
- gray-matter 4.0.3 (Frontmatter parsing)
- unist-util-visit 5.0.0

## Project Structure

```
lightning-design-system/
├── content/                    # Markdown content files
│   ├── getting-started/
│   ├── components/
│   └── guidelines/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── app/
│   │   ├── (frontend)/        # Frontend route group
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── [category]/
│   │   │   │   ├── page.tsx   # Category listing
│   │   │   │   └── [[...slug]]/
│   │   │   │       └── page.tsx # Content pages
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   └── markdown/
│   │       ├── Callout.tsx
│   │       ├── ComponentDemo.tsx
│   │       └── CodeBlock.tsx
│   └── lib/
│       ├── markdown.ts        # Markdown processing pipeline
│       ├── content.ts          # Content loading utilities
│       └── navigation.ts       # Navigation generation
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production application:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Custom Markdown Directives

This project supports custom markdown directives for enhanced content:

### Callout Directive

Create informational callouts with different types:

```markdown
::: callout type="info"
This is an informational callout.
:::

::: callout type="warning"
This is a warning callout.
:::

::: callout type="error"
This is an error callout.
:::

::: callout type="success"
This is a success callout.
:::
```

### Component Demo Directive

Embed interactive component demos:

```markdown
::: component-demo storybook="https://storybook.example.com" title="Button Examples" height="400"
:::
```

### Code Example Directive

Create syntax-highlighted code blocks:

```markdown
::: code-example language="javascript"
```javascript
const example = 'Hello, World!';
console.log(example);
```
:::
```

## Content Management

### Adding New Content

1. Create a new markdown file in the `content/` directory
2. Add frontmatter with metadata:

```markdown
---
title: Your Page Title
description: A brief description
category: components
order: 1
---

# Your Content Here
```

3. The page will automatically appear in navigation

### Frontmatter Fields

- `title` (required): Page title
- `description` (optional): Page description
- `category` (optional): Category for grouping
- `order` (optional): Sort order within category

### File Organization

Content files should be organized by category:

```
content/
├── getting-started/
│   ├── index.md
│   └── installation.md
├── components/
│   ├── button.md
│   ├── input.md
│   └── modal.md
└── guidelines/
    ├── accessibility.md
    └── design-principles.md
```

## Navigation

Navigation is automatically generated from:
1. Directory structure in `content/`
2. Frontmatter metadata in markdown files
3. File naming conventions

The sidebar navigation updates automatically when new content is added.

## Styling

The project uses Tailwind CSS with an SLDS-inspired theme:

### Custom Colors

- `slds-blue`: Primary brand colors
- `slds-gray`: Neutral grays

### Typography

- System font stack optimized for readability
- Responsive font sizes
- Proper heading hierarchy

## API Routes

This frontend is designed to work standalone or with a CMS backend. Content can be:

1. **Static**: Loaded from markdown files at build time
2. **Dynamic**: Fetched from a CMS API at runtime
3. **Hybrid**: Cached markdown with on-demand updates

## Performance

- **Static Site Generation (SSG)** for fast page loads
- **Incremental Static Regeneration (ISR)** for content updates
- **Image Optimization** with Next.js Image component
- **Code Splitting** for optimal bundle sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create content in the `content/` directory
2. Add components in `src/components/`
3. Update utilities in `src/lib/`
4. Test with `npm run build`

## License

Copyright 2026 Salesforce, Inc. All rights reserved.

## Support

For questions and support, please refer to the main documentation or file an issue in the repository.
