#!/bin/bash

# Lightning Design System CMS - Development Setup Script

set -e

echo "🚀 Lightning Design System CMS - Development Setup"
echo "=================================================="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Check for PostgreSQL
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL 14+ first."
    exit 1
fi

echo "✅ PostgreSQL detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo ""
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "✅ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file with your actual credentials:"
    echo "   - DATABASE_URL"
    echo "   - GITHUB_TOKEN"
    echo "   - SALESFORCE_CLIENT_ID"
    echo "   - SALESFORCE_CLIENT_SECRET"
    echo "   - SESSION_SECRET"
    echo ""
else
    echo "✅ .env file already exists"
fi

# Ask about database setup
echo ""
read -p "Do you want to create and initialize the database? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter database name (default: ldss_cms): " DB_NAME
    DB_NAME=${DB_NAME:-ldss_cms}

    echo ""
    echo "🗄️  Creating database: $DB_NAME"

    # Create database
    if psql -lqt | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
        echo "⚠️  Database $DB_NAME already exists"
        read -p "Do you want to drop and recreate it? (y/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            dropdb "$DB_NAME"
            createdb "$DB_NAME"
            echo "✅ Database recreated"
        fi
    else
        createdb "$DB_NAME"
        echo "✅ Database created"
    fi

    # Run schema
    echo ""
    echo "📊 Running database schema..."
    psql -d "$DB_NAME" -f schema.sql
    echo "✅ Schema applied"
fi

# Create scripts directory if needed
mkdir -p scripts

# Make this script executable
chmod +x scripts/setup-dev.sh

echo ""
echo "=================================================="
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your credentials"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:4000/health"
echo ""
echo "Documentation:"
echo "- README.md - General documentation"
echo "- API_EXAMPLES.md - API usage examples"
echo "- DEPLOYMENT.md - Deployment guide"
echo ""
echo "Happy coding! 🎉"
