const { checkForUpdates } = require("./app/components/updater");
const { app, BrowserWindow } = require('electron')

function createWindow(){
    let win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
          nodeIntegration: true,
          webSecurity: false
        }
      })

      win.loadFile("index.html");
      checkForUpdates(win)
}

app.on('ready', createWindow)