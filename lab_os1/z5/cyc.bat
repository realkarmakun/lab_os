@echo off
set /p ctl ="Enter the catalouge path: "
for /r %ctl% %%i in (*.xls*) do (
    echo "File name:"
    echo %%i
    echo "File's content:"
    type %%i
    echo "=============================="
)