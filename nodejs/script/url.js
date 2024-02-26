// 用於url解析 OK
var url = require('url');
var adr = 'http://localhost:8080/index.html?year=2017&month=february';
var obj = url.parse(adr, true);

console.log(obj.host); //localhost:8080
console.log(obj.pathname); ///index.htm
console.log(obj.search); //?year=2017&month=february
// 解析url傳入的變數變成物件
var qdata = obj.query; 
console.log(qdata); //[Object: null prototype] { year: '2017', month: 'february' }
console.log(qdata.month); //february

