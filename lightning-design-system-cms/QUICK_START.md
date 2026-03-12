# Quick Start Guide

Get the Lightning Design System CMS backend running in 5 minutes.

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] PostgreSQL 14+ installed and running
- [ ] GitHub Personal Access Token created
- [ ] Salesforce Connected App configured

## 5-Minute Setup

### 1. Install Dependencies (30 seconds)

```bash
npm install
```

### 2. Database Setup (1 minute)

```bash
# Create database
createdb ldss_cms

# Run schema
psql -d ldss_cms -f schema.sql
```

### 3. Configure Environment (2 minutes)

```bash
# Copy example
cp .env.example .env

# Edit with your values
nano .env  # or use your favorite editor
```

**Minimum required values:**

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/ldss_cms
GITHUB_TOKEN=ghp_your_token_here
GITHUB_OWNER=salesforce-ux
GITHUB_REPO=design-system
SESSION_SECRET=generate-random-64-char-string
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
```

### 4. Start Server (30 seconds)

```bash
npm run dev
```

### 5. Verify Installation (30 seconds)

Open in browser or use curl:

```bash
curl http://localhost:4000/health
```

Expected response:

```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00Z",
  "environment": "development"
}
```

## Automated Setup

Use the setup script for guided installation:

```bash
chmod +x scripts/setup-dev.sh
./scripts/setup-dev.sh
```

## Docker Quick Start

Fastest way using Docker Compose:

```bash
# Create .env file
cp .env.example .env

# Edit .env with your credentials
nano .env

# Start everything
docker-compose up -d

# View logs
docker-compose logs -f
```

## First Steps After Setup

### 1. Authenticate with Salesforce

Open in browser:
```
http://localhost:4000/auth/salesforce
```

### 2. Test API Endpoints

```bash
# Get repository info
curl http://localhost:4000/api/github/repo \
  -H "Cookie: connect.sid=YOUR_SESSION_COOKIE"

# List markdown files
curl http://localhost:4000/api/github/files?path=docs \
  -H "Cookie: connect.sid=YOUR_SESSION_COOKIE"
```

### 3. Create Your First Draft

```bash
curl -X PUT http://localhost:4000/api/content/docs/test.md/draft \
  -H "Cookie: connect.sid=YOUR_SESSION_COOKIE" \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# Test Page\n\nThis is my first draft!"}'
```

## Common Issues

### Database Connection Failed

```bash
# Check PostgreSQL is running
pg_isready

# Test connection manually
psql -d ldss_cms -c "SELECT NOW();"
```

### GitHub Token Issues

Ensure your token has these permissions:
- `repo` (full control)
- Check token: https://github.com/settings/tokens

### Salesforce OAuth Issues

Verify callback URL matches exactly:
- In Salesforce Connected App: `http://localhost:4000/auth/salesforce/callback`
- In `.env`: `SALESFORCE_CALLBACK_URL=http://localhost:4000/auth/salesforce/callback`

### Port Already in Use

Change port in `.env`:
```env
PORT=4001
```

## What's Next?

1. Read [README.md](README.md) for full documentation
2. Check [API_EXAMPLES.md](API_EXAMPLES.md) for API usage
3. Review [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
4. Explore the codebase in `src/` directory

## Project Structure

```
lightning-design-system-cms/
├── src/
│   ├── server.ts              # Main Express application
│   ├── types/
│   │   └── index.ts          # TypeScript definitions
│   ├── services/
│   │   ├── github-api.ts     # GitHub API integration
│   │   └── database.ts       # Database queries
│   ├── middleware/
│   │   ├── auth.ts           # Authentication
│   │   └── error.ts          # Error handling
│   └── routes/
│       ├── auth.ts           # Salesforce SSO
│       ├── content.ts        # Content management
│       ├── github.ts         # GitHub operations
│       ├── locks.ts          # File locking
│       └── navigation.ts     # Navigation management
├── scripts/
│   ├── setup-dev.sh          # Development setup
│   └── db-maintenance.sql    # Database maintenance
├── schema.sql                # PostgreSQL schema
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── Dockerfile                # Docker image
├── docker-compose.yml        # Docker setup
└── .env.example              # Environment template
```

## Available Scripts

```bash
npm run dev         # Start development server (with hot reload)
npm run build       # Build TypeScript to JavaScript
npm start           # Start production server
npm run db:setup    # Initialize database
```

## Getting Help

- Check the logs: Look at terminal output
- Enable debug mode: Set `NODE_ENV=development` in `.env`
- Database issues: Run queries in `scripts/db-maintenance.sql`
- GitHub API issues: Check rate limits at https://api.github.com/rate_limit

## Tips for Development

1. **Use TypeScript**: The codebase is fully typed
2. **Check health endpoint**: Always available at `/health`
3. **Monitor audit logs**: Check database for user activity
4. **Clean up locks**: Old locks are auto-cleaned, but you can manually run cleanup
5. **Test with curl**: Examples in `API_EXAMPLES.md`

## Production Checklist

Before deploying to production:

- [ ] Change `SESSION_SECRET` to a strong random value
- [ ] Set `NODE_ENV=production`
- [ ] Use managed PostgreSQL (RDS, Cloud SQL, etc.)
- [ ] Enable HTTPS
- [ ] Set up monitoring (CloudWatch, DataDog, etc.)
- [ ] Configure backups
- [ ] Review security settings in `DEPLOYMENT.md`

## Support

For issues or questions:

1. Check existing documentation
2. Review error logs
3. Test database connectivity
4. Verify environment variables
5. Check GitHub/Salesforce credentials

Happy developing!
