#!/usr/bin/env bash
set -eo pipefail

echo "DEBUG: NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=${NPM_CONFIG_PRODUCTION:-unset}"

if [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "cms" ]; then
  echo "==> Building CMS (Express + Vite client)..."

  cd lightning-design-system-cms
  echo "DEBUG: CMS package.json deps:"
  node -e "const p=require('./package.json'); console.log('typescript in deps:', !!p.dependencies?.typescript); console.log('typescript in devDeps:', !!p.devDependencies?.typescript)"

  echo "  -> Installing CMS server dependencies..."
  npm install 2>&1 || true
  echo "DEBUG: node_modules/.bin contents:"
  ls node_modules/.bin/tsc* 2>/dev/null || echo "  tsc binary NOT in node_modules/.bin"
  ls node_modules/typescript/bin/tsc 2>/dev/null || echo "  typescript package NOT installed"

  echo "  -> Building CMS server (TypeScript)..."
  npm run build

  echo "  -> Installing and building CMS client..."
  cd client
  npm install 2>&1 || true
  npm run build
  cd ..

  echo "==> CMS build complete."

elif [ "${APP_TYPE:-${HEROKU_APP_TYPE:-}}" = "frontend" ]; then
  echo "==> Building Frontend (Next.js)..."

  cd lightning-design-system
  echo "  -> Installing frontend dependencies..."
  npm install 2>&1 || true
  echo "DEBUG: next binary:"
  ls node_modules/.bin/next 2>/dev/null || echo "  next NOT in node_modules/.bin"

  echo "  -> Building Next.js..."
  npm run build

  echo "==> Frontend build complete."

else
  echo "ERROR: APP_TYPE env var not set. Set it to 'frontend' or 'cms'."
  exit 1
fi
