@echo off
set curr_dir=%cd%
chdir /D "%~dp0"

node _ASSETS\tool\typedoc\bin\typedoc --includeDeclarations lib\ts\ --externalPattern **/lib/** --mode file --name "HTML5 TypeScript Game Engine Primer Documentation" --out doc\ src\

chdir /D "%curr_dir%"

pause
