// preload.js

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { contextBridge, ipcRenderer } = require('electron');

// Sample invocation of `contextBridge.exposeInMainWorld`
// --------------------------------------------
/* 
contextBridge.exposeInMainWorld('api_name', {
    api_command: arg => ipcRenderer.send('event-name', arg),
});
*/
