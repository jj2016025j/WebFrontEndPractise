// OK
var express = require("express")
const router = express.Router()

// http://localhost:3000/session
router.get('/', (req, res) => {
    // 設置響應頭部 更改文件類型和內容編碼 沒有這行會變亂碼
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (req.session.views) {
        req.session.views++;
        res.write(`<p>訪問次數: ${req.session.views}</p>`);
        res.write(`<p>過期時間: ${req.session.cookie.maxAge / 1000}</p>`);
        res.end();
    } else {
        req.session.views 
        = 1;
        res.end('歡迎第一次訪問，刷新頁面！');
    }
});

// http://localhost:3000/session/setSession/SessionData=123
router.get('/setSession/:setSession', (req, res) => {
    req.session.data = req.params.setSession;
    res.send("完成設定");
});

// http://localhost:3000/session/getSession
router.get('/getSession', (req, res) => {
    var data = req.session.data || "無資料";
    res.send("data:" + data);
});


module.exports = router;