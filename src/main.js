const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron/main');
const path = require('node:path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('./src/renderer/index.html')

  // Sample invokation of `ipcMain.on(api_command)`
  // --------------------------------------------
  /*
  ipcMain.on('event-name', (event, title) => {
    // DO SOMETHING...
  });
  */
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})