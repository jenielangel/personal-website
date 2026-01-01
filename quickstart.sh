#!/bin/bash
# QUICK START SCRIPT FOR PORTFOLIO WEBSITE
# Copy this script to your project folder and run it to start developing

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}Portfolio Website - Quick Start${NC}"
echo -e "${BLUE}================================${NC}"

# Check if assets folder exists
if [ ! -d "assets" ]; then
    echo -e "${YELLOW}Creating assets folder...${NC}"
    mkdir assets
    echo -e "${GREEN}✓ Assets folder created${NC}"
fi

# Check Python and Node installations
echo ""
echo -e "${BLUE}Checking dependencies...${NC}"

if command -v python3 &> /dev/null; then
    echo -e "${GREEN}✓ Python 3 found${NC}"
    echo -e "${YELLOW}To start server, run:${NC}"
    echo -e "${GREEN}  python -m http.server 8000${NC}"
elif command -v python &> /dev/null; then
    echo -e "${GREEN}✓ Python found${NC}"
    echo -e "${YELLOW}To start server, run:${NC}"
    echo -e "${GREEN}  python -m SimpleHTTPServer 8000${NC}"
else
    echo -e "${YELLOW}✗ Python not found (but that's ok!)${NC}"
fi

if command -v node &> /dev/null; then
    echo -e "${GREEN}✓ Node.js found${NC}"
    echo -e "${YELLOW}For Next.js version, run:${NC}"
    echo -e "${GREEN}  npm install${NC}"
    echo -e "${GREEN}  npm run dev${NC}"
fi

echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}Next Steps:${NC}"
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "${YELLOW}1. Create 'assets' folder (or use existing):${NC}"
echo -e "${GREEN}   mkdir assets${NC}"
echo ""
echo -e "${YELLOW}2. Add your images to assets folder:${NC}"
echo -e "${GREEN}   - hero-image.jpg (1200x600)${NC}"
echo -e "${GREEN}   - about-image.jpg (600x400)${NC}"
echo -e "${GREEN}   - project1-6.jpg (600x400 each)${NC}"
echo -e "${GREEN}   - gallery1-9.jpg (600x600 each)${NC}"
echo ""
echo -e "${YELLOW}3. Customize your content:${NC}"
echo -e "${GREEN}   - Edit *.html files with your info${NC}"
echo -e "${GREEN}   - Update email, phone, social links${NC}"
echo -e "${GREEN}   - Customize project descriptions${NC}"
echo ""
echo -e "${YELLOW}4. Start local development server:${NC}"
echo -e "${GREEN}   python -m http.server 8000${NC}"
echo -e "${GREEN}   (or use npm if you have Node.js)${NC}"
echo ""
echo -e "${YELLOW}5. Visit in browser:${NC}"
echo -e "${GREEN}   http://localhost:8000${NC}"
echo ""
echo -e "${YELLOW}6. Deploy to hosting:${NC}"
echo -e "${GREEN}   - GitHub Pages (free)${NC}"
echo -e "${GREEN}   - Netlify (free tier)${NC}"
echo -e "${GREEN}   - Vercel (free tier)${NC}"
echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}Ready to go! Good luck! 🚀${NC}"
echo -e "${BLUE}================================${NC}"
