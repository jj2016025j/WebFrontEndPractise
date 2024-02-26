// 舊式的伺服器操作 現在已經轉用express 上面很少用了不研究
var http = require("http");
// var host = "127.0.0.1";
// var port = 8080;

// // 創建並運行伺服器，並在每次有新的客戶端請求到達服務器時被調用，並且接收兩個參數：request 和 response。
// var server = http.createServer(function (request, response) {
// 	response.writeHead(200, { 'Content-Type': 'text/html' });
// 	// write()不能寫物件
// 	response.write("White", 'utf8');
// 	response.end("End");
// });

// // 開放端口給用戶訪問
// server.listen(port, host, function () {
// 	console.log("Listening... https://127.0.0.1:8080");
// });

//  可以顯示req的參數
var express = require("express")
const router = express.Router()

//顯示常用數據
// http://localhost:3000/http
router.get("/", (req, res) => {
	res.json({
		// 方法
		methods: http.METHODS,
		// http狀態代碼
		status_codes: http.STATUS_CODES,
		// 請求頭
		headers: req.headers,
		// 主機名
		hostname: req.hostname,
		// 請求url
		url: req.url,
		// 請求路徑
		path: req.path,
		// 請求ip
		ip: req.ip,
		// 請求方法
		method: req.method,
		// 請求協議
		protocol: req.protocol,
		// 域名數組
		subdomains: req.subdomains,
		// 請求串
		// 如果 URL 是 http://example.com/api/users?name=John&age=30，
		// 那么 req.query 将是 { name: 'John', age: '30' }。
		// GET 请求：
		query: req.query,
		// 參數 对于路由 /users/:userId/posts/:postId，如果请求的 URL 是 /users/123/posts/456，
		// 那么 req.params 将是 { userId: '123', postId: '456' }。
		// GET 请求（路由参数）：
		params: req.params,
		// 表單數據 内容：通常是一个对象，包含 POST 或 PUT 请求发送的数据。
		// 它的具体结构取决于请求体的类型（如 application/json、
		// application/x-www-form-urlencoded）和发送的数据内容。
		// 要使 req.body 可用，需要使用适当的中间件来解析请求体，
		// 如 express.json() 或 express.urlencoded()。
		// POST 请求：
		// 请求体: { "name": "John", "age": 30 }，
		// 内容类型为 application/json。
		// req.body 会包含 { name: 'John', age: 30 }。
		body: req.body,
		//不知道這啥 
		originalUrl: req.originalUrl,
	})
})

module.exports = router;