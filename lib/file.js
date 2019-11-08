const electron = require('electron');
const dialog = electron.dialog;

function open () {
	return dialog.showOpenDialog({
		properties: [
			'openFile'
		],
		title: 'Open CSV file',
		buttonLabel: 'Open',
		filters: [
			{ name: 'CSV', extensions: ['csv'] }
		]
	})
}

module.exports = {
	open
}
