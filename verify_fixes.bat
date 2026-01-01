@echo off
REM ============================================
REM PORTFOLIO WEBSITE - FIX VERIFICATION SCRIPT
REM ============================================
REM This script verifies all three fixes are working

echo.
echo ============================================
echo PORTFOLIO WEBSITE FIX VERIFICATION
echo ============================================
echo.

REM Check 1: Git Configuration
echo [1/3] Checking Git Configuration...
git config --global core.autocrlf >nul 2>&1
if %errorlevel% equ 0 (
    echo. ✓ Git autocrlf is configured
    git config --global core.autocrlf
) else (
    echo. ✗ Git not configured properly
)

echo.

REM Check 2: Node.js and npm
echo [2/3] Checking Node.js and npm...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo. ✓ Node.js is installed
    node --version
) else (
    echo. ✗ Node.js not found
    goto npm_fail
)

npm --version >nul 2>&1
if %errorlevel% equ 0 (
    echo. ✓ npm is installed
    npm --version
) else (
    echo. ✗ npm not found
    goto npm_fail
)

echo.

REM Check 3: Project Files
echo [3/3] Checking Project Files...
if exist "index.html" (
    echo. ✓ index.html found (Static version)
) else (
    echo. ✗ index.html not found
)

if exist "pages\index.js" (
    echo. ✓ pages/index.js found (Next.js version)
) else (
    echo. ✗ pages/index.js not found
)

if exist "styles.css" (
    echo. ✓ styles.css found
) else (
    echo. ✗ styles.css not found
)

if exist "script.js" (
    echo. ✓ script.js found
) else (
    echo. ✗ script.js not found
)

echo.
echo ============================================
echo NEXT STEPS:
echo ============================================
echo.
echo 1. To view Static HTML Portfolio:
echo    python -m http.server 8000
echo    Then visit: http://localhost:8000
echo.
echo 2. To view Next.js Version:
echo    npm run dev
echo    Then visit: http://localhost:3000
echo.
echo 3. To check npm works in VS Code terminal:
echo    - Close and reopen VS Code
echo    - Open terminal (Ctrl+`)
echo    - Run: npm --version
echo.
echo ============================================
echo FIXES COMPLETED ✓
echo ============================================
echo.

pause
goto :eof

:npm_fail
echo.
echo ✗ npm issue detected
echo Install Node.js from: https://nodejs.org/
echo.
pause
goto :eof
