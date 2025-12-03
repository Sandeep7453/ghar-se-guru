#!/bin/bash
# Ghar Se Guru - Quick Start Script

echo "🎓 Welcome to Ghar Se Guru Setup!"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo "✅ npm is installed: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🚀 Setup Complete!"
echo ""
echo "Next Steps:"
echo "==========="
echo ""
echo "1. Start the Frontend Development Server:"
echo "   npm run dev"
echo ""
echo "2. (Optional) Start the Backend Server in a NEW terminal:"
echo "   npm run server"
echo ""
echo "3. Open your browser and visit:"
echo "   http://localhost:5173"
echo ""
echo "🎉 Happy Learning with Ghar Se Guru!"
