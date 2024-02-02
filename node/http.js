var http = require("http");
console.log("Starting...");
var host = "127.0.0.1";
var port = 8080;

// 創建並運行伺服器，並在每次有新的客戶端請求到達服務器時被調用，並且接收兩個參數：request 和 response。
var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	// write()不能寫物件
	response.write("White", 'utf8');
	response.end("End");
});

// 開放端口給用戶訪問
server.listen(port, host, function () {
	console.log("Listening...");
});
