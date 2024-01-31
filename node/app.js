var express = require('express');
const { getLocalIPAddress, getNetIPAddress } = require('./getIPAddress.js');

var app = express();
var port = 8080;
var host = '0.0.0.0';
var requesthost = "localhost";//'127.0.0.1';
var routerURL = "/test"
var resourceURL = "/image"

// 使用 getLocalIPAddress
const localIP = getLocalIPAddress();
console.log('局域網 IPv4 地址:                  http://', localIP);

// 使用 getNetIPAddress
getNetIPAddress().then(ip => {
    console.log("我的公網 IP 地址是:                http://" + ip);
}).catch(err => {
    console.log("錯誤: " + err.message);
});

app.listen(port, host, () => {
    console.log(`Server is running on :             http://${requesthost}:${port}${routerURL}`);
    console.log(`Resource Server is running on :    http://${requesthost}:${port}${resourceURL}`);
    console.log(`info is running on                 http://${requesthost}:${port}${routerURL}/info`);
    console.log(`about is running on :              http://${requesthost}:${port}${routerURL}/about`);
  });

// 這是檔案路徑
app.use(resourceURL, express.static('image'));
// app.use(express.static(__dirname+'/image'));
// app.use(express.static('image'));
// app.use(express.static('./image'));

var router = require('./router');
// 這是路由路徑
app.use(routerURL, router);
app.use(function (req, res, next) {
    res.send("NOT FOUND 404")
})