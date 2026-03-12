#!/bin/bash

# Lightning Design System - Development Startup Script

echo "🚀 Starting Lightning Design System Development Environment"
echo ""
echo "This will start:"
echo "  - Frontend (Next.js) on http://localhost:3000"
echo "  - CMS Backend (Express.js) on http://localhost:4000"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Frontend
echo -e "${BLUE}Starting Frontend...${NC}"
cd "$SCRIPT_DIR/lightning-design-system"
npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}✓ Frontend started (PID: $FRONTEND_PID)${NC}"
echo ""

# Wait a moment
sleep 2

# Backend (with Docker)
echo -e "${BLUE}Starting CMS Backend with Docker...${NC}"
cd "$SCRIPT_DIR/lightning-design-system-cms"

# Check if docker-compose is available
if command -v docker-compose &> /dev/null; then
    docker-compose up -d
    BACKEND_STATUS=$?
    if [ $BACKEND_STATUS -eq 0 ]; then
        echo -e "${GREEN}✓ CMS Backend started with Docker${NC}"
    else
        echo "⚠️  Docker startup failed, trying manual start..."
        npm run dev &
        BACKEND_PID=$!
        echo -e "${GREEN}✓ CMS Backend started manually (PID: $BACKEND_PID)${NC}"
    fi
else
    echo "⚠️  Docker not found, starting manually..."
    npm run dev &
    BACKEND_PID=$!
    echo -e "${GREEN}✓ CMS Backend started (PID: $BACKEND_PID)${NC}"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✅ Development environment is ready!${NC}"
echo ""
echo "Frontend:    http://localhost:3000"
echo "CMS Backend: http://localhost:4000"
echo "CMS Health:  http://localhost:4000/health"
echo ""
echo "Press Ctrl+C to stop all services"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Keep script running and handle Ctrl+C
trap "echo ''; echo 'Stopping services...'; kill $FRONTEND_PID 2>/dev/null; docker-compose down 2>/dev/null; echo 'Services stopped'; exit 0" INT

# Wait for user to press Ctrl+C
wait
