//load elecctron module
const electron = require('electron');
const {app} = electron || require('app');
const {BrowserWindow} = electron || require('browser-window');

//buikd new web page

let win;
function createWindow(){
    win = new BrowserWindow({width: 800, height: 600});
    //show index.html
    win.loadURL('file://' + __dirname + '/index.html');
    //shiw devtool
    //win.webContents.openDevTools();

    //if cclose window, then kill
    win.on('closed', () => {
        win = null;
    });
}

//ready app process
app.on('ready', createWindow);
//if close all window, then quit()
app.on('window-all-closde', () => {
    if(ProcessingInstruction.platform !== darwin) {
        app.quit();
    }
});

app.on('active', () => {
    if(win === null) {
        createWindow();
    }
});