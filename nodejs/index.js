var express = require("express")
var app = express()

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use( express.static( "views" ) );

// app.get("/", function (req, res) {
//     console.log("localhost ->", req.url)
//     res.sendFile("webapi")
// })


var port = process.env.PORT || 3000;
var host = '0.0.0.0';
var requesthost = "localhost";//'127.0.0.1';
var resourceURL = "/resource"

//開放端口給用戶訪問
app.listen(port, function (err) {
    if (err) { console.log("我去，出錯啦!") }
    console.log("伺服器服務中...                     http://" + requesthost + ":" + port)
    // console.log(`局域網 IPv4 地址:                  http://${localIP}:${port}`);
})