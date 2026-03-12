# Lightning Design System - Markdown Migration Sprint Plan

**Duration**: 4 weeks (March 11 - April 8, 2026)
**Team Size**: 6 people
**Goal**: Migrate 499 pages from Payload CMS to GitHub-backed markdown site with custom CMS

---

## Team Structure

| Name | Role | Availability | Primary Focus |
|------|------|--------------|---------------|
| **Clay Park** | Tech Lead | 100% | Architecture, reviews, unblocking |
| **Backend Eng 1** | Backend Engineer | 100% | CMS backend (Express.js, auth) |
| **Backend Eng 2** | Backend Engineer | 100% | GitHub API, file locking, PR automation |
| **Frontend Eng** | Frontend Engineer | 100% | Next.js site, markdown parser, search |
| **Content Eng 1** | Content Engineer | 100% | Components category migration |
| **Content Eng 2** | Content Engineer | 100% | Foundations + Patterns migration |
| **Content Eng 3** | Content Engineer | 100% | Accessibility + Tools migration |

---

## Week 1: Foundation + Core Pages (50 pages)

### Sprint 1 Goal
- Infrastructure ready (repo, Next.js, CMS scaffold)
- First 50 high-priority pages migrated
- Markdown patterns established

---

### Day 1 (Monday, March 11)

#### Morning: Kickoff & Setup
- [ ] **All Team**: Sprint planning meeting (2h)
  - Review HLD document
  - Clarify roles and ownership
  - Set up Slack channel, daily standup time
  - Agree on definition of done for pages

#### Afternoon: Infrastructure
- [ ] **Clay**: Create GitHub repo `salesforce-ux/lightning-design-system`
  - Initialize with directory structure
  - Set up branch protection rules (require PR reviews)
  - Configure GitHub Actions workflows
  - Add team members with appropriate permissions

- [ ] **Frontend Eng**: Next.js project setup
  - `npx create-next-app@latest` with TypeScript
  - Install dependencies: `unified`, `remark-*`, `rehype-*`, `gray-matter`, `tailwindcss`
  - Create basic file structure (`src/app/`, `src/components/`, `src/lib/`, `content/`)
  - Implement basic layout (empty Header, Sidebar, Footer)
  - Deploy to Vercel (connect GitHub repo)

- [ ] **Backend Eng 1**: CMS backend scaffold
  - Create `cms-backend/` directory
  - `npm init` + Express.js setup
  - Install dependencies: `express`, `passport`, `pg`, `dotenv`, `@octokit/rest`
  - Create basic server (`src/server.ts`)
  - Set up local PostgreSQL database
  - Create database schema (users, sessions, drafts, file_locks, audit_log)

- [ ] **Backend Eng 2**: GitHub integration research
  - Test Octokit API locally (read/write files, create branches, create PRs)
  - Document GitHub App setup requirements
  - Create personal access token for development
  - Write sample script: read markdown file, modify, create PR

- [ ] **Content Eng 1-3**: Payload content export
  - Run `scripts/migrate-from-payload.ts --export-all` to generate markdown templates
  - Review generated markdown for quality
  - Identify top 50 pages by analytics (Components > Foundations > others)
  - Create shared Google Doc with page assignments

**End of Day 1 Deliverables**:
- ✅ GitHub repo created
- ✅ Next.js site deployed to Vercel (empty shell)
- ✅ CMS backend running locally
- ✅ Top 50 pages identified
- ✅ Team aligned on workflow

---

### Day 2 (Tuesday, March 12)

#### Daily Standup (9:00 AM, 15 min)
- What did you do yesterday?
- What will you do today?
- Any blockers?

#### Tasks

- [ ] **Frontend Eng**: Markdown parser implementation
  - Create `src/lib/markdown.ts` with unified pipeline
  - Implement custom directives: `callout`, `component-demo`, `code-example`
  - Test with sample markdown file
  - Create `src/app/[category]/[[...slug]]/page.tsx` dynamic route
  - Implement frontmatter parsing (`gray-matter`)
  - Render first test page

- [ ] **Backend Eng 1**: Authentication setup
  - Configure Salesforce Connected App (OAuth 2.0)
  - Implement Passport.js strategy for Salesforce SSO
  - Create `/auth/salesforce` and `/auth/callback` routes
  - Set up session store with `connect-pg-simple`
  - Test login flow locally

- [ ] **Backend Eng 2**: GitHub API service
  - Create `src/services/github-api.ts` with Octokit
  - Implement methods: `getFile(path)`, `updateFile(path, content)`, `createPR(branch, files, message)`
  - Add error handling and rate limit detection
  - Write unit tests

- [ ] **Content Eng 1**: Migrate Components (pages 1-17)
  - **Button** (index + variants + states + accessibility)
  - **Input** (index + types + validation)
  - **Checkbox** (index + states)
  - **Radio** (index + groups)
  - Test each page renders correctly on local dev site

- [ ] **Content Eng 2**: Migrate Foundations (pages 1-10)
  - **Colors** (index + palette + accessibility)
  - **Typography** (index + scales + usage)
  - **Spacing** (index + scale + layout)
  - **Grid** (index + examples)

- [ ] **Content Eng 3**: Asset migration setup
  - Copy all images from `ldss-os/public/media/` to `public/assets/images/`
  - Organize by category (components/, foundations/, patterns/)
  - Run image optimization script (`sharp`)
  - Update asset references in migrated markdown

**End of Day 2 Deliverables**:
- ✅ Markdown parser working with custom directives
- ✅ First test page rendering on Vercel
- ✅ Salesforce SSO login working locally
- ✅ GitHub API service implemented
- ✅ 27 pages migrated (17 components + 10 foundations)

---

### Day 3 (Wednesday, March 13)

#### Daily Standup (9:00 AM)

#### Tasks

- [ ] **Frontend Eng**: Navigation system
  - Create `src/lib/navigation.ts` - auto-generate nav from file tree
  - Implement recursive directory traversal
  - Parse frontmatter for `order`, `hidden`, `category`
  - Generate navigation JSON structure
  - Create `src/components/Sidebar.tsx` with collapsible sections
  - Test navigation with migrated pages

- [ ] **Backend Eng 1**: CMS editor UI (React SPA)
  - Create `cms-backend/public/editor/` React app
  - Install Monaco Editor (`@monaco-editor/react`)
  - Create split-pane layout (editor | preview)
  - Implement markdown preview using same remark pipeline as frontend
  - Add "Save Draft" button (POST to `/api/content/:path/draft`)

- [ ] **Backend Eng 2**: File locking system
  - Create `file_locks` table in PostgreSQL
  - Implement `/api/locks/:path` endpoints (acquire, release, check)
  - Add middleware to check lock before allowing edits
  - Implement auto-release after 30 min inactivity (cron job)
  - Test with multiple browser sessions

- [ ] **Content Eng 1**: Continue Components (pages 18-34)
  - **Dropdown** (index + variants)
  - **Modal** (index + sizes + accessibility)
  - **Tabs** (index + variants)
  - **Accordion** (index + accessibility)
  - **Data Table** (index + sorting + pagination)

- [ ] **Content Eng 2**: Continue Foundations + Start Patterns (pages 11-20)
  - **Icons** (index + usage + accessibility)
  - **Elevation** (index + shadows)
  - **Patterns / Forms** (index + best practices)
  - **Patterns / Navigation** (index)

- [ ] **Content Eng 3**: Asset migration + QA
  - Finish asset migration and optimization
  - Create asset manifest (JSON file with all asset paths)
  - QA first 27 migrated pages (check links, images, formatting)
  - Document any issues in shared tracker

**End of Day 3 Deliverables**:
- ✅ Navigation auto-generation working
- ✅ Sidebar rendering with collapsible categories
- ✅ Monaco Editor UI running in CMS
- ✅ File locking system implemented
- ✅ 50 pages migrated total
- ✅ All assets migrated and optimized

---

### Day 4 (Thursday, March 14)

#### Daily Standup (9:00 AM)

#### Tasks

- [ ] **Frontend Eng**: Custom components for markdown
  - Create `src/components/markdown/Callout.tsx` (info/warning/error/success variants)
  - Create `src/components/markdown/ComponentDemo.tsx` (Storybook iframe embed)
  - Create `src/components/markdown/CodeBlock.tsx` (syntax highlighting via `rehype-highlight`)
  - Create `src/components/markdown/DesignTokenTable.tsx` (auto-generate from JSON)
  - Test all components in markdown pages

- [ ] **Backend Eng 1**: GitHub PR creation
  - Implement `/api/github/create-pr` endpoint
  - Logic: create branch (`cms-edit-${timestamp}`), commit file(s), open PR
  - Auto-generate PR description (user, timestamp, files changed)
  - Return PR URL to frontend
  - Log to audit_log table

- [ ] **Backend Eng 2**: Draft management
  - Implement draft list UI (show all drafts for logged-in user)
  - Add "Discard Draft" functionality
  - Implement draft diff view (show changes vs GitHub HEAD)
  - Add "Restore Draft" (if accidentally closed)

- [ ] **Clay**: Code review + unblocking
  - Review all PRs from Days 1-3
  - Test CMS backend locally
  - Review first 50 migrated pages for quality
  - Update documentation (README, contributing guide)

- [ ] **Content Eng 1-3**: QA and polish first 50 pages
  - Fix broken links
  - Verify all images display correctly
  - Check custom directive rendering (callouts, component-demos)
  - Ensure consistent formatting
  - Add missing SEO metadata (description, keywords)

**End of Day 4 Deliverables**:
- ✅ Custom markdown components working
- ✅ PR creation working end-to-end
- ✅ Draft management UI complete
- ✅ First 50 pages fully QA'd and polished
- ✅ Documentation updated

---

### Day 5 (Friday, March 15)

#### Daily Standup (9:00 AM)

#### Tasks

- [ ] **Frontend Eng**: Deploy CMS backend to Heroku
  - Create Heroku app `ldss-cms-backend`
  - Add Heroku Postgres addon (Essential-0 plan)
  - Set environment variables (DATABASE_URL, SESSION_SECRET, GITHUB_TOKEN, SALESFORCE_OAUTH_*)
  - Deploy CMS backend
  - Test Salesforce SSO on production
  - Document Heroku setup in README

- [ ] **Backend Eng 1**: CMS polish
  - Add loading states for all API calls
  - Implement error handling and user-friendly error messages
  - Add "Recently Edited" list on CMS home page
  - Add user profile dropdown (logout, settings)

- [ ] **Backend Eng 2**: GitHub webhook setup (optional)
  - Configure GitHub webhook to notify CMS when PRs are merged
  - Clear drafts when corresponding PR is merged
  - Send Slack notification on successful merge

- [ ] **Content Eng 1-3**: Start Week 2 migration (pages 51-80)
  - Each engineer takes 10 pages
  - Focus on Components category (continued)
  - Apply learnings from first 50 pages

- [ ] **Clay**: Week 1 retrospective prep
  - Compile metrics (pages migrated, PRs merged, bugs found)
  - Prepare retrospective agenda
  - Schedule Week 2 planning

#### End of Day: Sprint Retrospective (4:00 PM, 1h)
- What went well?
- What could be improved?
- Action items for Week 2

**End of Week 1 Deliverables**:
- ✅ 50 pages migrated and live on Vercel
- ✅ CMS backend deployed to Heroku
- ✅ End-to-end workflow tested (edit in CMS → PR → merge → deploy)
- ✅ Team velocity established (10 pages/person/day)
- ✅ Week 2 plan adjusted based on learnings

---

## Week 2: CMS Features + Bulk Migration (200 pages)

### Sprint 2 Goal
- Feature-complete CMS backend
- 250 pages migrated total (200 more)
- Content workflow streamlined

---

### Day 6-10 (March 18-22)

#### Team Focus Split

**Backend Team (Eng 1 & 2):**
- [ ] Navigation manager UI (drag-drop reorder pages)
- [ ] Asset upload interface (drag-drop images, auto-optimize)
- [ ] Bulk operations (bulk edit frontmatter, bulk publish)
- [ ] Search implementation (Pagefind library, static index generation)
- [ ] User role management (admin vs editor permissions)
- [ ] CMS analytics dashboard (pages edited, PRs created, most active users)

**Frontend Team (Frontend Eng + Clay):**
- [ ] SEO optimization (meta tags, Open Graph, Twitter cards)
- [ ] Performance optimization (image lazy loading, code splitting)
- [ ] Implement breadcrumbs component
- [ ] Add "Edit on GitHub" link on all pages
- [ ] Responsive design polish (mobile navigation)
- [ ] Footer component with social links

**Content Team (Content Eng 1-3):**
- [ ] **Target: 200 pages migrated**
- [ ] Components category: complete all remaining (~100 pages)
  - All form components (select, textarea, combobox, datepicker, etc.)
  - Layout components (card, panel, section, page-header)
  - Navigation components (tabs, path, breadcrumbs, tree)
  - Feedback components (alert, toast, spinner, progress)
  - Data components (table, tree-grid, kanban, timeline)
- [ ] Patterns category: migrate 50 pages
  - Forms patterns
  - Navigation patterns
  - Data patterns
  - Onboarding patterns
- [ ] Accessibility category: migrate 30 pages
- [ ] Tools category: migrate 20 pages

**Daily Workflow**:
- Standup at 9:00 AM
- Content engineers: aim for 10 pages/day each (30 pages/day team total)
- Backend/frontend engineers: pair program on complex features
- End of day: demo new features to team (15 min)
- Clay: code reviews, unblocking, stakeholder updates

**Metrics Target**:
- ✅ 200 pages migrated (250 total)
- ✅ CMS backend feature-complete
- ✅ Search working on frontend site
- ✅ Navigation manager deployed
- ✅ Asset upload UI working

---

## Week 3: Polish + Migration Completion (249 pages)

### Sprint 3 Goal
- ALL 499 pages migrated
- CMS fully functional
- Site performance optimized

---

### Day 11-15 (March 25-29)

#### Team Focus

**Backend Team (reduced to 1 engineer):**
- [ ] CMS bug fixes and polish
- [ ] Performance optimization (caching, CDN)
- [ ] User training documentation
- [ ] CMS walkthrough video (Loom)

**Frontend + Content Team (5 people):**
- [ ] **PUSH TO COMPLETE ALL 499 PAGES**
- [ ] Each person: 50 pages this week (250 pages total team capacity)
- [ ] Divide by category:
  - Person 1: Remaining Components (50)
  - Person 2: Remaining Patterns (50)
  - Person 3: Remaining Accessibility (40) + Tools (10)
  - Person 4: Get Started + AI section (50)
  - Person 5: QA all 499 pages (cross-check links, images, formatting)

**Clay:**
- [ ] Conduct content audits (spot-check 20% of pages)
- [ ] Prepare launch plan
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Create 301 redirect rules (old Payload URLs → new markdown URLs)
- [ ] Stakeholder demo (mid-week)

**Accelerators**:
- Use AI agents (Claude Code, GitHub Copilot) to help with markdown conversion
- Create templates for common page structures
- Automate repetitive tasks (frontmatter generation, asset linking)

**Metrics Target**:
- ✅ ALL 499 pages migrated
- ✅ 100% page QA complete
- ✅ All links and images verified
- ✅ Lighthouse score 95+ on sample pages
- ✅ WCAG AA compliance verified

---

## Week 4: Launch Prep + Soft Launch

### Sprint 4 Goal
- Production-ready site
- Internal soft launch
- Public launch (end of week)

---

### Day 16-20 (April 1-5)

#### Team Focus: ALL HANDS ON DECK

**Day 16 (Monday): Final QA**
- [ ] End-to-end testing (frontend + CMS)
- [ ] Test all custom markdown directives on 50 sample pages
- [ ] Verify Storybook embeds work
- [ ] Test search functionality (all 499 pages indexed)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS, Android)
- [ ] Accessibility testing (screen readers, keyboard navigation)

**Day 17 (Tuesday): User Training**
- [ ] CMS training session for designers (2h workshop)
- [ ] Create CMS user guide documentation
- [ ] Record walkthrough videos (5-10 min each)
  - How to edit a page
  - How to add images
  - How to reorder navigation
  - How to create a PR
- [ ] Agent contribution guide (GitHub workflow for AI agents)

**Day 18 (Wednesday): Launch Prep**
- [ ] Set up production monitoring (Sentry, LogRocket)
- [ ] Configure Google Analytics and Vercel Analytics
- [ ] Implement 301 redirects (from old URLs)
- [ ] Generate sitemap.xml and robots.txt
- [ ] Update DNS (prepare for cutover)
- [ ] Create launch runbook (step-by-step)
- [ ] Prepare rollback plan (in case of issues)

**Day 19 (Thursday): Soft Launch**
- [ ] Soft launch to internal Salesforce users (10:00 AM)
- [ ] Announce in #lightning-design-system Slack channel
- [ ] Monitor analytics and error logs (all day)
- [ ] Collect feedback via survey
- [ ] Fix critical bugs (P0/P1 only)
- [ ] Test CMS with 5-10 real designers

**Day 20 (Friday): Public Launch**
- [ ] Public launch announcement (9:00 AM PT)
- [ ] DNS cutover (lightningdesignsystem.com → new site)
- [ ] Social media announcement (Twitter, LinkedIn)
- [ ] Internal all-hands demo
- [ ] Monitor traffic spike (expect 10-50x normal traffic)
- [ ] On-call rotation for day-of support
- [ ] Celebrate! 🎉

---

## Post-Launch (Week 5+)

### Immediate (Days 21-25)
- [ ] Address user feedback (prioritize top 10 issues)
- [ ] Fix bugs discovered in production
- [ ] Optimize pages with poor performance
- [ ] Add missing content (if any gaps identified)

### Short-term (Weeks 5-8)
- [ ] Add advanced search features (filters, facets)
- [ ] Implement analytics dashboard (page views, popular components)
- [ ] CMS enhancements (keyboard shortcuts, markdown templates)
- [ ] Agent workflow improvements (automated PR templates)

### Long-term (Months 2-3)
- [ ] Versioning support (v2.x, v3.x docs)
- [ ] Internationalization (multi-language support)
- [ ] Community contributions (external PRs)
- [ ] Advanced component demos (interactive playgrounds)

---

## Success Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| **Pages Migrated** | 499/499 (100%) | Count `.md` files in `content/` |
| **CMS Adoption** | 80% of designers using CMS | Track unique users in audit_log |
| **Agent PR Success** | 90% auto-merge rate | GitHub PR analytics (agent-created PRs) |
| **Site Performance** | Lighthouse 95+ | Run Lighthouse on 10 random pages |
| **Uptime** | 99.9% | Vercel analytics |
| **User Satisfaction** | 8/10 average | Post-launch survey (NPS) |
| **Page Load Time** | <1.5s (Time to Interactive) | Vercel Analytics, Web Vitals |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| **Content migration takes longer than planned** | Add 2 more content engineers in Week 3 if behind pace, use AI agents to accelerate |
| **CMS backend not stable** | Have developers use GitHub directly as fallback, defer CMS launch to Week 5 if needed |
| **Salesforce SSO issues** | Use temporary email/password auth for CMS during development |
| **Performance issues on launch day** | Pre-generate all static pages, use Vercel's edge caching, have scaling plan ready |
| **Broken links or missing assets** | Run automated link checker daily, create asset inventory spreadsheet |

---

## Communication Plan

### Daily Standup (9:00 AM, 15 min)
- What did you do yesterday?
- What will you do today?
- Any blockers?

### Weekly Demo (Friday 4:00 PM, 30 min)
- Show progress to stakeholders
- Demo new features
- Collect feedback

### Slack Updates
- End of day: Each person posts progress in #ldss-migration channel
- Blockers: Tag @Clay immediately
- Wins: Share in #wins channel

### Stakeholder Updates
- Clay sends weekly email update to leadership
- Include: pages migrated, features completed, risks, next week plan

---

## Definition of Done

### For a Migrated Page:
- [ ] Markdown file created with complete frontmatter
- [ ] Content accurately represents original page
- [ ] All images and assets linked correctly
- [ ] Custom directives used properly (callout, component-demo)
- [ ] Cross-links to other pages work
- [ ] Page renders correctly on Vercel preview
- [ ] SEO metadata complete (title, description, keywords)
- [ ] Accessibility checked (headings, alt text, links)
- [ ] Reviewed by one other team member

### For CMS Features:
- [ ] Feature implemented and tested locally
- [ ] Unit tests written (>80% coverage)
- [ ] Integration test with GitHub API
- [ ] Code reviewed and approved
- [ ] Deployed to Heroku staging
- [ ] User acceptance testing passed
- [ ] Documentation updated (README, user guide)
- [ ] Deployed to production

### For Site Launch:
- [ ] All 499 pages migrated
- [ ] CMS feature-complete and stable
- [ ] Search working
- [ ] Performance targets met (Lighthouse 95+)
- [ ] Accessibility compliant (WCAG AA)
- [ ] 301 redirects configured
- [ ] Monitoring and analytics set up
- [ ] User training completed
- [ ] Launch runbook prepared
- [ ] Stakeholder sign-off

---

## Tools & Resources

### Development
- **GitHub**: https://github.com/salesforce-ux/lightning-design-system
- **Vercel**: https://vercel.com/salesforce-ux/ldss
- **Heroku**: https://dashboard.heroku.com/apps/ldss-cms-backend
- **Local Dev**: http://localhost:3000 (site), http://localhost:4000 (CMS)

### Collaboration
- **Slack**: #ldss-migration (team channel)
- **Google Drive**: LDSS Migration folder (shared docs, page tracker)
- **Figma**: Design System workspace (reference designs)
- **Notion**: Knowledge base and sprint notes

### Monitoring
- **Vercel Analytics**: https://vercel.com/salesforce-ux/ldss/analytics
- **Sentry**: https://sentry.io/salesforce-ux/ldss (error tracking)
- **Google Analytics**: https://analytics.google.com (traffic)

---

**Sprint Plan Status**: ✅ Ready to Execute
**Last Updated**: 2026-03-11
**Next Review**: End of Week 1 (March 15)
