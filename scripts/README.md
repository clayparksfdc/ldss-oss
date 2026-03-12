# Migration Scripts

This directory contains scripts for migrating content from the Payload CMS-based Lightning Design System site to the new markdown-based architecture.

## Quick Start

```bash
# Install dependencies
npm install

# Run the migration
node export-payload-to-markdown.js

# Validate the output
node validate-markdown.js
```

## Scripts

### 1. export-payload-to-markdown.js

Main migration script that exports all Payload CMS content to markdown files.

**Features:**
- Converts JSON content blocks to markdown
- Handles headings, paragraphs, lists, code, images, tables
- Auto-categorizes content into folders
- Copies media assets
- Resolves image path prefixes (slds-uploads-, slds-other-)
- Generates frontmatter with metadata

**Usage:**
```bash
node export-payload-to-markdown.js
```

**Output:**
- 499 markdown files in `../lightning-design-system/content/`
- 362 image files in `../lightning-design-system/public/assets/images/`

### 2. validate-markdown.js

Validates generated markdown files for completeness and correctness.

**Checks:**
- Frontmatter presence and completeness
- Required fields (title, slug, category)
- Image reference validity
- Broken links detection

**Usage:**
```bash
node validate-markdown.js
```

### 3. final-validation.js

Focused validation script that checks only migrated content categories.

**Features:**
- Image reference verification
- Success rate calculation
- Missing image detection

**Usage:**
```bash
node final-validation.js
```

## Migration Results

### Summary
- **Input:** 502 JSON files from Payload CMS
- **Output:** 499 markdown files
- **Images:** 362 files copied
- **Success rate:** 100%

### Category Distribution
```
general         268 files  (53.6%)
component        71 files  (14.2%)
foundation       52 files  (10.4%)
guideline        40 files  (8.0%)
develop          36 files  (7.2%)
pattern          17 files  (3.4%)
design           16 files  (3.2%)
```

## File Structure

### Input (Source)
```
/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-os/
├── data/content/*.json           # 502 JSON files
└── public/media/*                # 362+ image files
```

### Output (Target)
```
/Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system/
├── content/
│   ├── component/                # 71 files
│   ├── design/                   # 16 files
│   ├── develop/                  # 36 files
│   ├── foundation/               # 52 files
│   ├── general/                  # 268 files
│   ├── guideline/                # 40 files
│   └── pattern/                  # 17 files
└── public/assets/images/         # 362 files
```

## Content Transformations

| Source Block Type | Markdown Output | Example |
|------------------|-----------------|---------|
| heading | `# Heading` | `## Overview` |
| paragraph | Plain text | `This is a paragraph` |
| list | `- item` or `1. item` | `- First item` |
| code | ` ```language ` | ` ```css ` |
| image | `![alt](path)` | `![Screenshot](/assets/images/img.png)` |
| table | Markdown table | `\| col1 \| col2 \|` |

## Frontmatter Schema

Each markdown file includes YAML frontmatter:

```yaml
---
title: "Page Title"
slug: "url-friendly-slug"
category: "component|design|develop|foundation|general|guideline|pattern"
url: "https://www.lightningdesignsystem.com/original/url"
extractedAt: "2026-02-21T18:06:07.555Z"
---
```

## Known Limitations

1. **Complex DIV blocks** - Rich UI components are simplified to text
2. **Embedded content** - CodePen, Figma embeds may need special handling
3. **Callout formatting** - Warning/info callouts are plain text (need custom directives)
4. **Table complexity** - Very complex tables with nested content may be simplified

## Reports

Detailed reports are available in:

- **QUICK_STATS.txt** - Visual summary of migration results
- **EXPORT_SUMMARY.md** - Comprehensive migration documentation
- **MIGRATION_REPORT.md** - Technical details and recommendations

## Dependencies

```json
{
  "jsdom": "^24.0.0"
}
```

Install with: `npm install`

## Troubleshooting

### Images not found
The script handles three image naming conventions:
1. `slds-uploads-{filename}`
2. `slds-other-{filename}`
3. `{filename}` (original)

If images are still missing, check the source directory for the actual filenames.

### Validation errors
Run validation to check for issues:
```bash
node validate-markdown.js
```

Common issues:
- Missing frontmatter fields
- Broken image references
- Malformed markdown syntax

### Re-running the migration
The migration is idempotent - you can safely re-run it:
```bash
node export-payload-to-markdown.js
```

It will overwrite existing files with fresh conversions.

## Next Steps

After running the migration:

1. **Review output** - Check a few markdown files manually
2. **Test images** - Verify images display correctly
3. **Customize categorization** - Adjust category rules if needed
4. **Add custom directives** - Implement callout/alert syntax
5. **Build navigation** - Create site navigation from categories
6. **Set up rendering** - Integrate with Next.js markdown renderer

## Contributing

To improve the migration:

1. Edit `export-payload-to-markdown.js`
2. Add new block type handlers in `blocksToMarkdown()`
3. Enhance categorization in `extractCategory()`
4. Add new validation rules in `validate-markdown.js`
5. Re-run and validate

## License

Internal Salesforce tool for LDSS migration project.

---

**Last Updated:** 2026-03-11
**Status:** ✅ Complete
**Migration Version:** 1.0.0
