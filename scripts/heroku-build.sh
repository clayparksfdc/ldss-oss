#!/usr/bin/env bash
set -euo pipefail

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms
  npm install
  npm run build

  cd client
  npm install
  npm run build
  cd ..

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system
  npm install
  npm run build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
