---
name: insert-figma
description: Insert a Figma frame snapshot into a markdown page. Use when the user pastes a Figma URL and wants it embedded, or asks to "add a screenshot from Figma".
---

# Inserting a Figma snapshot

Figma frames are **not** embedded as live iframes. We snapshot the frame via the
Figma API, upload the PNG to Cloudinary, and store the Cloudinary URL in
markdown. This keeps the page fast and survives Figma file moves.

## Required env

- `FIGMA_ACCESS_TOKEN` — Personal access token from figma.com/settings
- `CLOUDINARY_URL` — `cloudinary://<key>:<secret>@<cloud_name>` (or Heroku addon)

If either is missing, the user gets a clear error from the API. Don't try to
work around it.

## Recommended path: use the CMS editor

If the user is in the CMS editor:

1. Click the **Figma** button in the toolbar.
2. Paste the Figma URL.
3. Click **Generate snapshot** → **Insert into markdown**.

The editor handles auth, the API call, and the markdown insertion.

## CLI path: when the user wants you to do it

When the user gives you a Figma URL and asks you to insert it:

```bash
curl -X POST http://localhost:4000/api/cloudinary/figma-snapshot \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"figmaUrl":"https://www.figma.com/design/<key>?node-id=12-34"}'
```

This requires the user to be logged in (cookies.txt from the editor session). If
they're not running the dev server, ask them to run it through the CMS editor
instead.

## Markdown shape

The directive that gets inserted:

```
:::figma{src="https://res.cloudinary.com/<cloud>/.../figma-..." url="https://www.figma.com/design/..." caption="What this frame shows"}
:::
```

- `src` is the **Cloudinary** URL (durable, fast)
- `url` is the **Figma** URL (links back, opens in Figma)
- `caption` is human-readable, optional
- `alt` is optional alt text; falls back to `caption`

## Don't

- Don't use Figma's `<iframe src="https://www.figma.com/embed?...">`. We
  considered it (see Foundational.md) and chose snapshots for performance and
  reliability.
- Don't paste a screenshot from another tool (Cleanshot, system screenshot) when
  a Figma URL is available. The snapshot pipeline gives us provenance + the
  ability to re-fetch later.
- Don't hand-write the `:::figma{...}` directive without first running the
  snapshot endpoint. The Cloudinary URL must exist before the markdown is valid.
