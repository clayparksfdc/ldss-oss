---
name: edit-content
description: Edit a markdown page in content/ for the public docs site. Use when the user asks to update copy, fix typos, add a section, or change navigation on a docs page.
---

# Editing markdown content

You are editing files in `content/`. These power the public site at the repo's
deployed URL. Every change goes through a PR; nothing edits the live site directly.

## Before editing

1. Confirm the file exists. Markdown files use the URL path mapping
   `/category/slug` → `content/category/slug.md`.
2. Read the file in full before editing. Frontmatter (the `---` block at the top)
   controls title, description, order, and SEO metadata — preserve it unless the
   user explicitly asks to change it.
3. If the user describes a page by URL or topic but you can't locate the file,
   grep `content/` for the title or a unique phrase before guessing.

## Hard rules

- **Don't switch a page from MD to MDX.** This repo is markdown-only by policy.
  See [docs/adr/0001-markdown-not-mdx.md](../../docs/adr/0001-markdown-not-mdx.md).
- **Don't paste raw `<script>` tags.** If the user wants something dynamic, use
  an existing directive (`:::component-demo`, `:::callout`, `:::card-grid`, etc).
- **Don't hardcode image URLs from external hosts** (Imgur, Google Drive, ZH CDN).
  Either reference an existing `/assets/` path or use a Cloudinary URL the CMS
  produced. Drive-by external URLs break when the host rotates.
- **Preserve frontmatter line order and key names.** The frontend parses
  `lastModified`, `author`, `seo` — silent renames break SEO.

## Custom directives reference

| Use case | Directive |
|---|---|
| Info / warning / error box | `:::callout{type="info"}` … `:::` |
| Storybook iframe demo | ` ```storybook` block (url, title, height) |
| Card grid | `:::card-grid{columns="3"}` with `::card{...}` children |
| Hero banner | `:::hero-banner{title="..." image="..."}` … `:::` |
| Figma snapshot (Cloudinary-hosted) | `:::figma{src="..." url="..." caption="..."}` … `:::` |
| Auto-generated design token table | `:::design-tokens{category="color"} :::` |
| Video embed | `:::video-embed{src="..." title="..."}` … `:::` |

## Adding images

1. **Prefer the CMS editor's "Image" button** (Cloudinary picker) if the user is
   working in the editor. It uploads + inserts the markdown for them.
2. From the command line, the user can drop the image into
   `frontend/public/assets/images/<category>/` and reference it as
   `/assets/images/<category>/<file>.png`. Always include alt text.
3. Don't `curl` images from the web and paste base64 — both blow up the markdown
   diff and pollute git history.

## Workflow

1. Make the smallest change that satisfies the user's ask.
2. Run `cd frontend && npm run build` if you changed structural things (frontmatter,
   navigation, new page). For copy-only edits, skip the build — `next dev` will
   pick it up.
3. Don't auto-commit. Show the user the diff and let them decide whether to
   commit and PR. The CMS editor handles PR creation when content changes go
   through `/editor`; CLI changes go through normal `git commit` + `gh pr create`.
