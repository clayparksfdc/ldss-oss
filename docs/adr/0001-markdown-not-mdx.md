# ADR 0001: Use Markdown (not MDX) for site content

- **Status**: Accepted
- **Date**: 2026-05-17
- **Deciders**: Clay Park
- **Supersedes**: n/a

## Context

The site has ~932 pages of content authored as `.md` files in `content/`. Authors include
engineers, designers, and AI agents. The frontend is a static Next.js export; the CMS
is an Express server with a Tiptap (rich text) and Monaco (raw markdown) editor.

The question raised in `tmp/Foundational.md` was whether to migrate the format to MDX
to allow inline JSX. We rejected MDX. This ADR records why.

## Decision

Stay on **GitHub-Flavored Markdown + custom directives** (the
[`remark-directive`](https://github.com/remarkjs/remark-directive) syntax we
already use: `:::callout`, `:::component-demo`, `:::card-grid`, `:::hero-banner`,
`:::code-example`, `:::video-embed`, plus the new `:::figma` and `:::design-tokens`).

Authors who need richer behavior get a new directive, never inline JSX.

## Why not MDX

1. **Author safety.** Designers and non-developer contributors edit content through the
   CMS. MDX permits arbitrary JavaScript expressions and component imports — every page
   becomes a script, with the same XSS and supply-chain implications. Markdown +
   directives constrains the surface area to a known set of components reviewed by
   engineers.

2. **Tiptap editor compatibility.** The CMS rich-text editor renders Tiptap nodes back
   to markdown. There is no clean round-trip for arbitrary JSX. We would either lose
   the rich-text editor for any page that uses MDX features, or block authors from
   editing those pages outside Monaco.

3. **Agent-friendliness.** AI agents already produce reliable markdown; their JSX tends
   to drift in subtle ways (unused imports, missing types, props that don't exist).
   Markdown reduces the agent's failure modes.

4. **No real demand.** Every "we need MDX for X" request so far is satisfied by a new
   directive. Storybook embeds, code tabs, callouts, hero banners, and design-token
   tables are all directives today and they cover the cases people ask for. Live JSX
   demos belong in Storybook, not inline in docs.

5. **Static export simplicity.** MDX adds a compile step per page (`@mdx-js/loader` or
   `next-mdx-remote`). Our markdown pipeline (`remark` → `rehype` → string) is simpler,
   measurably faster on the 932-page export, and deterministic.

6. **Lock-in cost is low if we change our minds.** GFM + directives compiles cleanly to
   MDX later. The reverse — an MDX corpus back to plain markdown — would require
   rewriting any page that grew JSX.

## Considered alternatives

### A. Switch all 932 pages to MDX
Rejected. All five drawbacks above apply. Migration cost is also non-trivial — we'd
need to rebuild the Tiptap → markdown serializer for the new format and re-validate
every page.

### B. Hybrid: MDX only on `--develop` sub-pages
Rejected. Splits the parser config, complicates the CMS (which file types open in
which editor?), and creates a two-tier authoring story. The "engineers want JSX
demos" case is already handled by Storybook iframes via `:::component-demo`.

### C. Keep MD, add a JSX-escape directive
Rejected as a non-decision. This is what we already have — `:::component-demo` is
the JSX-escape, just constrained to one safe component per directive. No change
needed.

## Consequences

- New rich-content needs land as new directives in
  [frontend/src/lib/markdown.ts](../../frontend/src/lib/markdown.ts) and a paired
  React component in [frontend/src/components/markdown/](../../frontend/src/components/markdown/).
- Directives must round-trip through the Tiptap editor; add a Tiptap node when
  introducing one.
- If an author asks "can I just drop a React component here?" the answer is "tell us
  what it should do and we'll add a directive."

## Revisit triggers

Reconsider this decision if **any** of the following becomes true:

- We need genuinely-dynamic content per-page that can't be parameterized through
  directive attributes.
- The directive count grows past ~15 with significant overlap, suggesting we're
  fighting the format.
- Tiptap is replaced with an editor that natively round-trips MDX.

Until then, every "we need MDX" PR should be replied to with a link to this ADR.
