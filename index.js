const { app, BrowserWindow } = require("electron");

let window;

const createWindow = () => {
  window = new BrowserWindow({
    width: 500,
    height: 180,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  window.on("closed", () => {
    window = null;
  });

  window.webContents.openDevTools();
  window.loadFile("index.html");
  window.once("ready-to-show", () => {
    window.show();
  });
};

app.on("ready", createWindow);
