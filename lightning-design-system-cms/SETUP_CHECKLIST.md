# Setup Checklist

Use this checklist to ensure proper setup of the Lightning Design System CMS backend.

## Prerequisites

### System Requirements
- [ ] Node.js 18 or higher installed
- [ ] PostgreSQL 14 or higher installed
- [ ] Git installed
- [ ] Text editor (VS Code, Sublime, etc.)

### External Services
- [ ] GitHub account with repository access
- [ ] GitHub Personal Access Token created
- [ ] Salesforce org with admin access
- [ ] Salesforce Connected App created

## Installation Steps

### 1. Project Setup
- [ ] Clone/copy the codebase
- [ ] Navigate to project directory
- [ ] Run `npm install` to install dependencies
- [ ] Verify `node_modules` folder created

### 2. Database Configuration
- [ ] PostgreSQL server is running
- [ ] Database `ldss_cms` created
- [ ] Schema applied from `schema.sql`
- [ ] Test connection: `psql -d ldss_cms -c "SELECT NOW();"`
- [ ] Verify all 5 tables exist: `\dt` in psql

### 3. Environment Configuration
- [ ] Copy `.env.example` to `.env`
- [ ] Set `NODE_ENV` (development/production)
- [ ] Set `PORT` (default: 4000)
- [ ] Set `FRONTEND_URL` to your frontend URL
- [ ] Configure `DATABASE_URL` with correct credentials
- [ ] Generate random `SESSION_SECRET` (64+ characters)
- [ ] Set `GITHUB_TOKEN` from Personal Access Token
- [ ] Set `GITHUB_OWNER` (repository owner)
- [ ] Set `GITHUB_REPO` (repository name)
- [ ] Set `SALESFORCE_CLIENT_ID` from Connected App
- [ ] Set `SALESFORCE_CLIENT_SECRET` from Connected App
- [ ] Set `SALESFORCE_CALLBACK_URL` matching Connected App
- [ ] Set `SALESFORCE_AUTH_URL` (or use default)
- [ ] Set `SALESFORCE_TOKEN_URL` (or use default)
- [ ] Set `LOCK_DURATION_MINUTES` (or use default: 30)

### 4. GitHub Configuration
- [ ] Repository exists and is accessible
- [ ] Personal Access Token has `repo` scope
- [ ] Token can read repository contents
- [ ] Token can create branches
- [ ] Token can create pull requests
- [ ] Test with: `curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user`

### 5. Salesforce Configuration
- [ ] Connected App created in Salesforce
- [ ] OAuth Settings enabled
- [ ] Callback URL configured: `http://localhost:4000/auth/salesforce/callback`
- [ ] OAuth Scopes added: `openid`, `email`, `profile`
- [ ] Client ID and Secret obtained
- [ ] Policies configured (refresh token, etc.)

## First Run

### 6. Start Development Server
- [ ] Run `npm run dev`
- [ ] Server starts without errors
- [ ] See startup message with port
- [ ] No database connection errors
- [ ] No configuration errors

### 7. Health Check
- [ ] Open `http://localhost:4000/health` in browser
- [ ] Should return JSON with `"status": "ok"`
- [ ] Check timestamp is current
- [ ] Environment shows correct value

### 8. Test Authentication
- [ ] Open `http://localhost:4000/auth/salesforce`
- [ ] Redirects to Salesforce login
- [ ] Log in with Salesforce credentials
- [ ] Redirects back to frontend URL
- [ ] Check database: User record created in `users` table
- [ ] Session created in `session` table
- [ ] Audit log entry created

### 9. Test API Endpoints
- [ ] Get current user: `GET /auth/user`
- [ ] List GitHub files: `GET /api/github/files`
- [ ] Get repository info: `GET /api/github/repo`
- [ ] Create a test draft: `PUT /api/content/test.md/draft`
- [ ] Acquire a lock: `POST /api/locks/test.md`
- [ ] Release the lock: `DELETE /api/locks/test.md`

## Database Verification

### 10. Check Database Tables
```sql
-- Connect to database
psql -d ldss_cms

-- Verify tables exist
\dt

-- Check users table
SELECT * FROM users;

-- Check session table
SELECT count(*) FROM session;

-- Check schema version
SELECT version();
```

Expected tables:
- [ ] users
- [ ] session
- [ ] drafts
- [ ] file_locks
- [ ] audit_log

### 11. Check Indexes
```sql
-- List all indexes
SELECT tablename, indexname FROM pg_indexes WHERE schemaname = 'public';
```

Expected indexes:
- [ ] idx_session_expire
- [ ] idx_drafts_user_file
- [ ] idx_drafts_updated
- [ ] idx_locks_file
- [ ] idx_locks_expires
- [ ] idx_audit_user
- [ ] idx_audit_action
- [ ] idx_audit_created

## Security Verification

### 12. Security Configuration
- [ ] Helmet.js middleware active
- [ ] CORS configured for frontend only
- [ ] Session secret is strong and random
- [ ] Cookies set to httpOnly
- [ ] Cookies set to secure (production)
- [ ] No sensitive data in git repository
- [ ] `.env` file in `.gitignore`
- [ ] GitHub token has minimal required permissions

### 13. Access Control
- [ ] Authentication required for protected routes
- [ ] Role-based access working (admin/editor/viewer)
- [ ] Users can only modify their own drafts
- [ ] Users can only release their own locks
- [ ] Audit log recording all actions

## Production Readiness

### 14. Production Checklist
- [ ] `NODE_ENV=production` in production `.env`
- [ ] Strong random `SESSION_SECRET` generated
- [ ] Database uses SSL connection
- [ ] Managed PostgreSQL service configured
- [ ] Database backups enabled
- [ ] HTTPS/SSL certificate installed
- [ ] Frontend URL updated to production domain
- [ ] Salesforce callback URL updated for production
- [ ] Error tracking configured (Sentry, etc.)
- [ ] Monitoring configured (DataDog, CloudWatch, etc.)
- [ ] Log aggregation configured
- [ ] Health check monitoring active
- [ ] Alerts configured for downtime
- [ ] Horizontal scaling tested
- [ ] Load balancer configured
- [ ] Rate limiting implemented (if needed)

### 15. Deployment
- [ ] Choose deployment platform (AWS, GCP, Azure, Heroku)
- [ ] Review DEPLOYMENT.md for platform-specific steps
- [ ] Environment variables configured in platform
- [ ] Database connection tested from deployment
- [ ] GitHub API accessible from deployment
- [ ] Salesforce OAuth working from deployment
- [ ] Health check endpoint accessible
- [ ] API endpoints tested from production
- [ ] Frontend can connect to backend

## Testing

### 16. Manual Testing
- [ ] User can log in
- [ ] User can view files
- [ ] User can create drafts
- [ ] User can save drafts
- [ ] User can acquire locks
- [ ] User can publish content (create PR)
- [ ] PR appears in GitHub
- [ ] Lock is released after publish
- [ ] Draft is deleted after publish
- [ ] Audit log records actions

### 17. Error Handling
- [ ] 404 returned for invalid routes
- [ ] 401 returned for unauthenticated requests
- [ ] 403 returned for unauthorized actions
- [ ] 423 returned for locked files
- [ ] 500 handled gracefully with error message
- [ ] Database connection errors handled
- [ ] GitHub API errors handled
- [ ] Validation errors return clear messages

## Documentation

### 18. Documentation Review
- [ ] README.md reviewed
- [ ] QUICK_START.md followed successfully
- [ ] API_EXAMPLES.md examples tested
- [ ] DEPLOYMENT.md reviewed for your platform
- [ ] PROJECT_SUMMARY.md reviewed

## Maintenance

### 19. Setup Maintenance Tasks
- [ ] Database backup schedule configured
- [ ] Log rotation configured
- [ ] Lock cleanup scheduled (automatic)
- [ ] Old session cleanup scheduled
- [ ] Audit log archival planned (optional)
- [ ] Dependency update schedule planned
- [ ] Security audit schedule planned

## Optional Enhancements

### 20. Additional Configuration
- [ ] Redis for session storage (optional)
- [ ] Redis for caching (optional)
- [ ] Rate limiting middleware (optional)
- [ ] Request logging (Morgan, etc.)
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Automated testing (Jest, etc.)
- [ ] CI/CD pipeline configured
- [ ] Staging environment created

## Troubleshooting Reference

### Common Issues

**Database Connection Failed**
- Check PostgreSQL is running: `pg_isready`
- Verify DATABASE_URL format
- Test connection: `psql $DATABASE_URL`

**GitHub API Errors**
- Verify token permissions
- Check rate limits: `curl -H "Authorization: token TOKEN" https://api.github.com/rate_limit`
- Verify repository access

**Salesforce OAuth Errors**
- Verify callback URL matches exactly
- Check client ID and secret
- Verify OAuth scopes in Connected App
- Check Salesforce org URL (login.salesforce.com vs test.salesforce.com)

**Session/Cookie Issues**
- Check SESSION_SECRET is set
- Verify cookie settings (secure, sameSite)
- Check CORS configuration
- Verify frontend and backend domains

**Port Already in Use**
- Change PORT in .env
- Kill existing process: `lsof -ti:4000 | xargs kill`

## Sign-Off

Once all items are checked:

- [ ] All prerequisites met
- [ ] Installation completed successfully
- [ ] Configuration verified
- [ ] Tests passing
- [ ] Documentation reviewed
- [ ] Ready for development/production

**Setup completed by**: ___________________

**Date**: ___________________

**Environment**: [ ] Development  [ ] Staging  [ ] Production

**Notes**:
________________________________
________________________________
________________________________
