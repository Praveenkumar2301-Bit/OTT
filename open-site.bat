@echo off
title ZENTRA OTT
cd /d "%~dp0"

echo Cleaning old build cache (fixes "site not opening" issues)...
if exist .next rmdir /s /q .next 2>nul

echo Starting ZENTRA...
start "ZENTRA Dev Server" cmd /k "npm run dev"

echo Waiting for server to start...
timeout /t 8 /nobreak >nul

start http://localhost:3000
echo.
echo If the page does not load, check the "ZENTRA Dev Server" window
echo for the port number (e.g. http://localhost:3001 or 3002) and open that URL.
pause
