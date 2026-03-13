#!/usr/bin/env bash
set -eo pipefail

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  echo "  -> Installing CMS server dependencies..."
  npm --prefix lightning-design-system-cms ci

  echo "  -> Building CMS server (TypeScript)..."
  npm --prefix lightning-design-system-cms run build

  echo "  -> Installing CMS client dependencies..."
  npm --prefix lightning-design-system-cms/client ci

  echo "  -> Building CMS client (Vite)..."
  npm --prefix lightning-design-system-cms/client run build

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  echo "  -> Installing frontend dependencies..."
  npm --prefix lightning-design-system ci

  echo "  -> Building Next.js..."
  npm --prefix lightning-design-system run build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
