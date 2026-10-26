@echo off
echo ========================================================
echo Starting Traveloop Full Stack (Django + React)
echo ========================================================

start "Traveloop Backend" cmd /k "cd /d S:\Projects\Traveloop\backend && .\venv\Scripts\python.exe manage.py runserver"
start "Traveloop Frontend" cmd /k "cd /d S:\Projects\Traveloop\frontend && npm run dev"

echo.
echo Both servers are launching!
echo Frontend: http://localhost:5173/
echo Backend:  http://127.0.0.1:8000/api/
echo Admin:    http://127.0.0.1:8000/admin/  (admin / admin123)
echo.
pause

