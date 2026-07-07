#!/usr/bin/env bash
# design-sync build prep for weiwei-zipper-web (run from the repo root).
# This repo is a Next.js app, not a packaged library, so the converter needs a
# stand-in installed package: a stub dir at node_modules/weiwei-zipper-web
# holding the real package.json plus symlinks into the repo (a plain self-link
# recurses infinitely and crashes the ts-morph scan). cssEntry is bounded to
# the stub dir's realpath, so the compiled Tailwind CSS is written inside it.
set -euo pipefail

STUB=node_modules/weiwei-zipper-web
mkdir -p "$STUB"
cp package.json "$STUB/package.json"
ln -sfn ../../src "$STUB/src"
ln -sfn ../../tsconfig.json "$STUB/tsconfig.json"
ln -sfn ../../.design-sync "$STUB/.design-sync"
cp .design-sync/ds-entry.ts "$STUB/ds-entry.ts"

npx -y @tailwindcss/cli@4 -i src/app/globals.css -o "$STUB/ds-tailwind.css" --minify
