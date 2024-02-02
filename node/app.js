var express = require('express');
const { getLocalIPAddress, getNetIPAddress } = require('./getIPAddress.js');

var app = express();
var port = 8080;
var host = '0.0.0.0';
var requesthost = "localhost";//'127.0.0.1';
var routerURL = "/use"
var resourceURL = "/image"


//開放端口給用戶訪問
app.listen(port, host, () => {
  console.log(`Resource Server is running on :    http://${requesthost}:${port}${resourceURL}/test.jpg`);
  console.log(`Server is running on :             http://${requesthost}:${port}${routerURL}`);
  console.log(`info is running on                 http://${requesthost}:${port}${routerURL}/info`);
  console.log(`about is running on :              http://${requesthost}:${port}${routerURL}/about`);
  // 使用 getLocalIPAddress
  const localIP = getLocalIPAddress();
  console.log('局域網 IPv4 地址:                  http://', localIP);
});

// 這是檔案路徑
app.use(resourceURL, express.static('image'));
// app.use(express.static(__dirname+'/image'));
// app.use(express.static('image'));
// app.use(express.static('./image'));

// 導入已設定的路徑
var router = require('./router');
// 應用路由路徑
app.use(routerURL, router);
// 捕獲錯誤
app.use(function (req, res, next) {
  res.send("NOT FOUND 404")
})

// 將Web伺服器的靜態檔案路徑置於 use 資料夾
app.use(express.static("image"));
app.set('view engine', 'ejs');
