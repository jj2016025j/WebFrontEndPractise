var express = require("express")
const router = express.Router()

// 發送文本響應
// http://localhost:3000/senddata/jsonData
router.get('/send', function (req, res) {
    res.send('Hello World');
});

// 發送JSON響應OK
// http://localhost:3000/senddata/jsonData
router.get('/jsonData', function (req, res) {
    res.json({
        name: 'John Doe',
        age: 30
    });
});

// 會下載檔案
// 可以提供文件的完整路徑
// 也可以提供執行腳本當下的路徑
// 跟靜態檔案的路徑沒關係
// http://localhost:3000/senddata/download
router.get('/download', function (req, res) {
    res.download('app.js');
});

// 返回http代碼 使用者看不出來 會直接導向至目標路徑 重定向OK 
// http://localhost:3000/senddata/old-page 會跳到新頁面
router.get('/old-page', function (req, res) {
    res.redirect(301, '/new-page'); // 301代表永久重定向
});

// 設置響應狀態碼 只做返回狀態碼 使用者看不出來 不會顯示預設404頁面 會跳出send的內容 OK 
// http://localhost:3000/senddata/not-found 
router.get('/not-found', function (req, res) {
    res.status(404).send('未找到');
});

//直接返回404狀態 顯示預設的404狀態頁
// http://localhost:3000/senddata/adult
router.get("/adult", (req, res) => {
    res.status(404).end()
})

module.exports = router;