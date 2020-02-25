@echo off 
set /p a="First number (A): " 
set /p b="Second number (B): " 
if a LSS b echo "A < B"
if a GTR b echo "B > A"
if a EQU b echo "A = B"
pause