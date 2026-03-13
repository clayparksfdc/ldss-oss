#!/usr/bin/env bash
set -eo pipefail

echo "==> Building frontend (Next.js static export)..."
(cd frontend && npm install && npm run build)

echo "==> Building CMS server (TypeScript)..."
./node_modules/.bin/tsc

echo "==> CMS client assets are pre-built (public/editor/)"
echo "==> Build complete."
