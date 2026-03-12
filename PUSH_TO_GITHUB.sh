#!/bin/bash

# Quick script to push both repos to GitHub
# Usage: ./PUSH_TO_GITHUB.sh YOUR_GITHUB_USERNAME

if [ -z "$1" ]; then
    echo "❌ Error: GitHub username required"
    echo ""
    echo "Usage: ./PUSH_TO_GITHUB.sh YOUR_GITHUB_USERNAME"
    echo ""
    echo "Example: ./PUSH_TO_GITHUB.sh claypark"
    exit 1
fi

GITHUB_USER=$1
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo "🚀 Pushing Lightning Design System to GitHub"
echo ""
echo "GitHub Username: $GITHUB_USER"
echo ""
echo "⚠️  IMPORTANT: Make sure you've created these repositories on GitHub first:"
echo "   - https://github.com/$GITHUB_USER/lightning-design-system"
echo "   - https://github.com/$GITHUB_USER/lightning-design-system-cms"
echo ""
read -p "Have you created both repositories? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Please create the repositories first, then run this script again."
    exit 1
fi

# Frontend
echo ""
echo -e "${BLUE}📤 Pushing Frontend...${NC}"
cd lightning-design-system

# Check if remote exists
if git remote | grep -q origin; then
    echo "Remote 'origin' already exists, updating..."
    git remote set-url origin https://github.com/$GITHUB_USER/lightning-design-system.git
else
    git remote add origin https://github.com/$GITHUB_USER/lightning-design-system.git
fi

git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend pushed successfully!${NC}"
    echo "   View at: https://github.com/$GITHUB_USER/lightning-design-system"
else
    echo -e "${RED}❌ Frontend push failed${NC}"
    exit 1
fi

# Backend
echo ""
echo -e "${BLUE}📤 Pushing Backend...${NC}"
cd ../lightning-design-system-cms

# Check if remote exists
if git remote | grep -q origin; then
    echo "Remote 'origin' already exists, updating..."
    git remote set-url origin https://github.com/$GITHUB_USER/lightning-design-system-cms.git
else
    git remote add origin https://github.com/$GITHUB_USER/lightning-design-system-cms.git
fi

git push -u origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend pushed successfully!${NC}"
    echo "   View at: https://github.com/$GITHUB_USER/lightning-design-system-cms"
else
    echo -e "${RED}❌ Backend push failed${NC}"
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}🎉 Both repositories pushed to GitHub!${NC}"
echo ""
echo "Frontend: https://github.com/$GITHUB_USER/lightning-design-system"
echo "Backend:  https://github.com/$GITHUB_USER/lightning-design-system-cms"
echo ""
echo "Next steps:"
echo "1. Deploy frontend to Vercel (auto-detects Next.js)"
echo "2. Deploy backend to Heroku"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
