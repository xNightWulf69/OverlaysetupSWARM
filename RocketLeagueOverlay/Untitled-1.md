Only needed if you don't already have bakkesmod installed {
    1. Install Bakkesmod
    2. Run Rocket League
    3. Close rocket league
}
1. Go to "DRIVELETTER:\Users\%username%\AppData\Roaming\bakkesmod\bakkesmod\cfg" open the "config" file and search or rcon_password and copy the value.

2. Open "script.js" inside the "RocketLeagueOverlay" folder, go to line 1009, and change the password to the value you copied.

3. run setup.bat

4. Add "index.html" and "BOSindex.html" to OBS as a local browser source. 1920 width x 1080 height (Place BOSindex.html under Rocket League and palce index.html above Rocket League)

5. Make BOSindex.html not visible, right click it and select "Window projector source" and minimise that window.

6. Select BOSindex.html and click the interact button (This and step 4 make it so you can control the control panel and viewers can't see it.)

7. Start Rocket League, start a private match and select spectator and enjoy. (Might need to refresh index.html and BOS.html on OBS for it to update for the first time.)