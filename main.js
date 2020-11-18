/**
 * The entry js file
 */
const {
  app,
  BrowserWindow
} = require('electron')

// NOTE: display GPU usage
app.disableHardwareAcceleration()

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    icon: __dirname + '/res/player.png',
    // Window No Frame
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('index.html')
  // Whether open the devtools
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})