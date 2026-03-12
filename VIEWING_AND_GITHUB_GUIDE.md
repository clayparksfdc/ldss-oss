# Lightning Design System - Viewing & GitHub Setup Guide

**Status**: ✅ Git repos initialized and ready to push

---

## 🖥️ View Your Sites Locally

### Option 1: Quick Start Script (Recommended)

Run both frontend and backend with one command:

```bash
cd /Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github
./start-dev.sh
```

This will start:
- **Frontend**: http://localhost:3000
- **CMS Backend**: http://localhost:4000
- **Health Check**: http://localhost:4000/health

Press `Ctrl+C` to stop all services.

---

### Option 2: Manual Start (Frontend Only)

If you just want to view the content pages:

```bash
cd lightning-design-system
npm run dev
```

Open http://localhost:3000

**What you'll see:**
- Home page with navigation
- All 410 migrated pages browsable
- Categories: Components, Foundations, Develop, Design, Patterns
- Custom markdown rendering (tables, lists, callouts)

---

### Option 3: Manual Start (Both Services)

**Terminal 1 - Frontend:**
```bash
cd lightning-design-system
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd lightning-design-system-cms

# Option A: With Docker (recommended)
docker-compose up

# Option B: Without Docker
npm run dev
```

---

## 📤 Push to GitHub

Both repositories are initialized with Git and have initial commits ready. Now you need to create GitHub repos and push.

### Step 1: Create GitHub Repositories

Go to https://github.com/new and create TWO repositories:

**Repository 1: Frontend**
- Name: `lightning-design-system`
- Description: `Lightning Design System - Next.js frontend with markdown-first content`
- Visibility: Public or Private
- **Don't** initialize with README, .gitignore, or license (we already have these)

**Repository 2: Backend**
- Name: `lightning-design-system-cms`
- Description: `Lightning Design System - Express.js CMS backend for content management`
- Visibility: Public or Private
- **Don't** initialize with README, .gitignore, or license

---

### Step 2: Push Frontend to GitHub

```bash
cd /Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system

# Add GitHub remote (replace YOUR_GITHUB_USERNAME with your actual username)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/lightning-design-system.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_GITHUB_USERNAME/lightning-design-system.git

# Push to GitHub
git push -u origin main
```

**Expected output:**
```
Enumerating objects: 1465, done.
Counting objects: 100% (1465/1465), done.
Writing objects: 100% (1465/1465), done.
To https://github.com/YOUR_GITHUB_USERNAME/lightning-design-system.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

### Step 3: Push Backend to GitHub

```bash
cd /Users/clay.park/Documents/LightningDesignSystemSiteMigration/ldss-oss-github/lightning-design-system-cms

# Add GitHub remote
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/lightning-design-system-cms.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_GITHUB_USERNAME/lightning-design-system-cms.git

# Push to GitHub
git push -u origin main
```

---

### Step 4: Verify on GitHub

Visit your repositories:
- https://github.com/YOUR_GITHUB_USERNAME/lightning-design-system
- https://github.com/YOUR_GITHUB_USERNAME/lightning-design-system-cms

You should see:
- ✅ All files committed
- ✅ README.md displayed
- ✅ Commit message visible
- ✅ GitHub Actions workflows ready

---

## 🚀 Next Steps After Pushing

### Frontend (Vercel Deployment)

1. **Sign up for Vercel** (if you haven't): https://vercel.com
2. **Import your GitHub repo**:
   - Click "New Project"
   - Select `lightning-design-system`
   - Vercel auto-detects Next.js
   - Click "Deploy"
3. **Your site goes live** at `https://lightning-design-system.vercel.app`

**GitHub Actions will auto-deploy** on every push to main!

---

### Backend (Heroku Deployment)

1. **Sign up for Heroku** (if you haven't): https://heroku.com
2. **Install Heroku CLI**:
   ```bash
   brew install heroku/brew/heroku
   ```

3. **Deploy:**
   ```bash
   cd lightning-design-system-cms
   heroku login
   heroku create ldss-cms-backend
   heroku addons:create heroku-postgresql:essential-0
   git push heroku main
   heroku run psql $DATABASE_URL -f schema.sql
   ```

4. **Configure environment variables:**
   ```bash
   heroku config:set SESSION_SECRET=your-secure-random-string
   heroku config:set GITHUB_TOKEN=your-github-token
   heroku config:set SALESFORCE_CLIENT_ID=your-salesforce-client-id
   heroku config:set SALESFORCE_CLIENT_SECRET=your-salesforce-secret
   ```

---

## 🔍 What's in Each Repository

### Frontend (`lightning-design-system`)

**Size**: 1,465 files, ~130,000 lines
**Main Commit**: "feat: initial commit - Lightning Design System frontend"

**Contents:**
- ✅ 410 markdown pages organized by category
- ✅ 362 migrated images
- ✅ Next.js 15 app with TypeScript
- ✅ Custom markdown parser
- ✅ 16 React components
- ✅ Tailwind CSS v4 theme
- ✅ GitHub Actions workflows
- ✅ Comprehensive documentation

**Key Files:**
- `content/` - All markdown pages
- `src/app/` - Next.js routes
- `src/components/` - React components
- `src/lib/markdown.ts` - Custom markdown parser
- `README.md` - Setup guide
- `.github/workflows/` - CI/CD

---

### Backend (`lightning-design-system-cms`)

**Size**: 28 files, ~6,800 lines
**Main Commit**: "feat: initial commit - Lightning Design System CMS backend"

**Contents:**
- ✅ Express.js server with TypeScript
- ✅ 22 API endpoints
- ✅ PostgreSQL schema
- ✅ Salesforce SSO configuration
- ✅ GitHub API integration
- ✅ Docker deployment setup
- ✅ Comprehensive documentation

**Key Files:**
- `src/server.ts` - Main Express app
- `src/routes/` - API endpoints
- `src/services/` - GitHub API, database
- `schema.sql` - Database schema
- `docker-compose.yml` - Docker setup
- `README.md` - Setup guide
- `.github/workflows/` - CI/CD

---

## 📊 Commit Details

### Frontend Commit

```
feat: initial commit - Lightning Design System frontend

- Next.js 15 with App Router and TypeScript
- 410 migrated pages from Payload CMS to markdown
- Custom markdown parser with SLDS directives
- Auto-generated navigation from file tree
- 16 React components
- Tailwind CSS v4 with SLDS-inspired theme
- 362 migrated images with validated paths
- GitHub Actions workflows
- Production build tested and passing

Content distribution:
- 148 component pages
- 165 general pages
- 47 foundation pages
- 34 develop pages
- 12 design pages
- 4 pattern pages

Build metrics:
- First Load JS: ~106 kB
- Static pages: 4/4 generated
- Zero errors, production optimized
```

**Files**: 1,465 changed, 130,757 insertions(+)
**Branch**: main

---

### Backend Commit

```
feat: initial commit - Lightning Design System CMS backend

- Express.js server with TypeScript
- 22 RESTful API endpoints
- Salesforce SSO authentication (OAuth 2.0)
- GitHub API integration via Octokit
- File locking system
- Draft management with PostgreSQL
- Audit logging
- PostgreSQL schema (5 tables)
- Docker deployment
- Heroku deployment configuration
- GitHub Actions workflow

API Endpoints:
- 4 auth endpoints
- 4 content endpoints
- 5 GitHub endpoints
- 4 lock endpoints
- 3 navigation endpoints
- 2 system endpoints

Documentation included
```

**Files**: 28 changed, 6,785 insertions(+)
**Branch**: main

---

## 🛠️ Troubleshooting

### Frontend won't start
```bash
cd lightning-design-system
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Backend won't start
```bash
cd lightning-design-system-cms
rm -rf node_modules package-lock.json
npm install

# Check if PostgreSQL is running
docker-compose ps
```

### Git push fails (authentication)
```bash
# Configure Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Use SSH instead of HTTPS
git remote set-url origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

### Port already in use
```bash
# Find and kill process on port 3000 or 4000
lsof -ti:3000 | xargs kill -9
lsof -ti:4000 | xargs kill -9
```

---

## 📝 Quick Reference

### View Sites Locally
```bash
# Quick start (both services)
./start-dev.sh

# Frontend only
cd lightning-design-system && npm run dev

# Backend only
cd lightning-design-system-cms && docker-compose up
```

### Push to GitHub
```bash
# Frontend
cd lightning-design-system
git remote add origin https://github.com/USERNAME/lightning-design-system.git
git push -u origin main

# Backend
cd lightning-design-system-cms
git remote add origin https://github.com/USERNAME/lightning-design-system-cms.git
git push -u origin main
```

### Deploy
```bash
# Frontend to Vercel
vercel

# Backend to Heroku
heroku create APP_NAME
git push heroku main
```

---

## ✅ Summary

**Git Repositories**: ✅ Initialized and committed
**Frontend Commit**: ✅ 1,465 files ready
**Backend Commit**: ✅ 28 files ready
**Documentation**: ✅ Complete
**Scripts**: ✅ Ready to use

**Next Actions**:
1. ✅ View locally with `./start-dev.sh`
2. ⏳ Create GitHub repositories
3. ⏳ Push code to GitHub
4. ⏳ Deploy to Vercel + Heroku

---

**All code is committed and ready to push!** 🚀
