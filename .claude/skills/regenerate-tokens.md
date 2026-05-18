---
name: regenerate-tokens
description: Regenerate the design tokens JSON from the @salesforce-ux/design-system-2 npm package. Use when the user asks to refresh tokens, bump SLDS, or fix a "tokens are stale" warning in the CMS.
---

# Regenerating design tokens

The `content/data/design-tokens.json` file is the catalog the styling-hook index
page reads. It is **generated**, not hand-edited. Source of truth is the
`@salesforce-ux/design-system-2` npm package.

## Quick path

```bash
npm run tokens:generate
```

This reads `node_modules/@salesforce-ux/design-system-2/dist/css/bundled/slds2.cosmos.css`,
parses every `--slds-g-*` variable, and writes the JSON. The frontend `prebuild`
hook also runs this, so any `npm run build` in `frontend/` regenerates first.

## To pull in a new SLDS 2 version

```bash
npm install @salesforce-ux/design-system-2@<version> --save-dev
npm run tokens:generate
```

Then commit both `package.json`/`package-lock.json` and the regenerated
`content/data/design-tokens.json` in the same PR.

## Don't

- Don't hand-edit `content/data/design-tokens.json`. It will be overwritten on
  the next build.
- Don't add SLDS1 (`@salesforce-ux/design-system`) tokens to the same file. The
  catalog is SLDS-2 only by decision; the SLDS1 package is installed for parity
  but not consumed.
- Don't change `scripts/build-tokens.ts` to read from `sldsPlusTemplate.css` at
  the repo root — that file is kept for the in-page styling-hook visualizer
  component, not as a token source.

## If the CMS shows "stale" warning

That means the version manifest in the JSON doesn't match the npm package
installed in `node_modules`. Either:
- The user upgraded the package but didn't regenerate → run `npm run tokens:generate`
- The user is on a fresh checkout and `node_modules` is out of date → `npm install` first
