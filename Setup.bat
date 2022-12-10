echo off
set /p drive="What is the drive letter Bakkesmod is located on? "
move SOS.dll %drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\plugins
move sos.set %drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\plugins\settings
setx BAKKESMODSDK %drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\bakkesmodsdk
set NODE_VER=null
set SETUP_DIR=%CD%
node -v >tmp.txt
set /p NODE_VER=<tmp.txt
del tmp.txt
IF %NODE_VER% NEQ null (
	echo INSTALLING node ...
	IF NOT EXIST node-v18.12.0-x64.msi (
		echo Node setup file does not exist. Downloading ...
		START /WAIT wget https://nodejs.org/dist/v18.12.0/node-v18.12.0-x64.msi
	)
	START /WAIT node-v18.12.0-x64.msi
) ELSE (
	echo Node is already installed. Proceeding ...
)
ECHO.>>"%drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\cfg\plugins.cfg"
ECHO plugin load sos>>"%drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\cfg\plugins.cfg"
del %drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\data\rcon_commands.cfg
move rcon_commands.cfg %drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\data\
SETLOCAL enabledelayedexpansion
set v=%drive%:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\cfg\config.cfg
FOR /F "tokens=*" %%a IN (%v%) DO (
    SET line=%%a
    IF "!line:~0,14!"=="rcon_password " SET rcon_password=!line:~14!
)
SET rcon_password=%rcon_password:"=%
SET rcon_password=%rcon_password:/=%
ECHO COPY THIS CODE AND FOLLOW STEP 2: %rcon_password%
ECHO COPY THIS CODE AND FOLLOW STEP 2: %rcon_password%
ECHO COPY THIS CODE AND FOLLOW STEP 2: %rcon_password%
ECHO COPY THIS CODE AND FOLLOW STEP 2: %rcon_password%
ECHO COPY THIS CODE AND FOLLOW STEP 2: %rcon_password%

set filePath=RocketLeagueOverlay\script.js

set lineNumber=1009

set newLineText=const RCONPASS = '%rcon_password%'

for /f "delims=" %%a in (%filePath%) do set "contents=%%a"

for /f "tokens=1* delims=[]" %%a in ("%contents%") do (
  if "%%a"=="%lineNumber%" (
    echo.%newLineText%
  ) else (
    echo.%%b
  )
) > %filePath%

cd SOS_Relay
cmd /k npm run relay
pause