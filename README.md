# Lightning Design System 2 — Documentation Site & CMS

A markdown-driven documentation site for the Salesforce Lightning Design System 2, paired with a GitHub-backed CMS for content management.

**Live:** [https://ldss-cms-9e2bad355514.herokuapp.com](https://ldss-cms-9e2bad355514.herokuapp.com)
**CMS Editor:** [https://ldss-cms-9e2bad355514.herokuapp.com/editor](https://ldss-cms-9e2bad355514.herokuapp.com/editor)

## Project Structure

```
/
├── content/                 # Markdown content (pages, navigation, data)
│   ├── navigation.md        # Site navigation tree (categories, pages, tabs)
│   ├── home.md              # Homepage content
│   ├── component/           # Component documentation
│   ├── foundation/          # Foundation pages
│   ├── get-started/         # Getting started guides
│   └── ...                  # Other content categories
├── frontend/                # Next.js static site (SSG)
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   ├── components/      # React UI components
│   │   └── lib/             # Content parsing, markdown processing, navigation
│   ├── out/                 # Pre-built static HTML (committed for Heroku)
│   ├── next.config.ts       # Static export config (output: 'export')
│   └── package.json
├── client/                  # CMS editor SPA (Vite + React + TypeScript)
│   ├── src/
│   │   ├── App.tsx           # Main editor app with auth gating
│   │   ├── components/       # Editor panels, file browser, nav manager
│   │   └── extensions/       # Tiptap rich-text editor extensions
│   └── package.json
├── src/                     # CMS Express server (TypeScript)
│   ├── server.ts            # Main server — serves API, editor, and frontend
│   ├── routes/              # Auth, content, GitHub, navigation, tokens, etc.
│   ├── services/            # GitHub API service (Octokit)
│   ├── middleware/          # Auth guards, error handling
│   └── types/               # TypeScript type definitions
├── public/editor/           # Pre-built CMS editor assets (committed)
├── schema.sql               # PostgreSQL schema
├── package.json             # CMS server dependencies & Heroku scripts
├── tsconfig.json            # CMS server TypeScript config
├── Procfile                 # Heroku process definition
└── .env                     # Local environment variables (not committed)
```

## How It Works

### Frontend (Documentation Site)

The documentation site is a **statically exported Next.js app**. All pages are pre-rendered at build time from markdown files in `content/`. The site includes:

- Dark/light/system theme toggle with localStorage persistence
- Sidebar navigation driven by `content/navigation.md`
- Storybook component embeds with theme-synced light/dark toggles
- Custom markdown directives for hero banners, card grids, callouts, video embeds
- Searchable component library with tabbed sub-pages (usage, develop, accessibility)

### CMS (Content Management)

The CMS is an **Express.js server** with a **Vite React SPA** editor. Content editors authenticate with GitHub Enterprise OAuth and can:

- Browse and edit markdown content with a rich-text (Tiptap) or code (Monaco) editor
- Preview rendered content in real-time
- Publish changes as GitHub pull requests (attributed to the authenticated user)
- Manage navigation ordering via drag-and-drop
- Sync local content with the remote master branch

On save/publish, the CMS creates a new branch and PR on the target GitHub repo using the authenticated user's token (Git Trees API for atomic multi-file commits).

## Local Development

### Prerequisites

- Node.js 20+ (22+ recommended)
- PostgreSQL running locally
- A GitHub Enterprise OAuth application ([register one here](https://git.soma.salesforce.com/settings/applications/new))

### 1. Set up the database

```bash
createdb ldss_cms
psql -d ldss_cms -f schema.sql
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env with your database URL, GitHub OAuth credentials, etc.
```

Key variables:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `GHE_BASE_URL` | GitHub Enterprise base URL |
| `GHE_CLIENT_ID` | OAuth app client ID |
| `GHE_CLIENT_SECRET` | OAuth app client secret |
| `GHE_CALLBACK_URL` | OAuth callback (`http://localhost:4000/auth/github/callback`) |
| `GITHUB_OWNER` | Target repo owner |
| `GITHUB_REPO` | Target repo name |
| `GITHUB_CONTENT_PATH` | Path prefix for content in the repo (e.g. `content`) |
| `SESSION_SECRET` | Session encryption secret |

### 3. Install and run the CMS server

```bash
npm install
npm run dev
# Server starts at http://localhost:4000
# Editor at http://localhost:4000/editor
```

### 4. Run the CMS editor client (dev mode with hot reload)

```bash
cd client
npm install
npm run dev
# Vite dev server at http://localhost:5173
```

### 5. Run the frontend site (dev mode)

```bash
cd frontend
npm install
npm run dev
# Next.js dev server at http://localhost:3000
```

### 6. Build the frontend static export

```bash
cd frontend
npm run build
# Output in frontend/out/ — 932+ static HTML pages
```

## Heroku Infrastructure

The entire application runs on a **single Heroku dyno** (`ldss-cms`). The CMS server is the root-level app, and it also serves the pre-built static frontend.

### Architecture

```
                   ┌─────────────────────────────────────┐
                   │         Heroku (ldss-cms)            │
                   │                                     │
  Browser ──────► │  Express Server (dist/server.js)    │
                   │    │                                │
                   │    ├── /          → Static frontend  │
                   │    ├── /editor    → CMS editor SPA   │
                   │    ├── /auth/*    → GitHub OAuth      │
                   │    ├── /api/*     → CMS REST API      │
                   │    └── /health    → Health check      │
                   │                                     │
                   │  PostgreSQL (Heroku addon)           │
                   └─────────────────────────────────────┘
```

### How Heroku builds

1. Heroku detects the root `package.json` and runs `npm install`
2. The `heroku-postbuild` script runs `tsc` to compile the Express server
3. The CMS editor SPA and frontend static site are **pre-built and committed** to avoid npm subdirectory install issues on Heroku
4. `Procfile` starts the server: `web: node dist/server.js`

### Heroku config vars

| Variable | Value |
|---|---|
| `NODE_ENV` | `production` |
| `DATABASE_URL` | Auto-set by Heroku PostgreSQL addon |
| `SESSION_SECRET` | Random secret for session encryption |
| `GHE_BASE_URL` | `https://git.soma.salesforce.com` |
| `GHE_CLIENT_ID` | Production OAuth app client ID |
| `GHE_CLIENT_SECRET` | Production OAuth app client secret |
| `GHE_CALLBACK_URL` | `https://ldss-cms-9e2bad355514.herokuapp.com/auth/github/callback` |
| `GITHUB_OWNER` | `clay-park` |
| `GITHUB_REPO` | `ldss-oss-github` |
| `GITHUB_CONTENT_PATH` | `content` |
| `CONTENT_DIR` | `/app/content` |

### Deploying

```bash
# Push to Heroku
git push heroku-cms master

# Push to GitHub
git push origin master
```

### Rebuilding the frontend

If you change any content or frontend code, rebuild the static export locally and commit:

```bash
cd frontend && npm run build
cd ..
git add frontend/out/ -f
git commit -m "Rebuild frontend static export"
git push heroku-cms master
```

### Rebuilding the CMS editor

If you change the CMS editor client code:

```bash
cd client && npm run build
cd ..
git add public/editor/
git commit -m "Rebuild CMS editor"
git push heroku-cms master
```

## Content Authoring

All site content lives in the `content/` directory as markdown files. The navigation structure is defined in `content/navigation.md` using an indented list format:

```markdown
- Get Started
  - [Get Started](/get-started/get-started)
  - [Admins](/get-started/admins)
  - [Designers](/get-started/designers)
- Components
  - [Button](/component/button) {sidebar}
    - [Usage](/component/button--usage)
    - [Develop](/component/button--develop)
    - [Accessibility](/component/button--accessibility)
```

- **Level 0** (no indent): Category header
- **Level 1** (2 spaces): Page entry as `[Name](/category/slug)`
- **Level 2** (4+ spaces): Sub-tab of the parent page
- **`{sidebar}`** flag: Show sub-tabs in the sidebar navigation

### Custom Directives

The markdown processor supports custom directives for rich content:

- `:::hero-banner` — Full-width hero banners with background images
- `:::card-grid` — Responsive card layouts
- `:::callout` — Info/warning/tip callout blocks
- `:::component-demo` — Storybook iframe embeds with theme toggles
- `:::code-example` — Syntax-highlighted code blocks
- `:::video-embed` — Video players

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend site | Next.js 15 (static export), React 19, Tailwind CSS v4 |
| CMS server | Express.js, TypeScript, Passport.js (OAuth2) |
| CMS editor | Vite, React, Tiptap (rich text), Monaco (code), dnd-kit (drag-and-drop) |
| Database | PostgreSQL (sessions, drafts, locks, audit log) |
| Git integration | Octokit (GitHub API — branches, commits, PRs) |
| Hosting | Heroku (single dyno + PostgreSQL addon) |
