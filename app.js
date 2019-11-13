const electron = require('electron');
const menu = require('./lib/menu');
const app = electron.app;

app.on('ready',() => {

	let win = new electron.BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		},
		backgroundColor: '#d9d9d9'
	});

	win.loadFile('views/index.html');
	electron.Menu.setApplicationMenu(menu(app, win));
});
