// 導入模組
var myModule = require("./Module_make.js");
// 使用導入模組的function
var rtn = myModule.hello("World");
console.log(rtn);


const express = require('express')
const app = express()
//?
const path = require('path')
//?
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    // 控制是否在請求結束時重新保存 session，即使它從未被修改過。
    resave: false,
    // 控制是否將新建立但未被修改的 session 保存到存儲中。
    saveUninitialized: true,
    // 可以包含多個屬性來細化 cookie 的行為。maxAge設定 cookie 的有效期，單位是毫秒。
    cookie: { maxAge: 60000 }
}))

//body-parser有可能已經整合進express了 看起來像解碼工具
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.listen(3000, () => {
    console.log('server start')
})

//querystring 編碼解碼工具
var querystring = require('querystring');
var str = 'msg=Hello%20World!&name=Shan';
var obj = querystring.parse(str);

obj.name = "山本";
obj.age = "20";
var postData = querystring.stringify(obj)
console.log(postData)

console.log("原始字串:" + str)
var enc_str = querystring.escape(str);
console.log("編碼後字串:" + enc_str)
var dec_str = querystring.unescape(enc_str);
console.log("解碼後字串:" + dec_str)