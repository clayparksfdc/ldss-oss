# Lightning Design System CMS Backend

Express.js backend for the Lightning Design System documentation CMS. This service provides authentication, content management, and GitHub integration for editing markdown files.

## Features

- **Salesforce SSO Authentication**: Secure authentication using Salesforce OAuth2
- **GitHub Integration**: Direct integration with GitHub API for content management
- **Draft System**: Save drafts locally before publishing to GitHub
- **File Locking**: Prevent concurrent editing conflicts
- **Pull Request Automation**: Automatically create PRs for content changes
- **Audit Logging**: Track all user actions for compliance
- **PostgreSQL Storage**: Robust database for sessions, drafts, and locks

## Technology Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: Passport.js with Salesforce OAuth2
- **GitHub API**: Octokit
- **Session Store**: connect-pg-simple

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- GitHub Personal Access Token with repo permissions
- Salesforce Connected App credentials

## Installation

### 1. Clone and Install Dependencies

```bash
cd lightning-design-system-cms
npm install
```

### 2. Set Up PostgreSQL Database

Create a new PostgreSQL database:

```bash
createdb ldss_cms
```

Run the schema setup:

```bash
psql -U your_username -d ldss_cms -f schema.sql
```

Or use the npm script:

```bash
npm run db:setup
```

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Server
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000
SESSION_SECRET=generate-a-random-secret-here

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/ldss_cms

# GitHub
GITHUB_TOKEN=ghp_your_github_token
GITHUB_OWNER=salesforce-ux
GITHUB_REPO=design-system

# Salesforce OAuth
SALESFORCE_CLIENT_ID=your_client_id
SALESFORCE_CLIENT_SECRET=your_client_secret
SALESFORCE_CALLBACK_URL=http://localhost:4000/auth/salesforce/callback
SALESFORCE_AUTH_URL=https://login.salesforce.com/services/oauth2/authorize
SALESFORCE_TOKEN_URL=https://login.salesforce.com/services/oauth2/token

# File Locks
LOCK_DURATION_MINUTES=30
```

### 4. GitHub Token Setup

Create a GitHub Personal Access Token:

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token with `repo` scope
3. Copy the token to `GITHUB_TOKEN` in `.env`

### 5. Salesforce Connected App Setup

Create a Salesforce Connected App:

1. In Salesforce Setup, search for "App Manager"
2. Create a new Connected App
3. Enable OAuth Settings
4. Set callback URL to `http://localhost:4000/auth/salesforce/callback`
5. Add OAuth scopes: `openid`, `email`, `profile`
6. Copy Client ID and Client Secret to `.env`

## Running the Server

### Development Mode

```bash
npm run dev
```

This uses `ts-node` for hot reloading during development.

### Production Build

```bash
npm run build
npm start
```

## API Documentation

### Authentication Endpoints

#### `GET /auth/salesforce`
Initiate Salesforce OAuth flow.

#### `GET /auth/salesforce/callback`
OAuth callback endpoint (handled by Salesforce).

#### `GET /auth/user`
Get current authenticated user.

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "email": "user@salesforce.com",
    "name": "John Doe",
    "role": "editor"
  }
}
```

#### `POST /auth/logout`
Logout and destroy session.

### Content Endpoints

#### `GET /api/content/:path*`
Get markdown file from GitHub with draft and lock info.

**Response:**
```json
{
  "success": true,
  "data": {
    "content": "# Page Title\n\nContent...",
    "sha": "abc123",
    "draft": {
      "id": 1,
      "markdown": "# Draft content",
      "updated_at": "2024-01-01T00:00:00Z"
    },
    "lock": {
      "user": {
        "name": "Jane Doe",
        "email": "jane@salesforce.com"
      },
      "expires_at": "2024-01-01T01:00:00Z"
    }
  }
}
```

#### `PUT /api/content/:path*/draft`
Save draft without publishing.

**Request:**
```json
{
  "markdown": "# Updated content"
}
```

#### `DELETE /api/content/:path*/draft`
Delete user's draft for a file.

#### `GET /api/content/drafts/list`
Get all drafts for current user.

### GitHub Endpoints

#### `POST /api/github/publish/:path*`
Create a pull request with content changes.

**Request:**
```json
{
  "markdown": "# Updated content",
  "commitMessage": "Update documentation"
}
```

**Response:**
```json
{
  "success": true,
  "pr_url": "https://github.com/owner/repo/pull/123",
  "pr_number": 123
}
```

#### `POST /api/github/publish-batch`
Create a pull request with multiple file changes.

**Request:**
```json
{
  "files": [
    {
      "path": "docs/page1.md",
      "content": "# Content 1"
    },
    {
      "path": "docs/page2.md",
      "content": "# Content 2"
    }
  ],
  "title": "Batch update",
  "description": "Update multiple pages"
}
```

#### `GET /api/github/files?path=docs`
List markdown files in repository.

#### `GET /api/github/search?query=button`
Search for markdown files.

#### `GET /api/github/repo`
Get repository information.

### Lock Endpoints

#### `GET /api/locks/:path*`
Check if a file is locked.

#### `POST /api/locks/:path*`
Acquire a lock on a file (or extend existing lock).

#### `DELETE /api/locks/:path*`
Release a lock on a file.

#### `GET /api/locks`
Get all active locks.

### Navigation Endpoints

#### `GET /api/navigation`
Get navigation structure from GitHub.

#### `PUT /api/navigation`
Update navigation structure (creates PR).

**Request:**
```json
{
  "navigation": {
    "items": [
      {
        "title": "Getting Started",
        "path": "/docs/getting-started.md"
      }
    ]
  }
}
```

#### `GET /api/navigation/tree?path=docs`
Get file tree structure for navigation building.

### Audit Endpoints

#### `GET /api/audit?limit=50&offset=0`
Get audit log entries.

### Health Check

#### `GET /health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00Z",
  "environment": "development"
}
```

## Database Schema

### Users Table
Stores user information from Salesforce SSO.

### Session Table
Express session storage (managed by connect-pg-simple).

### Drafts Table
Stores draft content before publishing to GitHub.

### File Locks Table
Prevents concurrent editing of the same file.

### Audit Log Table
Tracks all user actions for compliance and debugging.

## Security Features

- Helmet.js for security headers
- CORS protection
- Session-based authentication
- HTTP-only secure cookies
- Role-based access control (admin, editor, viewer)
- File lock mechanism

## User Roles

- **admin**: Full access, can manage users
- **editor**: Can edit and publish content
- **viewer**: Read-only access

## Development

### Project Structure

```
src/
├── server.ts              # Main Express application
├── types/
│   └── index.ts          # TypeScript type definitions
├── services/
│   └── github-api.ts     # GitHub API service
├── middleware/
│   ├── auth.ts           # Authentication middleware
│   └── error.ts          # Error handling
├── routes/
│   ├── auth.ts           # Authentication routes
│   ├── content.ts        # Content management routes
│   ├── github.ts         # GitHub integration routes
│   ├── navigation.ts     # Navigation management routes
│   └── locks.ts          # File lock routes
```

### TypeScript

The project uses strict TypeScript configuration. Run type checking:

```bash
npx tsc --noEmit
```

## Deployment

### Environment Variables for Production

Update `.env` for production:

- Set `NODE_ENV=production`
- Use a strong `SESSION_SECRET`
- Update `FRONTEND_URL` to production domain
- Use SSL-enabled PostgreSQL connection
- Enable secure cookies

### Build and Run

```bash
npm run build
NODE_ENV=production npm start
```

## Maintenance

### Clean Up Expired Locks

Expired locks are automatically cleaned up when lock endpoints are called. You can also run:

```sql
SELECT cleanup_expired_locks();
```

### View Audit Logs

```sql
SELECT * FROM audit_log ORDER BY created_at DESC LIMIT 100;
```

## Troubleshooting

### Database Connection Issues

Check your `DATABASE_URL` format:
```
postgresql://username:password@localhost:5432/database_name
```

### GitHub API Rate Limits

GitHub API has rate limits. Use an authenticated token with higher limits.

### Session Issues

If sessions aren't persisting, check:
- PostgreSQL connection is working
- `session` table exists
- Cookie settings match your domain setup

## License

ISC

## Support

For issues and questions, please contact the Lightning Design System team.
