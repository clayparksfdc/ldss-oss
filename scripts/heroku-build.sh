#!/usr/bin/env bash
set -eo pipefail

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms
  echo "  -> Installing CMS server dependencies..."
  npm ci
  echo "  -> Building CMS server (TypeScript)..."
  npm run build

  echo "  -> Installing CMS client dependencies..."
  cd client
  npm ci
  echo "  -> Building CMS client (Vite)..."
  npm run build
  cd ..

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system
  echo "  -> Installing frontend dependencies..."
  npm ci
  echo "  -> Building Next.js..."
  npm run build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
