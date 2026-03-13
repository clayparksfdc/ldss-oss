#!/usr/bin/env bash
set -euo pipefail

export NPM_CONFIG_PRODUCTION=false

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms

  echo "  -> Installing CMS server dependencies..."
  npm install
  echo "  -> Installed: $(ls node_modules/.bin/tsc 2>/dev/null && echo 'tsc found' || echo 'tsc NOT found')"

  echo "  -> Building CMS server (TypeScript)..."
  npm run build

  echo "  -> Installing CMS client dependencies..."
  cd client
  npm install
  echo "  -> Building CMS client (Vite)..."
  npm run build
  cd ..

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system

  echo "  -> Installing frontend dependencies..."
  npm install
  echo "  -> Installed: $(ls node_modules/.bin/next 2>/dev/null && echo 'next found' || echo 'next NOT found')"

  echo "  -> Building Next.js..."
  npm run build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
