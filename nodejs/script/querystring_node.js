//querystring 編碼解碼工具
var querystring = require('querystring');



var str = 'msg=Hello World!&name=Shan';
console.log("原始字串:" + str)//原始字串:msg=Hello World!&name=Shan

var obj = querystring.parse(str);
console.log("物件化:")
console.log(obj)//[Object: null prototype] { msg: 'Hello World!', name: 'Shan' }

obj.name = "山本";
obj.age = "20";
console.log("更改物件內容:")
console.log(obj)//[Object: null prototype] { msg: 'Hello World!', name: '山本', age: '20' }

var postData = querystring.stringify(obj)
console.log("再字串化:" + postData)//再字串化:msg=Hello%20World!&name=%E5%B1%B1%E6%9C%AC&age=20

var enc_str = querystring.escape(str);
console.log("編碼後字串:" + enc_str)//編碼後字串:msg%3DHello%20World!%26name%3DShan

var dec_str = querystring.unescape(enc_str);
console.log("解碼後字串:" + dec_str)//解碼後字串:msg=Hello World!&name=Shan