var myModule = require("./myModule_51.js");
var rtn = myModule.hello("World");
console.log(rtn);

var url = require('url');

// 解析url傳入的變數變成物件
var q = url.parse(request.url, true).query;
// 但write()好像不能寫物件
// response.write(q);