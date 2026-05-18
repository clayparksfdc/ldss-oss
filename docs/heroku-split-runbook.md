# Heroku Split Runbook — `ldss-cms` → `ldss-frontend` + `ldss-cms`

**Status**: Planned, not executed
**Owner**: Clay Park
**Risk**: Medium — affects DNS, OAuth callback, CSP, deploy scripts. Plan a 30-min window with no merges in flight.

## Why split

Today `ldss-cms` (one Heroku dyno) serves the public docs site, the CMS editor SPA,
and the Express API. That's fine for staging but couples three independent concerns:

- **Public traffic spikes** can starve API requests (and vice versa).
- **Frontend deploys** require redeploying the backend (slow build, full TS rebuild).
- **CSP/cookie scoping** has to accommodate both contexts on one origin, leaking
  permissions across surfaces.
- **Cost ceiling**: scaling the API tier scales the static-serving tier with it.

After the split:

- **`ldss-frontend`** (Heroku, static buildpack) → public docs at the production domain.
  Serves `frontend/out/` only. No DB, no auth, no API.
- **`ldss-cms`** (Heroku, Node buildpack) → API + CMS editor SPA at `cms.<domain>`.
  Owns Postgres, GitHub OAuth, Cloudinary, Figma. Editor stays at
  `cms.<domain>/editor` (same origin as `/api/*` and `/auth/*` — no CORS cookie pain).

## Prerequisites (do these before the cutover window)

1. **Decide DNS**:
   - `<docs-domain>` → `ldss-frontend.herokuapp.com`
   - `cms.<docs-domain>` → `ldss-cms.herokuapp.com`
   - Have access to the DNS provider; have TTL lowered to 300s 24h before cutover.

2. **Update GitHub OAuth app**:
   - In your GitHub OAuth App settings, add a second callback URL:
     `https://cms.<docs-domain>/auth/github/callback`
   - Don't remove the existing one until cutover succeeds.

3. **Provision the new app + addons**:
   ```bash
   heroku create ldss-frontend --buildpack https://github.com/heroku/heroku-buildpack-static.git
   heroku create ldss-cms-new   # If you want a clean backend; otherwise reuse ldss-cms
   heroku addons:create heroku-postgresql:essential-0 -a ldss-cms-new
   heroku addons:create cloudinary:starter -a ldss-cms-new
   ```

4. **Migrate the Postgres** (if creating a new backend app):
   ```bash
   heroku pg:backups:capture -a ldss-cms
   heroku pg:backups:download -a ldss-cms   # writes latest.dump
   heroku pg:backups:restore 'https://...' DATABASE_URL -a ldss-cms-new
   ```
   Easier path: keep the existing `ldss-cms` as the backend, only create a new
   `ldss-frontend`. Skip this step.

## The split — code changes (do in a single PR before cutover)

These changes are backwards-compatible: when `SERVE_FRONTEND=false`, the backend
stops serving `frontend/out/` but everything else works.

### 1. Make static-serving opt-out via env var

[`src/server.ts`](../src/server.ts) already has the static-serving block at
[server.ts:104-146](../src/server.ts#L104). Wrap it:

```ts
const SERVE_FRONTEND = process.env.SERVE_FRONTEND !== 'false';
const frontendOutPath = path.resolve(__dirname, '../frontend/out');
const frontendExists = SERVE_FRONTEND && fs.existsSync(frontendOutPath);
```

On the backend app set `SERVE_FRONTEND=false`. On the frontend app this code path
never runs because we don't deploy the Node app there.

### 2. Multi-origin CORS

`src/server.ts` currently allows one `FRONTEND_URL`. Allow a comma-separated list
plus the editor's own origin (always `'self'` from same-origin perspective, but
explicit avoids accidents):

```ts
const allowedOrigins = [
  ...(process.env.FRONTEND_URL || 'http://localhost:3000').split(',').map(s => s.trim()),
  'http://localhost:5173',
].filter(Boolean);
```

Set on backend: `FRONTEND_URL=https://<docs-domain>,https://www.<docs-domain>`.

### 3. CSP `connectSrc` for the editor → backend

Editor lives at `cms.<domain>/editor` — same origin as the API, so no CSP change
needed. If you ever move editor cross-origin, add the backend host to `connectSrc`.

### 4. `static.json` for the frontend Heroku app

```json
{
  "root": "frontend/out",
  "clean_urls": true,
  "https_only": true,
  "headers": {
    "/_next/static/**": { "Cache-Control": "public, max-age=31536000, immutable" },
    "/assets/**":       { "Cache-Control": "public, max-age=86400" },
    "/**":              { "Cache-Control": "public, max-age=300" }
  },
  "error_page": "404.html"
}
```

Commit at the repo root. The static buildpack picks this up.

### 5. Frontend Procfile

The static buildpack auto-runs nginx. No `Procfile` needed for `ldss-frontend` —
but keep the existing `Procfile` (`web: node dist/server.js`) for `ldss-cms`.

### 6. Add a frontend `app.json` for review apps (optional)

If you want PR preview deploys for the docs site, drop an `app.json` next to
`static.json` describing the buildpack. Skip for first cutover.

## Cutover steps (the actual 30 minutes)

```bash
# 0. Pre-flight: confirm the backend code change is merged + deployed
heroku config:get SERVE_FRONTEND -a ldss-cms   # expect: (empty) or 'true'

# 1. Push frontend to its new app
heroku git:remote -a ldss-frontend -r heroku-frontend
git push heroku-frontend master

# 2. Verify frontend is serving
curl -I https://ldss-frontend.herokuapp.com/
# Expect: HTTP/2 200, content-type: text/html

# 3. Switch backend to API-only mode
heroku config:set SERVE_FRONTEND=false -a ldss-cms
heroku config:set FRONTEND_URL=https://ldss-frontend.herokuapp.com -a ldss-cms
# Backend restarts; /editor and /api still work, / returns 404.

# 4. Update OAuth callback in GitHub
#    Set primary callback to https://cms.<docs-domain>/auth/github/callback
#    (or https://ldss-cms.herokuapp.com/auth/github/callback before DNS flips)

# 5. Update GHE_CALLBACK_URL on backend
heroku config:set GHE_CALLBACK_URL=https://cms.<docs-domain>/auth/github/callback -a ldss-cms

# 6. Flip DNS
#    <docs-domain>      → ldss-frontend.herokuapp.com (CNAME or ALIAS)
#    cms.<docs-domain>  → ldss-cms.herokuapp.com

# 7. Add custom domains to the apps
heroku domains:add <docs-domain> -a ldss-frontend
heroku domains:add cms.<docs-domain> -a ldss-cms
heroku certs:auto:enable -a ldss-frontend
heroku certs:auto:enable -a ldss-cms

# 8. Smoke tests
curl -I https://<docs-domain>/                                    # 200
curl -I https://cms.<docs-domain>/health                           # 200, ok
curl -I https://cms.<docs-domain>/editor                           # 200
curl -L https://cms.<docs-domain>/auth/github                      # follows to github.com login
```

## Rollback

If smoke tests fail or auth breaks:

```bash
heroku config:unset SERVE_FRONTEND -a ldss-cms
heroku config:set FRONTEND_URL=http://localhost:3000 -a ldss-cms
# DNS revert: point <docs-domain> back at ldss-cms.herokuapp.com
# Restore GHE_CALLBACK_URL to https://ldss-cms.herokuapp.com/auth/github/callback
```

The split is fully reversible because the backend code retains the static-serving
path behind `SERVE_FRONTEND`.

## Post-cutover cleanup (week+1)

- Remove the obsolete OAuth callback URL from GitHub
- Drop `frontend/out/` from the backend's git history if you want to slim the
  backend deploy (currently the backend still ships the static export but won't
  serve it). This is purely a size optimization.
- Update [README.md](../README.md) to reflect the two-app architecture.

## Open questions to resolve before cutover

- [ ] Final DNS values (production domain, CMS subdomain)
- [ ] Whether to keep `ldss-cms` as backend or rename to `ldss-cms-api`
- [ ] Cloudinary: same account on both apps, or separate folder prefixes
      (currently controlled by `CLOUDINARY_UPLOAD_FOLDER`)
