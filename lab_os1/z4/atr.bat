@echo off 
if not exist %1 (
    echo "File missing"
) else (
    attrib +r %1
)
pause