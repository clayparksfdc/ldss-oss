#!/usr/bin/env bash
set -euo pipefail

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms

  echo "  -> Installing CMS server dependencies (including devDependencies for build)..."
  npm install --include=dev

  echo "  -> Building CMS server (TypeScript)..."
  npx tsc

  echo "  -> Installing CMS client dependencies..."
  cd client
  npm install --include=dev
  echo "  -> Building CMS client (Vite)..."
  npx vite build
  cd ..

  echo "  -> Pruning devDependencies..."
  npm prune --omit=dev

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system

  echo "  -> Installing frontend dependencies (including devDependencies for build)..."
  npm install --include=dev

  echo "  -> Building Next.js..."
  npx next build

  echo "  -> Pruning devDependencies..."
  npm prune --omit=dev

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
