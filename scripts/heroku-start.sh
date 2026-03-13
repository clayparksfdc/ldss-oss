#!/usr/bin/env bash
set -euo pipefail

if [ "${HEROKU_APP_TYPE:-}" = "cms" ]; then
  echo "Starting CMS server..."
  cd lightning-design-system-cms
  exec node dist/server.js

elif [ "${HEROKU_APP_TYPE:-}" = "frontend" ]; then
  echo "Starting Next.js frontend..."
  cd lightning-design-system
  exec npx next start -p "${PORT:-3000}"

else
  echo "ERROR: HEROKU_APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
