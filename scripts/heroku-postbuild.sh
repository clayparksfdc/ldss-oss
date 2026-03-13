#!/usr/bin/env bash
set -eo pipefail

echo "==> Building CMS server (TypeScript)..."
./node_modules/.bin/tsc

echo "==> Installing CMS client dependencies..."
cd client
npm install --legacy-peer-deps

echo "==> Building CMS client (Vite)..."
./node_modules/.bin/tsc -b
./node_modules/.bin/vite build

echo "==> Build complete."
