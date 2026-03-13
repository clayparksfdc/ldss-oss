#!/usr/bin/env bash
set -eo pipefail

echo "==> Building CMS server (TypeScript)..."
./node_modules/.bin/tsc

echo "==> CMS client assets are pre-built (public/editor/)"
echo "==> Build complete."
