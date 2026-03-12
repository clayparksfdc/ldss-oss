# API Examples

This document provides cURL examples for all API endpoints.

## Setup

Set your base URL and get authenticated:

```bash
# Set base URL
export BASE_URL="http://localhost:4000"

# After authentication, cookies will be automatically handled by curl with -c/-b flags
```

## Authentication

### Initiate Salesforce Login

```bash
# Open in browser
open ${BASE_URL}/auth/salesforce
```

### Get Current User

```bash
curl -X GET ${BASE_URL}/auth/user \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Logout

```bash
curl -X POST ${BASE_URL}/auth/logout \
  -b cookies.txt \
  -c cookies.txt \
  -H "Content-Type: application/json"
```

## Content Management

### Get File Content

```bash
curl -X GET ${BASE_URL}/api/content/docs/getting-started.md \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Save Draft

```bash
curl -X PUT ${BASE_URL}/api/content/docs/getting-started.md/draft \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# Getting Started\n\nThis is a draft update."
  }'
```

### Delete Draft

```bash
curl -X DELETE ${BASE_URL}/api/content/docs/getting-started.md/draft \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### List All Drafts

```bash
curl -X GET ${BASE_URL}/api/content/drafts/list \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

## GitHub Operations

### Publish Content (Create PR)

```bash
curl -X POST ${BASE_URL}/api/github/publish/docs/getting-started.md \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# Getting Started\n\nUpdated content for the getting started guide.",
    "commitMessage": "Update getting started documentation"
  }'
```

### Batch Publish (Multiple Files)

```bash
curl -X POST ${BASE_URL}/api/github/publish-batch \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "files": [
      {
        "path": "docs/page1.md",
        "content": "# Page 1\n\nContent for page 1"
      },
      {
        "path": "docs/page2.md",
        "content": "# Page 2\n\nContent for page 2"
      }
    ],
    "title": "Update multiple documentation pages",
    "description": "Updated pages 1 and 2 with latest information"
  }'
```

### List Files

```bash
curl -X GET "${BASE_URL}/api/github/files?path=docs" \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Search Files

```bash
curl -X GET "${BASE_URL}/api/github/search?query=button" \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Get Repository Info

```bash
curl -X GET ${BASE_URL}/api/github/repo \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

## File Locks

### Check Lock Status

```bash
curl -X GET ${BASE_URL}/api/locks/docs/getting-started.md \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Acquire Lock

```bash
curl -X POST ${BASE_URL}/api/locks/docs/getting-started.md \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Release Lock

```bash
curl -X DELETE ${BASE_URL}/api/locks/docs/getting-started.md \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### List All Active Locks

```bash
curl -X GET ${BASE_URL}/api/locks \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

## Navigation

### Get Navigation

```bash
curl -X GET ${BASE_URL}/api/navigation \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

### Update Navigation

```bash
curl -X PUT ${BASE_URL}/api/navigation \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "navigation": {
      "items": [
        {
          "title": "Getting Started",
          "path": "/docs/getting-started.md",
          "children": []
        },
        {
          "title": "Components",
          "path": "/docs/components",
          "children": [
            {
              "title": "Button",
              "path": "/docs/components/button.md"
            }
          ]
        }
      ]
    }
  }'
```

### Get File Tree

```bash
curl -X GET "${BASE_URL}/api/navigation/tree?path=docs" \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

## Audit Logs

### Get Audit Logs

```bash
curl -X GET "${BASE_URL}/api/audit?limit=50&offset=0" \
  -b cookies.txt \
  -H "Content-Type: application/json"
```

## Health Check

### Check Server Health

```bash
curl -X GET ${BASE_URL}/health
```

## Example Workflows

### Complete Edit Workflow

```bash
# 1. Get the file content
curl -X GET ${BASE_URL}/api/content/docs/example.md \
  -b cookies.txt \
  -H "Content-Type: application/json"

# 2. Acquire a lock
curl -X POST ${BASE_URL}/api/locks/docs/example.md \
  -b cookies.txt \
  -H "Content-Type: application/json"

# 3. Save drafts as you edit
curl -X PUT ${BASE_URL}/api/content/docs/example.md/draft \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# Example\n\nWork in progress..."
  }'

# 4. Publish when ready (creates PR and releases lock)
curl -X POST ${BASE_URL}/api/github/publish/docs/example.md \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# Example\n\nFinal content ready for review.",
    "commitMessage": "Update example documentation"
  }'
```

### Multi-File Edit Workflow

```bash
# 1. Acquire locks on all files
curl -X POST ${BASE_URL}/api/locks/docs/page1.md -b cookies.txt
curl -X POST ${BASE_URL}/api/locks/docs/page2.md -b cookies.txt

# 2. Edit and save drafts
curl -X PUT ${BASE_URL}/api/content/docs/page1.md/draft \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# Page 1 content"}'

curl -X PUT ${BASE_URL}/api/content/docs/page2.md/draft \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# Page 2 content"}'

# 3. Batch publish all changes
curl -X POST ${BASE_URL}/api/github/publish-batch \
  -b cookies.txt \
  -H "Content-Type: application/json" \
  -d '{
    "files": [
      {"path": "docs/page1.md", "content": "# Page 1\n\nFinal content"},
      {"path": "docs/page2.md", "content": "# Page 2\n\nFinal content"}
    ],
    "title": "Update documentation pages",
    "description": "Coordinated update to multiple pages"
  }'
```

## Error Responses

All endpoints return consistent error format:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "statusCode": 400
  }
}
```

Common status codes:

- `400` - Bad Request (validation error)
- `401` - Unauthorized (not authenticated)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (e.g., branch already exists)
- `423` - Locked (file is locked by another user)
- `500` - Internal Server Error

## Testing with Postman

You can import these examples into Postman:

1. Create environment with `BASE_URL` variable
2. Use Postman's cookie management for sessions
3. Start with authentication flow
4. Use collections for organized testing

## Rate Limiting

Be aware of GitHub API rate limits:

- Authenticated requests: 5,000 per hour
- Check headers: `X-RateLimit-Remaining`, `X-RateLimit-Reset`
