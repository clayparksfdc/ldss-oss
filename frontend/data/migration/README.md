# Navigation JSON Files

This directory contains generated navigation JSON files for the Lightning Design System documentation site.

## Files

### parsed-pages.json
A flat list of all pages with their metadata and tabs. Each page includes:
- `id`: Unique numeric identifier
- `name`: Display name of the page
- `slug`: URL-friendly slug
- `url`: Full URL path (e.g., `/component/accordion`)
- `category`: Category the page belongs to
- `hidden`: Boolean for visibility
- `tabs`: Array of sub-pages/tabs for this page
- `description`: Optional description text

### parsed-categories.json
A hierarchical structure grouping pages by category. Each category includes:
- `id`: Category ID
- `name`: Category display name
- `slug`: Category slug
- `hidden`: Boolean for visibility
- `children`: Array of pages belonging to this category

## Categories

The navigation is organized into 6 categories in this order:
1. **Component** - UI components (buttons, cards, accordions, etc.)
2. **Foundation** - Design foundations (colors, borders, typography, etc.)
3. **General** - General guidelines and utilities
4. **Develop** - Developer-specific documentation
5. **Design** - Design guidelines and tools
6. **Pattern** - Design patterns and best practices

## Tab Pages

Pages can have tabs for additional content. Tabs are identified by slugs with double dashes (e.g., `accordion--usage`, `accordion--accessibility`).

### Cross-Category Tabs
Some tabs exist in different categories but belong to a main page in another category. For example:
- Main page: `/component/accordion`
- Tab pages:
  - `/component/accordion--usage` (usage tab)
  - `/component/accordion--accessibility` (accessibility tab)
  - `/develop/accordion--develop` (develop tab from develop category)

## Generation

These files are generated from markdown files in the `/content` directory using the `generate-navigation.js` script:

```bash
node generate-navigation.js
```

### Statistics (Latest Generation)
- **Total Pages**: 186
- **Pages with Tabs**: 104
- **Total Tabs**: 255

### Breakdown by Category:
- **Component**: 49 pages, 141 tabs
- **Foundation**: 26 pages, 30 tabs
- **General**: 96 pages, 75 tabs
- **Develop**: 4 pages, 1 tab
- **Design**: 7 pages, 6 tabs
- **Pattern**: 4 pages, 2 tabs

## Usage

These JSON files can be imported and used to build navigation menus, breadcrumbs, and other UI elements for the documentation site.

```javascript
// Import the data
const pages = require('./parsed-pages.json');
const categories = require('./parsed-categories.json');

// Find a specific page
const accordion = pages.find(p => p.slug === 'accordion');

// Get all components
const components = categories.find(c => c.slug === 'component').children;
```
