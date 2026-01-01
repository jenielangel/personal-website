@echo off
REM QUICK START BATCH SCRIPT FOR PORTFOLIO WEBSITE
REM Run this script to set up and start your portfolio website

echo.
echo ================================
echo Portfolio Website - Quick Start
echo ================================
echo.

REM Check if assets folder exists
if not exist "assets" (
    echo Creating assets folder...
    mkdir assets
    echo. Created assets folder
)

REM Check for Python
echo.
echo Checking dependencies...

python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo. Python found
    echo.
    echo To start the development server, run:
    echo   python -m http.server 8000
    echo.
    echo Then visit: http://localhost:8000
)

node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo. Node.js found
    echo.
    echo For Next.js version, run:
    echo   npm install
    echo   npm run dev
)

echo.
echo ================================
echo Next Steps:
echo ================================
echo.
echo 1. Create 'assets' folder (if not exists):
echo    mkdir assets
echo.
echo 2. Add your images to assets folder:
echo    - hero-image.jpg (1200x600)
echo    - about-image.jpg (600x400)
echo    - project1-6.jpg (600x400 each)
echo    - gallery1-9.jpg (600x600 each)
echo.
echo 3. Customize your content:
echo    - Edit *.html files with your info
echo    - Update email, phone, social links
echo    - Customize project descriptions
echo.
echo 4. Start local development server:
echo    python -m http.server 8000
echo.
echo 5. Visit in browser:
echo    http://localhost:8000
echo.
echo 6. Deploy to hosting:
echo    - GitHub Pages (free)
echo    - Netlify (free tier)
echo    - Vercel (free tier)
echo.
echo ================================
echo Ready to go! Good luck! 
echo ================================
echo.

pause
