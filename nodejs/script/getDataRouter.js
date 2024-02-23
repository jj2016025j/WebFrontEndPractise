var express = require("express")
const router = express.Router()

// OK
//http://localhost:3000/getdata/search?query=NodeJS
router.get('/search', function (req, res) {
    var query = req.query.query; // 從URL的查詢字符串中獲取參數
    res.send('搜索的查詢是：' + query);//NodeJS
});

// OK
//http://localhost:3000/getdata/users/12
router.get('/users/:userId', function (req, res) {
    var userId = req.params.userId; // 從URL路徑中獲取參數
    res.send('用戶ID是：' + userId);//12
});

// fetch('/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: 'user1',
//       password: 'password123'
//     })
//   })

// curl -X POST http://localhost:3000/post -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded"
// curl -X POST http://localhost:3000/post -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"

// 從body裡面找到需要的值 這兩種都只會得到空json
router.post("/post", (req, res) => {
    res.send("收到資料 = " + JSON.stringify(req.body))
})

// 這兩種都只會得到空json
router.post("/post/json", (req, res) => {
    res.json(req.body)
})

module.exports = router;