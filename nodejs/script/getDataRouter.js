// OK
var express = require("express")
const router = express.Router()


//http://localhost:3000/getdata/search?query=NodeJS
router.get('/search', function (req, res) {
    var query = req.query.query; // 從URL的查詢字符串中獲取參數
    res.send('搜索的查詢是：' + query);//NodeJS
});

//http://localhost:3000/getdata/users/12
router.get('/users/:userId', function (req, res) {
    var userId = req.params.userId; // 從URL路徑中獲取參數
    res.send('用戶ID是：' + userId);//12
});


// 從body裡面找到需要的值 這兩種都只會得到空json
router.post("/post", (req, res) => {
    res.send("收到資料 = " + JSON.stringify(req.body))
})

// 這兩種都只會得到空json
router.post("/post/json", (req, res) => {
    res.json(req.body)
})

// 正規化
router.get('/he/\w+/', function (req, res) {
    res.send("he" + req.params[0])
})

// 變數只能是數字
router.get("/var/:variable([0-9]+)", (req, res) => {
    res.send("variable : " + req.params.variable)
})

// 變數只能放三位數字
router.get("/var2/:variable(\\d{3})", (req, res) => {
    res.send("variable : " + req.params.variable)
})

module.exports = router;