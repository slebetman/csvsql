const electron = require('electron');
const file = require('./file');
const Menu = electron.Menu;

/**
 * Main application menu
 * @param {electron.app} app 
 * @param {electron.BrowserWindow} win 
 */
function buildMenu (app, win) {
	return Menu.buildFromTemplate([{
		label: 'File',
		submenu: [
			{
				label: 'Open',
				click() {
					file.open().then(x => {
						console.log(x);
						if (!x.canceled) {
							win.webContents.send('openfile', x.filePaths[0]);
						}
					})
					.catch(console.error)
				}
			},
			{
				label: 'Exit',
				click() {
					app.quit();
				}
			}
		]
	}])
}

module.exports = buildMenu;