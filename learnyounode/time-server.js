var http = require('http')
var net = require('net')

function zeroFill(index) {
	if (index < 10) {
		return '0' + index;
	} else {
		return '' + index;
	}
}

function dateTime() {
	var date = new Date();
	return (date.getFullYear() + '-'
		+ zeroFill(date.getMonth() + 1) + '-'
		+ zeroFill(date.getDate()) + ' '
		+ zeroFill(date.getHours()) + ':'
		+ zeroFill(date.getMinutes()))
}

var server = net.createServer(function (socket) {
	socket.end(dateTime() + '\n');
})

server.listen(process.argv[2])