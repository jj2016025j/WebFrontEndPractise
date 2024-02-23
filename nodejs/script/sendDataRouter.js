var express = require("express")
const router = express.Router()

// 發送文本響應
router.get('/send', function (req, res) {
    res.send('Hello World');
});

// 發送JSON響應OK
router.get('/data', function (req, res) {
    res.json({
        name: 'John Doe',
        age: 30
    });
});

// 發送文件UNDO
router.get('/download', function (req, res) {
    res.download('test.jpg'); // 提供文件的完整路徑
});

// 返回http代碼 使用者看不出來 會直接導向至目標路徑 重定向OK 
router.get('/old-page', function (req, res) {
    res.redirect(301, '/new-page'); // 301代表永久重定向
});

// 設置響應狀態碼 只做返回狀態碼使用者看不出來 然後會顯示send的頁面 OK 
router.get('/not-found', function (req, res) {
    res.status(404).send('未找到');
});

//直接返回404狀態 匯市預設的404狀態頁
router.get("/adult", (req, res) => {
    res.status(404).end()
})

module.exports = router;