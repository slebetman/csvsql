const electron = require('electron');
const app = electron.app;

app.on('ready',() => {

	let win = new electron.BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadFile('views/index.html');
});
