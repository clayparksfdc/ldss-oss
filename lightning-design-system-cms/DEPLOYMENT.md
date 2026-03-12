# Deployment Guide

This guide covers deploying the Lightning Design System CMS backend to various environments.

## Table of Contents

- [Local Development](#local-development)
- [Docker Deployment](#docker-deployment)
- [Cloud Deployment](#cloud-deployment)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Monitoring](#monitoring)

## Local Development

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- GitHub Personal Access Token
- Salesforce Connected App

### Steps

1. Install dependencies:
```bash
npm install
```

2. Set up PostgreSQL:
```bash
createdb ldss_cms
psql -d ldss_cms -f schema.sql
```

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your values
```

4. Run development server:
```bash
npm run dev
```

Server will be available at `http://localhost:4000`

## Docker Deployment

### Using Docker Compose (Recommended)

1. Create `.env` file with required variables:
```bash
SESSION_SECRET=your-secret-key
FRONTEND_URL=http://localhost:3000
GITHUB_TOKEN=ghp_your_token
GITHUB_OWNER=salesforce-ux
GITHUB_REPO=design-system
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
SALESFORCE_CALLBACK_URL=http://localhost:4000/auth/salesforce/callback
SALESFORCE_AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
SALESFORCE_TOKEN_URL=https://login.salesforce.com/services/oauth2/token
```

2. Start services:
```bash
docker-compose up -d
```

3. Check logs:
```bash
docker-compose logs -f cms-backend
```

4. Stop services:
```bash
docker-compose down
```

### Manual Docker Build

Build image:
```bash
docker build -t ldss-cms:latest .
```

Run container:
```bash
docker run -d \
  --name ldss-cms \
  -p 4000:4000 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/db \
  -e GITHUB_TOKEN=ghp_token \
  -e SESSION_SECRET=secret \
  ldss-cms:latest
```

## Cloud Deployment

### AWS (Elastic Beanstalk)

1. Install EB CLI:
```bash
pip install awsebcli
```

2. Initialize EB application:
```bash
eb init -p node.js-18 ldss-cms
```

3. Create environment:
```bash
eb create ldss-cms-prod
```

4. Set environment variables:
```bash
eb setenv \
  NODE_ENV=production \
  DATABASE_URL=postgresql://... \
  GITHUB_TOKEN=ghp_... \
  SESSION_SECRET=... \
  SALESFORCE_CLIENT_ID=... \
  SALESFORCE_CLIENT_SECRET=...
```

5. Deploy:
```bash
eb deploy
```

### AWS (ECS with Fargate)

1. Create ECR repository:
```bash
aws ecr create-repository --repository-name ldss-cms
```

2. Build and push image:
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t ldss-cms .
docker tag ldss-cms:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/ldss-cms:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/ldss-cms:latest
```

3. Create task definition with environment variables
4. Create ECS service with Fargate launch type
5. Configure ALB for load balancing

### Heroku

1. Install Heroku CLI
2. Create app:
```bash
heroku create ldss-cms
```

3. Add PostgreSQL:
```bash
heroku addons:create heroku-postgresql:standard-0
```

4. Set environment variables:
```bash
heroku config:set \
  SESSION_SECRET=... \
  GITHUB_TOKEN=... \
  GITHUB_OWNER=... \
  GITHUB_REPO=... \
  SALESFORCE_CLIENT_ID=... \
  SALESFORCE_CLIENT_SECRET=... \
  SALESFORCE_CALLBACK_URL=https://ldss-cms.herokuapp.com/auth/salesforce/callback
```

5. Deploy:
```bash
git push heroku main
```

6. Run migrations:
```bash
heroku pg:psql < schema.sql
```

### Google Cloud Platform (Cloud Run)

1. Build and push to Container Registry:
```bash
gcloud builds submit --tag gcr.io/PROJECT_ID/ldss-cms
```

2. Deploy to Cloud Run:
```bash
gcloud run deploy ldss-cms \
  --image gcr.io/PROJECT_ID/ldss-cms \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars "NODE_ENV=production,DATABASE_URL=...,GITHUB_TOKEN=..."
```

3. Set up Cloud SQL for PostgreSQL

### Azure (App Service)

1. Create App Service:
```bash
az webapp create \
  --resource-group ldss-cms \
  --plan ldss-cms-plan \
  --name ldss-cms \
  --runtime "NODE:18-lts"
```

2. Configure deployment:
```bash
az webapp deployment source config-zip \
  --resource-group ldss-cms \
  --name ldss-cms \
  --src deploy.zip
```

3. Set environment variables:
```bash
az webapp config appsettings set \
  --resource-group ldss-cms \
  --name ldss-cms \
  --settings \
    NODE_ENV=production \
    DATABASE_URL=... \
    GITHUB_TOKEN=...
```

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `4000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `SESSION_SECRET` | Session encryption key | Random 64-character string |
| `FRONTEND_URL` | Frontend application URL | `https://design-system.salesforce.com` |
| `GITHUB_TOKEN` | GitHub Personal Access Token | `ghp_...` |
| `GITHUB_OWNER` | GitHub repository owner | `salesforce-ux` |
| `GITHUB_REPO` | GitHub repository name | `design-system` |
| `SALESFORCE_CLIENT_ID` | Salesforce Connected App ID | `3MVG9...` |
| `SALESFORCE_CLIENT_SECRET` | Salesforce Connected App Secret | `123456...` |
| `SALESFORCE_CALLBACK_URL` | OAuth callback URL | `https://cms.example.com/auth/salesforce/callback` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `LOCK_DURATION_MINUTES` | File lock duration | `30` |
| `SALESFORCE_AUTH_URL` | Salesforce OAuth auth endpoint | `https://login.salesforce.com/services/oauth2/authorize` |
| `SALESFORCE_TOKEN_URL` | Salesforce OAuth token endpoint | `https://login.salesforce.com/services/oauth2/token` |

## Database Setup

### PostgreSQL Configuration

For production, use managed PostgreSQL services:

- **AWS RDS**: Automated backups, multi-AZ
- **Google Cloud SQL**: High availability, automatic failover
- **Azure Database for PostgreSQL**: Built-in security
- **Heroku Postgres**: Simple setup, good for small apps

### Connection Pooling

The application uses `pg` Pool with default settings. For high-traffic production:

```javascript
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Maximum pool size
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### Database Backups

Set up automated backups:

```bash
# Manual backup
pg_dump -U postgres ldss_cms > backup.sql

# Restore
psql -U postgres ldss_cms < backup.sql

# Automated daily backups (cron)
0 2 * * * pg_dump -U postgres ldss_cms > /backups/ldss_cms_$(date +\%Y\%m\%d).sql
```

## SSL/TLS Configuration

For production, always use HTTPS:

1. Obtain SSL certificate (Let's Encrypt, AWS ACM, etc.)
2. Configure reverse proxy (nginx, ALB, Cloud Load Balancer)
3. Update cookie settings:

```javascript
cookie: {
  secure: true, // Require HTTPS
  sameSite: 'none', // For cross-origin
}
```

## Monitoring

### Health Check Endpoint

```bash
curl https://your-domain.com/health
```

Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00Z",
  "environment": "production"
}
```

### Application Logs

Use structured logging in production:

```javascript
console.log(JSON.stringify({
  level: 'info',
  timestamp: new Date().toISOString(),
  message: 'Request processed',
  userId: req.user?.id,
  path: req.path,
}));
```

### Monitoring Services

- **DataDog**: APM and infrastructure monitoring
- **New Relic**: Application performance monitoring
- **Sentry**: Error tracking and alerting
- **CloudWatch**: AWS native monitoring
- **Stackdriver**: GCP native monitoring

### Key Metrics

Monitor these metrics:

- Request rate and response time
- Error rate (4xx, 5xx)
- Database connection pool usage
- Memory and CPU usage
- GitHub API rate limit remaining

### Alerts

Set up alerts for:

- Server downtime (health check fails)
- High error rate (>5% 5xx responses)
- Database connection issues
- GitHub API rate limit exhausted
- High memory/CPU usage (>80%)

## Security Checklist

- [ ] Use HTTPS in production
- [ ] Set strong SESSION_SECRET (64+ random characters)
- [ ] Enable CORS only for trusted domains
- [ ] Use environment variables for secrets
- [ ] Enable database SSL connections
- [ ] Set up rate limiting
- [ ] Enable security headers (helmet.js)
- [ ] Regular dependency updates (`npm audit`)
- [ ] Restrict database access by IP
- [ ] Use managed secrets (AWS Secrets Manager, etc.)
- [ ] Enable audit logging
- [ ] Regular security audits

## Scaling

### Horizontal Scaling

The application is stateless (sessions in PostgreSQL), so you can run multiple instances:

1. Deploy multiple containers/instances
2. Use load balancer (ALB, nginx, etc.)
3. Share PostgreSQL database
4. Session store handles concurrent sessions

### Database Scaling

- Read replicas for read-heavy operations
- Connection pooling (pgBouncer)
- Vertical scaling (larger instance)
- Partitioning for large audit logs

### Caching

Consider adding Redis for:

- Session store (instead of PostgreSQL)
- GitHub API response caching
- Rate limiting counters

## Troubleshooting

### Database Connection Issues

```bash
# Test connection
psql $DATABASE_URL

# Check pool status
SELECT count(*) FROM pg_stat_activity;
```

### Session Issues

```bash
# Check sessions table
SELECT count(*) FROM session;

# Clear old sessions
DELETE FROM session WHERE expire < CURRENT_TIMESTAMP;
```

### GitHub API Rate Limits

```bash
# Check rate limit
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/rate_limit
```

### Lock Cleanup

```sql
-- Remove expired locks
DELETE FROM file_locks WHERE expires_at < CURRENT_TIMESTAMP;

-- Remove all locks (emergency)
TRUNCATE file_locks;
```

## Rollback Procedure

If deployment fails:

1. Stop new version
2. Route traffic to previous version
3. Restore database from backup if needed
4. Investigate logs
5. Fix issues and redeploy

## Support

For deployment issues:

1. Check application logs
2. Verify environment variables
3. Test database connectivity
4. Check GitHub token permissions
5. Verify Salesforce OAuth configuration
6. Review audit logs for errors
