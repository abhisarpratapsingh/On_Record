#!/usr/bin/env bash
# Deploy the On Record frontend to the linked Vercel project.
#
# Requires a one-time `vercel login`. The project is already linked through
# .vercel/project.json, so no interactive prompts are needed here.
#
#   bash scripts/deploy-vercel.sh
set -uo pipefail
cd "$(dirname "$0")/.."

TMP=".vercel/tmp"
mkdir -p "$TMP"

echo "==> deploying to production"
# --yes accepts the linked project; --prod publishes to the production domain,
# so no `vercel alias` step is needed unless a custom domain is in play.
npx --yes vercel@latest deploy --prod --yes >"$TMP/deployment-url.txt" 2>"$TMP/error.txt"
code=$?

if [ $code -eq 0 ]; then
    # This CLI emits a JSON envelope on stdout, not a bare URL.
    # deployment.url already carries the protocol on this CLI version.
    deploymentUrl=$(node -p "new URL(JSON.parse(require('fs').readFileSync('$TMP/deployment-url.txt','utf8')).deployment.url).origin")
    echo "==> deployed: $deploymentUrl"

    # Verify the build is byte-identical to the local reference build. Vite names
    # assets by content hash, so a matching filename proves the deployed source
    # and the local source are the same.
    expected=$(grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' dist/index.html | head -1)
    actual=$(curl -s --max-time 30 "$deploymentUrl/" \
             | grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' | head -1)
    echo "    local build : ${expected:-<none>}"
    echo "    deployed    : ${actual:-<none>}"
    prod=$(curl -s --max-time 30 https://on-record-livid.vercel.app/            | grep -oE 'assets/index-[A-Za-z0-9_-]+\.js' | head -1)
    echo "    production  : ${prod:-<none>}  (on-record-livid.vercel.app)"
    if [ -n "$prod" ] && [ "$expected" = "$prod" ]; then
        echo "    MATCH - deployed bundle is identical to the local build"
    else
        echo "    NO MATCH - inspect the build before sharing the link"
    fi
else
    echo "==> deploy failed (exit $code)"
    cat "$TMP/error.txt"
fi
exit $code
