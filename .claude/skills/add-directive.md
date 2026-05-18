---
name: add-directive
description: Add a new custom markdown directive (e.g. ::: feature-grid :::). Use when the user wants a new content type that doesn't fit existing directives.
---

# Adding a new markdown directive

Every "I want to drop this rich element into a docs page" answer is a new
directive, never raw JSX (see [docs/adr/0001-markdown-not-mdx.md](../../docs/adr/0001-markdown-not-mdx.md)).
Adding one touches three files. Keep them in sync.

## 1. Frontend renderer

[frontend/src/lib/markdown.ts](../../frontend/src/lib/markdown.ts)

Add a `buildXxxHast` function that builds the HTML AST. Register it in
`remarkCustomDirectives` for both `containerDirective` and `leafDirective` if
the directive can appear either way.

Pattern: read attributes from `node.attributes`, set `data.hName` to the wrapper
tag, set `data.hProperties` for class names + data attrs, set `data.hChildren`
for the inner structure.

## 2. CSS

[frontend/src/app/globals.css](../../frontend/src/app/globals.css)

Add a class scoped to the directive (`.your-directive`, `.your-directive-foo`).
**Use SLDS styling hooks where possible** (`var(--slds-g-color-...)`) — the
SLDS 2 linter in this repo flags hardcoded hex codes. Run `npm run tokens:generate`
to see what's available; or browse the styling-hook-index page in the dev site.

## 3. Editor support

If the directive should be insertable / editable in the rich-text CMS editor:

- [client/src/lib/directive-editor-utils.ts](../../client/src/lib/directive-editor-utils.ts) —
  add to `DIRECTIVE_SCHEMAS` with `attrs` (and `childAttrs` if it's a container
  with children). If it has unique parsing (like `callout`'s body or `figma`'s
  no-body container), add a special branch in `preprocessDirectivesForEditor`
  and `directiveToMarkdown`.
- [client/src/extensions/DirectiveBlockView.tsx](../../client/src/extensions/DirectiveBlockView.tsx) —
  add a preview component (`<XxxPreview />`) and register it in the `DirectivePreview`
  switch.
- [client/src/components/Toolbar.tsx](../../client/src/components/Toolbar.tsx) —
  if you want a one-click insert button, add it. Otherwise the directive is
  reachable via the snippet palette.

## 4. Test the round-trip

A directive must round-trip through:

1. Markdown source → static site rendering (`processMarkdown`)
2. Markdown source → editor → markdown source (no diff)

Test by editing a sample file in the CMS editor and checking the saved markdown
matches what you started with.

## Naming conventions

- Use `kebab-case` for directive names.
- Container directives use `:::name{attrs}` … `:::`. Leaf use `::name{attrs}`.
- Attribute names should be `camelCase` to match HTML data-attribute conventions
  (`columns`, `nodeId`, not `Columns` or `node_id`).

## Don't

- Don't add a new directive when an existing one fits with new attribute values.
  Three near-duplicates is worse than one parameterized directive.
- Don't use `data-` attributes the rendering pipeline doesn't actually consume —
  they pollute the static HTML.
- Don't ship a directive without editor support if the audience is designers.
  They won't write it by hand.
