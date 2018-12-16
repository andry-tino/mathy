import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
    const win = new BrowserWindow({ width: 800, height: 600 });
    win.loadFile(path.join(__dirname, "index.html"));
}

// Start
app.on('ready', createWindow);
