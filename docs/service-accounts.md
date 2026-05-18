# Service accounts and API tokens

This file documents which API tokens the CMS uses, who owns them today, and the
plan for moving toward durable service-account-owned credentials.

## Current state — 2026-05-18

| Service | Token type | Owner | Where it lives | Rotation policy |
|---|---|---|---|---|
| **GitHub OAuth (login)** | OAuth app | Salesforce GitHub Enterprise | `GHE_CLIENT_ID` / `GHE_CLIENT_SECRET` env vars | Permanent app, rotate secret every 12 months |
| **GitHub API (PR creation)** | User access token from OAuth flow | Whoever logged in | Per-user session storage | Auto-refreshes per login |
| **Figma API** | Personal Access Token (PAT) | **Clay Park** | `FIGMA_ACCESS_TOKEN` env var | ⚠️ **Tied to Clay's individual account — see migration plan below** |
| **Cloudinary** | Heroku-provisioned addon credentials | Heroku addon `cloudinary-silhouetted-47779` | `CLOUDINARY_URL` (auto-set by addon) | Rotate via `heroku addons:rotate` if compromised |
| **Zeroheight API** | Personal API token + client ID | **Clay Park** | `ZEROHEIGHT_API_TOKEN` / `ZEROHEIGHT_CLIENT_ID` env vars | ⚠️ **Tied to Clay's individual account** — only used by one-off migration scripts, lower urgency |
| **PostgreSQL** | Heroku addon credentials | Heroku addon `postgresql-horizontal-02717` | `DATABASE_URL` (auto-set by addon) | Rotate via `heroku pg:credentials:rotate` if compromised |
| **Session signing** | Random secret | Set by deployer | `SESSION_SECRET` env var | Rotate annually or on suspected compromise |

## ⚠️ Personal-account dependencies

**Figma** and **Zeroheight** are currently authenticated using Clay's individual
Salesforce account credentials. This means:

- If Clay's Salesforce account is deactivated (departure, role change, IT
  cleanup), both tokens stop working immediately and the integrations break.
- Figma audit logs attribute every CMS-generated snapshot to Clay personally,
  even when triggered by other designers.
- Token rotation requires Clay's involvement.

This is an accepted short-term tradeoff to ship the feature now. The migration
to service-account-owned tokens is tracked below.

## Migration plan: Figma → service account

### Why
Figma does not have first-class team or org-level API tokens — every PAT is
tied to a Figma user account. The industry-standard workaround is a
service-account: a Figma seat owned by a shared mailing list, not an
individual.

### Steps

1. **Provision a shared mailing list** with Salesforce IT
   (e.g. `slds-design-systems@salesforce.com` if one doesn't already exist).
   The list should have at least 2 owners so it survives any one person leaving.

2. **Add the mailing list as a Figma user** in the Salesforce Figma
   Enterprise org (free seat, no marginal cost). Have a Figma admin grant it
   view access to:
   - The Lightning Design System team
   - Any other teams whose files the CMS will snapshot

3. **Generate a PAT from the service account** with scope `File content: read`.
   Set a 365-day expiration and add a calendar reminder to rotate it 30 days
   before expiry.

4. **Update Heroku**:
   ```bash
   heroku config:set FIGMA_ACCESS_TOKEN=<service-account-pat> -a ldss-cms
   ```
   Verify with:
   ```bash
   curl -H "X-Figma-Token: <token>" https://api.figma.com/v1/me
   # Should return the service account email, not an individual
   ```

5. **Revoke Clay's PAT** at https://www.figma.com/settings → Personal access
   tokens → Revoke.

6. **Update this document** — move Figma from "personal-account dependencies"
   to a row in the regular table with the service account as owner.

### Cost
Free if the seat fits within the Salesforce Figma Enterprise plan (which it
should — it's a single read-only-ish seat). If procurement requires a paid
seat for some reason, expect ~$15/mo (Figma Pro) to ~$45/mo (Figma Enterprise
add-on seat).

### Alternative: per-user OAuth
For a project with more than ~10 active editors or compliance requirements
that need per-user audit, replace Figma's PAT model with a Figma OAuth flow
where each editor authorizes the CMS once. The `:::figma` snapshot endpoint
would then use `req.user.figmaAccessToken` instead of the env var.

This is more code (token storage, refresh, "connect Figma" UI) and isn't
warranted yet. Revisit if either trigger fires:
- Active editor count > 10
- Compliance asks for per-user attribution

## Migration plan: Zeroheight

Zeroheight tokens are only used by one-off scripts in `scripts/zeroheight-*.ts`
during the migration phase, not by any user-facing feature. Migration here is
lower priority.

When Clay's tokens stop working, anyone with Zeroheight admin access can
generate a fresh `(api_token, client_id)` pair and add to `.env` for whoever
runs the next migration. We do not commit these to source control or ship them
to Heroku.

If the migration scripts become a recurring need (rather than one-off), file a
follow-up to provision Zeroheight API access via a service account.

## Token rotation cadence

| Token | Cadence | Trigger |
|---|---|---|
| `FIGMA_ACCESS_TOKEN` | Every 90 days while on a personal PAT, every 365 days on service-account PAT | Calendar reminder + token expiry |
| `ZEROHEIGHT_*` | Only when broken | Migration scripts are one-off |
| `GHE_CLIENT_SECRET` | Annually | Calendar reminder |
| `SESSION_SECRET` | Annually | Calendar reminder; rotate immediately on any suspected compromise |
| `CLOUDINARY_URL` | Only when compromised | `heroku addons:rotate cloudinary -a ldss-cms` |
| `DATABASE_URL` | Only when compromised | `heroku pg:credentials:rotate -a ldss-cms` |

## Incident response

If any token in this file is suspected compromised:

1. **Rotate immediately** — generate a new token at the upstream service,
   update Heroku via `heroku config:set`, and the old token stops working.
2. **Revoke the old token** at the upstream service (don't just generate a new
   one — explicitly revoke the old one).
3. **Audit recent activity** in the upstream service's audit log to determine
   if the compromised token was used.
4. **Document** what happened in this file's incident log below.

### Incident log

| Date | Token | What happened | Actions taken |
|---|---|---|---|
| 2026-05-18 | `FIGMA_ACCESS_TOKEN` | Token briefly visible in chat history during initial setup | Token revoked at figma.com/settings, new token generated, Heroku updated to v50 |
