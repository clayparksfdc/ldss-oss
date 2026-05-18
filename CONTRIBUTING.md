# Contributing to the Lightning Design System docs

> **Audience**: designers, content editors, and anyone who wants to update a docs page without setting up a local dev environment.

This site is markdown-driven. Every change goes through a GitHub pull request, even when made through the visual editor. That gives us version control, review, and a one-click revert if something breaks.

## How you'll edit content

You have two paths. Pick the one that fits the situation.

### Path A: Visual editor (recommended for designers)

Open **[the CMS editor](https://ldss-cms-9e2bad355514.herokuapp.com/editor)** and sign in with GitHub.

> 🔒 **You need write access to the content repo to sign in.** If you see a yellow "Access denied" message, ask a repo admin to grant you write or maintain access on the `clayparksfdc/ldss-oss` GitHub repo, then sign in again.

Once in:

1. **Pick a file** from the left sidebar.
2. **Edit it** in either Rich Text mode (Tiptap, like a Google Doc) or Code mode (raw markdown for advanced users).
3. **Save** to autosave a draft (private to you, stored server-side).
4. **Publish to GitHub** when ready — the CMS opens a pull request attributed to your GitHub account.
5. **Review and merge** the PR (or wait for someone else to review).

Once the PR merges to `master`, the deploy pipeline picks it up.

### Path B: GitHub web UI

If you only need to fix a typo or want to bypass the editor:

1. Find the file at <https://github.com/clayparksfdc/ldss-oss/tree/master/content>.
2. Click the pencil icon to edit in place.
3. GitHub creates a PR for you when you save.

This skips the visual editor entirely. Good for quick text fixes; bad for anything with images or rich content.

## Common tasks

### Add an image to a page

In the editor toolbar, click the **Image** button (picture icon). The Cloudinary picker opens:

- **Already uploaded**: search by name, click to select, give it alt text, click Insert.
- **New image**: click "+ Upload new", pick from your computer, then insert.

Don't paste images from external URLs (Imgur, Google Drive, etc.) — they break when those services rotate URLs. The Cloudinary picker is the safe path.

### Embed a Figma frame

Click the **Figma** button in the editor toolbar:

1. Paste the **full Figma URL** including the `node-id` (right-click a frame in Figma → Copy link to selection).
2. Click **Generate snapshot** — we fetch the frame as a PNG, upload it to Cloudinary, and give you a preview.
3. Add a caption if useful, then click **Insert into markdown**.

The embed renders as a static image with a "Open in Figma →" link. It does **not** update automatically when the Figma file changes — to refresh, delete the embed and re-insert it.

### Refresh a stale design tokens table

If a `:::design-tokens` block is showing outdated values, the underlying npm package version may need bumping. This requires a developer — file a request in your team's tracker rather than trying to fix it from the editor.

### Create a new page

1. In the editor, click **+ New file**.
2. Choose the category folder, pick a slug (lowercase, hyphenated).
3. The new file gets a frontmatter template; fill in title and description.
4. Update **Navigation** (left sidebar → Navigation tab) to add your new page to the sidebar.
5. Publish.

### Reorder pages in the sidebar

Use the **Navigation** tab in the editor. Drag pages up/down. Save → Publish opens a PR with the navigation changes.

## What you should NOT do

- **Don't paste raw HTML** into pages. Markdown + the existing directives (callout, card-grid, hero-banner, figma) covers everything we support. If you need something new, ask a developer to add a new directive — see [.claude/skills/add-directive.md](./.claude/skills/add-directive.md).
- **Don't edit `frontend/out/`** — it's the auto-built static site, regenerated on every deploy.
- **Don't edit `content/data/design-tokens.json`** — it's generated from npm.
- **Don't commit `.env`** — it has secrets.
- **Don't bypass the PR flow.** Even admins should let a teammate review changes.

## Need help?

- Browse [.claude/skills/](./.claude/skills/) for task-specific guides (image insertion, Figma snapshots, etc).
- See [docs/adr/0001-markdown-not-mdx.md](./docs/adr/0001-markdown-not-mdx.md) if you're wondering why we don't use MDX or React inside markdown.
- File an issue on the GitHub repo if the editor is misbehaving.
