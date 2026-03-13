#!/usr/bin/env bash
set -euo pipefail

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms

  echo "  -> Installing CMS server dependencies..."
  NODE_ENV=development npm install --production=false

  echo "  -> Building CMS server (TypeScript)..."
  ./node_modules/.bin/tsc

  echo "  -> Installing CMS client dependencies..."
  cd client
  NODE_ENV=development npm install --production=false
  echo "  -> Building CMS client (Vite)..."
  ./node_modules/.bin/tsc -b && ./node_modules/.bin/vite build
  cd ..

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system

  echo "  -> Installing frontend dependencies..."
  NODE_ENV=development npm install --production=false

  echo "  -> Building Next.js..."
  NODE_ENV=production ./node_modules/.bin/next build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
