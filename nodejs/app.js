var express = require("express")
const { getLocalIPAddress, getNetIPAddress } = require('./script/getIPAddress.js');

var app = express()

app.get("/", function (req, res) {
    console.log("localhost ->", req.query)
    console.log("localhost ->", req.url)
    res.send("<h1>Hello 歡迎來到首頁<h1>")
})

app.get("/redirect", function (req, res) {
    res.redirect("/")
})

app.get("/json", (req, res) => {
    res.json({
        name: "小明",
        age: 18
    })
})

//只做返回狀態碼使用者看不出來 然後會顯示send的頁面
app.get("/status", (req, res) => {
    res.status(404).send("頁面不存在")
})

//直接返回404狀態 匯市預設的404狀態頁
app.get("/adult", (req, res) => {
    res.status(404).end()
})

//返回http代碼 使用者看不出來 會直接導向至目標路徑
app.get("/sitemap", (req, res) => {
    res.redirect(301, "/")
})

// 解析 application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// 解析 application/json
app.use(express.json());

// 設定模板引擎為 ejs
app.set('view engine', 'ejs')

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');

// 以 express-session 管理狀態資訊 有重複 簡化版
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

app.post("/post", (req, res) => {
    res.send("收到資料 = " + JSON.stringify(req.body))
})

app.get("/render", (req, res) => {
    res.render("index", {
        title: "title",
        cache: true,
        username: req.params.name || "Hello",
        users: [
            { name: "Albee", age: "16", color: "red" },
            { name: "Belee", age: "16", color: "blue" },
            { name: "Amy", age: "16", color: "orange" }
        ]
    },
        function (err, html) {
            if (err) {
                console.error(err);
                res.status(500).send('Server Error');
            } else {
                res.send(html);
            }
        });
    // res.sendFile(__dirname + "/views/file.ejs")
    // res.sendFile(__dirname + "/views/file.html")
})

app.post("/post", (req, res) => {
    console.log(req.body)
    res.json({
        post_result: 'ok',
        body: req.body
    })
})

app.post("/postdata", (req, res) => {
    console.log(req.body)
    res.send("收到資料 = " + JSON.stringify(req.body))
})


// curl -X POST http://localhost:3000/post -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded"
// curl -X POST http://localhost:3000/post -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"

//顯示常用數據
const http = require("http")
app.get("/info", (req, res) => {
    res.json({
        // // 方法
        // methods: http.METHODS,
        // // http狀態代碼
        // status_codes: http.STATUS_CODES,
        // // 請求頭
        // headers: req.headers,
        // // 主機名
        // hostname: req.hostname,
        // // 請求url
        // url: req.url,
        // // 請求路徑
        // path: req.path,
        // // 請求ip
        // ip: req.ip,
        // // 請求方法
        // method: req.method,
        // // 請求協議
        // protocol: req.protocol,
        // // 域名數組
        // subdomains: req.subdomains,
        // // 請求串
        // // 如果 URL 是 http://example.com/api/users?name=John&age=30，
        // // 那么 req.query 将是 { name: 'John', age: '30' }。
        // // GET 请求：
        // query: req.query,
        // // 參數 对于路由 /users/:userId/posts/:postId，如果请求的 URL 是 /users/123/posts/456，
        // // 那么 req.params 将是 { userId: '123', postId: '456' }。
        // // GET 请求（路由参数）：
        // params: req.params,
        // // 表單數據 内容：通常是一个对象，包含 POST 或 PUT 请求发送的数据。
        // // 它的具体结构取决于请求体的类型（如 application/json、
        // // application/x-www-form-urlencoded）和发送的数据内容。
        // // 要使 req.body 可用，需要使用适当的中间件来解析请求体，
        // // 如 express.json() 或 express.urlencoded()。
        // // POST 请求：
        // // 请求体: { "name": "John", "age": 30 }，
        // // 内容类型为 application/json。
        // // req.body 会包含 { name: 'John', age: 30 }。
        // body: req.body,
        // //不知道這啥 
        // originalUrl: req.originalUrl,

    })
})

// 建立一個中間件
const middleware = function (req, res, next) {
    console.log("我是中間件 console.log ->" + req.method, "http://localhost:3000" + req.url)
    next()
}
// 應用中間件
app.use(middleware)

const auth = function (req, res, next) {
    console.log("中間件 auth ->" + req.method, req.url, req.query)
    if (req.query.auth == "admin") {
        next()
    } else {
        res.status(401).send("權限不足")
        res.status(403).send("權限不足")
    }
}

app.get("/admin", auth, (req, res) => {
    res.send("管理員區")
})

// 跨域
const cors = require("cors")
app.use(cors())

var corsOption = {
    origin: "*",
    optionsSuccessStatus: 200,
}
app.use(cors(corsOption))

app.get("/file", (req, res) => {
    // res.sendFile(__dirname + "/views/file.ejs")
    res.sendFile(__dirname + "/views/file.html")
})

const multer = require("multer")
const upload = multer({ dest: 'upload/' })
const upload2 = multer({
    // mystorage本來就有的變數
    storage: mystorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true)
        } else {
            // cb(null, false)
            return cb(new Error('Only .png and .jpg format allowed!'))
        }
    }
})
var mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    }
    , filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
    , limits: { fileSize: 1024 * 1024 * 10 }
    , fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
    , onError: function (err, next) {
        console.log("multer error ->", err)
        next(err)
    }
    , onFileSizeLimit: function (file) {
        console.log("multer file size limit ->", file)
    }
    , onFieldsLimit: function (fields) {
        console.log("multer fields limit ->", fields)
    }
})

// 檔案上傳 會取得myfile會存入cb顯示的路徑
app.post("/file", upload.single('myfile'), (req, res) => {
    let file = req.file
    console.log("檔案類型" + file.mimetype)
    console.log("原始檔名" + file.originalname)
    console.log("檔案路徑" + file.path)
    console.log("檔案大小" + file.size)
    res.send("上傳成功")
})

// 正規化
app.get('/he/\w+/', function (req, res) {
    res.send("he" + req.params[0])
})

// 模組化
function step1(req, res, next) {
    req.step = "step1"
    console.log(req.step)
    next()
}
function step2(req, res, next) {
    req.step = "step2"
    console.log(req.step)
    res.send(req.step)
    next()
}
app.get('/multi', [step1, step2])

// 變數只能是數字
app.get("/var/:variable([0-9]+)", (req, res) => {
    res.send("variable : " + req.params.variable)
})

// 變數只能放三位數字
app.get("/var2/:variable(\\d{3})", (req, res) => {
    res.send("variable : " + req.params.variable)
})

const router = express.Router()
router.get("/", (req, res) => {
    res.send("歡迎來到路由首頁")
})
router.get("/about", (req, res) => {
    res.send("歡迎來到路由關於頁")
})
app.use("/router", router)

// 儲存設定資料
const session = require('express-session');
app.use(session({
    secret: '這是一個超級隱秘的字串', // 用於簽名 session ID 的 cookie，保護會話免受篡改
    name: 'sessionId', // 客戶端的 cookie 名稱，預設為 connect.sid
    resave: false, // 即使 session 沒有被修改，也不重新保存 session
    saveUninitialized: false, // 不保存未初始化的session
    store: new session.MemoryStore(), // 在開發環境下使用內存存儲 session（預設值）
    cookie: { // 這裡是設定 cookie 的選項
        path: '/', // cookie 生效的路徑
        httpOnly: true, // 當設為 true 時，客戶端 JavaScript 無法讀取到 cookie
        secure: false, // 在 HTTP 環境下也能使用 cookie
        maxAge: 60 * 1000 // 設定 session 的有效時間，單位毫秒
    }
}));

app.get('/session', (req, res) => {
    // 设置响应头部，指定内容类型和字符编码
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.session.views) {
        req.session.views++;
        res.write(`<p>訪問次數: ${req.session.views}</p>`);
        res.write(`<p>過期時間: ${req.session.cookie.maxAge / 1000}</p>`);
        res.end();
    } else {
        req.session.views = 1;
        res.end('歡迎第一次訪問，刷新頁面！');
    }
});

app.get('/setSession/:setSession', (req, res) => {
    req.session.data = req.params.setSession;
    res.send("完成設定");
});

app.get('/getSession', (req, res) => {
    var data = req.session.data || "無資料";
    res.send("data:" + data);
});

// Web 伺服器的靜態檔案置於 public 資料夾
app.use(express.static("public"));

app.get("/wait/:seconds", function (request, response) {
    // 從 URL 參數中獲取秒數，並轉換成毫秒
    const delaySeconds = parseInt(request.params.seconds, 10);
    const delayMilliseconds = delaySeconds * 1000;
    const stopTime = new Date().getTime() + delayMilliseconds;

    // 模擬程式延遲
    while (new Date().getTime() < stopTime) {
        // 延遲迴圈，不做任何操作
    }

    // 延遲後發送回應
    response.send("Hello after " + delaySeconds + " seconds!");
});

app.get("/asynwait/:seconds", function (request, response) {
    // 從 URL 參數中獲取秒數，並轉換成毫秒
    const delaySeconds = parseInt(request.params.seconds, 10);
    const delayMilliseconds = delaySeconds * 1000;

    // 使用 setTimeout 來實現非阻塞的延遲
    setTimeout(() => {
        response.send("Hello after " + delaySeconds + " seconds!");
    }, delayMilliseconds);
});

// 在您的應用中設置 ejs 作為模板引擎
// app.set('views', path.join(__dirname, 'views')); // 設置視圖文件夾
// app.engine('html', require('ejs').renderFile); // 使用 ejs 處理 .html 文件

var port = process.env.PORT || 3000;
var host = '0.0.0.0';
var requesthost = "localhost";//'127.0.0.1';
var routerURL = "/router"
var resourceURL = "/resource"

// 這是檔案路徑
app.use(resourceURL, express.static('resource'));
// app.use(express.static(__dirname+'/resource'));
// app.use(express.static('resource'));
// app.use(express.static('./resource'));

// 展示
app.get("/test/index", function (req, res) {
    // 展示;select
})

// 新增
app.get("/test/add", function (req, res) {
    // 新增;insert
})

// 修改
app.get("/test/edit", function (req, res) {
    // 修改;update
})

// 刪除
app.get("/test/delete", function (req, res) {
    // 刪除;delete
})

// 取得區網IP
const localIP = getLocalIPAddress();

//開放端口給用戶訪問
app.listen(port, function (err) {
    if (err) { console.log("我去，出錯啦!") }
    // console.log("伺服器服務中...                     http://localhost:" + port)
    // console.log("post系統服務中...                   http://localhost:" + port + "/post (複製此連結使用post方法訪問)")
    // console.log("render系統服務中...                 http://localhost:" + port + "/render")
    // console.log(`Resource Server is running on :    http://${requesthost}:${port}${resourceURL}/test.jpg`);
    // console.log("json系統服務中...                   http://localhost:" + port + "/json")
    // console.log("重新導向系統服務中...               http://localhost:" + port + "/redirect")
    // console.log("狀態顯示系統服務中...               http://localhost:" + port + "/status")
    // console.log("模仿找不到路徑系統服務中...         http://localhost:" + port + "/adult ")
    // console.log("永久轉指系統服務中...               http://localhost:" + port + "/sitemap")
    // console.log("資訊查詢系統服務中...               http://localhost:" + port + "/info")
    // console.log("管理員系統服務中...                 http://localhost:" + port + "/admin")
    // console.log("檔案系統服務中...                   http://localhost:" + port + "/file")
    // console.log("多模組系統服務中...                 http://localhost:" + port + "/multi")
    // console.log("變數系統服務中...                   http://localhost:" + port + "/var")
    // console.log(`路由系統服務中...                  http://${requesthost}:${port}${routerURL}`)
    // console.log("路由系統服務中...                   http://localhost:" + port + "/router/about")
    // console.log("session系統服務中...                http://localhost:" + port + "/session")
    // console.log("session系統服務中...                http://localhost:" + port + "/setSession/setSession")
    // console.log("session系統服務中...                http://localhost:" + port + "/getSession")
    // console.log("同步延遲系統服務中...               http://localhost:" + port + "/wait/3")
    // console.log("非同步延遲系統服務中...             http://localhost:" + port + "/asynwait/5")
    // console.log(`局域網 IPv4 地址:                  http://${localIP}:${port}`);
})