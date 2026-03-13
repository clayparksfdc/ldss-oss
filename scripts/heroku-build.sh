#!/usr/bin/env bash
set -euo pipefail

# Save and unset NODE_ENV so npm installs devDependencies needed for building
SAVED_NODE_ENV="${NODE_ENV:-}"
unset NODE_ENV

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms

  echo "  -> Installing CMS server dependencies..."
  npm install

  echo "  -> Building CMS server (TypeScript)..."
  npm run build

  echo "  -> Installing CMS client dependencies..."
  cd client
  npm install
  echo "  -> Building CMS client (Vite)..."
  npm run build
  cd ..

  echo "  -> Pruning devDependencies for production..."
  NODE_ENV=production npm prune

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system

  echo "  -> Installing frontend dependencies..."
  npm install

  echo "  -> Building Next.js..."
  npm run build

  echo "  -> Pruning devDependencies for production..."
  NODE_ENV=production npm prune

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi

# Restore NODE_ENV
export NODE_ENV="${SAVED_NODE_ENV}"
