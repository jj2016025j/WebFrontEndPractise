var express = require("express")
var app = express()

// 沒成功
// var render = require("./script/renderRouter.js")
// app.use("/render",render)

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// 在您的應用中設置 ejs 作為模板引擎
app.engine('html', require('ejs').renderFile); // 使用 ejs 處理 .html 文件
// app.set('views', path.join(__dirname, 'views')); // 設置視圖文件夾 應該是指用於渲染的程式


// 這是檔案路徑
app.use(express.static(__dirname+'/views'));

// 解析 application/x-www-form-urlencoded => key=value
app.use(express.urlencoded({ extended: true }));
// 解析 application/json => {"key":"value"}
app.use(express.json());

// 各種取得資料的路由
var getData = require("./script/getDataRouter.js")
app.use("/getdata",getData)

// 各種傳送資料的路由
var senddata = require("./script/sendDataRouter.js")
app.use("/senddata",getData)

app.get("/", function (req, res) {
    console.log("localhost ->", req.url)
    res.send("<h1>Hello 歡迎來到首頁<h1>")
})

// 以 express-session 管理狀態資訊 有重複 簡化版
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));


// 這裡路徑是對的
app.get("/html", (req, res) => {
    res.sendFile(__dirname + "/views/file.html")
})

app.get("/googlemapapi  ", (req, res) => {
    res.sendFile(__dirname + "/views/googlemapapi.html")
})

// 會變成下載
app.get("/ejs", (req, res) => {
    res.sendFile(__dirname + "/views/file.ejs")
})

app.get("/webapi",(req,res)=>{
    res.sendFile(__dirname + "/views/webapi.html")
})

app.get("/cookie",(req,res)=>{
    res.sendFile(__dirname + "/views/cookie.html")
})

//Error
app.get("/render", (req, res) => {
    // res.render(__dirname + "/views/file.ejs")//這個也不行
    res.render("index")
})

// 用json展示套件資訊
var info = require("./script/infoRouter.js")
app.use("/info",info)

// 建立一個中間件
const middleware = function (req, res, next) {
    console.log("我是中間件 console.log -> " + req.method, req.url + req.url)
    next()
}
// 應用中間件
app.use(middleware)

// 用來展示中間件的用法 放在某個get中間
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

// 變數只能是數字
app.get("/var/:variable([0-9]+)", (req, res) => {
    res.send("variable : " + req.params.variable)
})

// 變數只能放三位數字
app.get("/var2/:variable(\\d{3})", (req, res) => {
    res.send("variable : " + req.params.variable)
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

// 儲存設定資料
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

// 取得區網IP
const { getLocalIPAddress, getNetIPAddress } = require('./script/getIPAddress.js');
const localIP = getLocalIPAddress();

var port = process.env.PORT || 3000;
var host = '0.0.0.0';
var requesthost = "localhost";//'127.0.0.1';
var resourceURL = "/resource"

//開放端口給用戶訪問
app.listen(port, function (err) {
    if (err) { console.log("我去，出錯啦!") }
    console.log("伺服器服務中...                     http://localhost:" + port)
    console.log("檔案系統服務中...                   http://localhost:" + port + "/file")
    console.log("多模組系統服務中...                 http://localhost:" + port + "/multi")
    console.log("變數系統服務中...                   http://localhost:" + port + "/var")
    console.log("路由系統服務中...                   http://localhost:" + port + "/router/about")
    console.log("session系統服務中...                http://localhost:" + port + "/session")
    console.log("session系統服務中...                http://localhost:" + port + "/setSession/setSession")
    console.log("session系統服務中...                http://localhost:" + port + "/getSession")
    console.log("同步延遲系統服務中...               http://localhost:" + port + "/wait/3")
    console.log("非同步延遲系統服務中...             http://localhost:" + port + "/asynwait/5")
    // console.log(`局域網 IPv4 地址:                  http://${localIP}:${port}`);
})