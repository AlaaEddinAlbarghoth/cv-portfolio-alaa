#!/bin/bash
set -e

echo "=== CV Portfolio Build Verification ==="
echo ""

echo "1. Checking Node.js version..."
node --version || echo "Node.js not found"

echo ""
echo "2. Checking project structure..."
ls -la app/components/ | wc -l
test -f content/site.json && echo "✓ Content file exists" || echo "✗ Content file missing"
test -f next.config.ts && echo "✓ Next.js config exists" || echo "✗ Config missing"

echo ""
echo "3. Checking dependencies..."
test -d node_modules && echo "✓ Dependencies installed" || echo "✗ Dependencies not installed"

echo ""
echo "4. Build attempt..."
pnpm run build 2>&1 | tail -10 || echo "Build failed - manual intervention needed"

echo ""
echo "=== Build Check Complete ==="
