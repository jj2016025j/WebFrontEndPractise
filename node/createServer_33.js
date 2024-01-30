var http = require("http");

var dt = require('./myfirstmodule');
console.log("Starting...");
var host = "127.0.0.1";
var port = 8080;
// 這個回調函數會在每次有新的客戶端請求到達服務器時被調用，並且接收兩個參數：request 和 response。
var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.write("White", 'utf8');
	// response.end("End");
	var fs = require("fs");
	fs.readFile('hello.html', function (err, data) {
		response.write(data);
		return response.end();
	});
});

server.listen(port, host, function () {
	console.log("Listening...");
});
