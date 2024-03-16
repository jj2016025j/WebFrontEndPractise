var express = require("express")
var app = express()

// 查看預設port有沒有占用 有則換成3000
var port = process.env.PORT || 4000;
var requesthost = "http://localhost:";//'127.0.0.1';

// 解析 application/x-www-form-urlencoded => key=value
// extended: 默認為 false。如果設置為 true，則會解析嵌套的鍵值對。
// type: 默認為 application/x-www-form-urlencoded。
// 可以設置為其他 MIME 類型，例如 multipart/form-data。
app.use(express.urlencoded({ extended: true }));
// 解析 application/json => {"key":"value"}
// 解析 application/json 格式的請求正文。
// 將請求正文解析為 JSON 對象，並放入 req.body 屬性中。
app.use(express.json());
// 這些都是資料格式

// 各種取得資料的路由
var getData = require("./script/getDataRouter.js")
app.use("/getdata", getData)

//可以直接渲染靜態檔案路徑底下的檔案，渲染不出的檔案會變成下載，如ejs
app.use(express.static(__dirname + "/resource"));

// 各種送出資料的路由
var senddata = require("./script/sendDataRouter.js")
app.use("/senddata", senddata)

app.get("/", function (req, res) {
    console.log("您已進入首頁 -> req.url：", req.url)
    res.send("<h1>Hello 歡迎來到首頁<h1>")
})

// 沒成功
var render = require("./script/renderRouter.js")
app.use("/render", render)

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');//會自動找到預設路徑底下的.ejs檔案
app.set('views', __dirname + '/views');
// 在您的應用中設置 ejs 作為模板引擎
app.engine('html', require('ejs').renderFile); // 使用 ejs 處理 .html 文件
// app.set('views', path.join(__dirname, 'views')); // 設置視圖文件夾 應該是指用於渲染的程式

// 這裡路徑是對的
// http://localhost:3000/html
app.get("/html", (req, res) => {
    //只能使用絕對路徑，跟靜態路徑沒有關係
    // path must be absolute or specify root to res.sendFile
    res.sendFile(__dirname + "/resource/file.html")
})

// 會變成下載
app.get("/ejs", (req, res) => {
    res.sendFile(__dirname + "/resource/file.ejs")// 會變成下載
})

// 這個有成功
app.get("/webapi", (req, res) => {
    res.sendFile(__dirname + "/resource/test.jpg")
})

// http://localhost:3000/Index
app.get("/Index", function (req, res) {
    res.render("Index.ejs");//不用設定 views 路徑，會自動找到views路徑底下的檔案，有app.set('view engine', 'ejs')的話可以不用打附檔名
})

// 用json展示套件資訊
var http = require("./script/http.js")
app.use("/http", http)

// 建立一個中間件
const middleware = function (req, res, next) {
    console.log("我是中間件 console.log -> " + req.method + " " + req.url + " " + req.query)
    next()
}
// 應用中間件
app.use(middleware)

// 用來展示中間件的用法 放在某個get中間
// http://localhost:3000/admin
app.get("/admin", middleware, (req, res) => {
    res.send("管理員區")
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
}

app.get('/multi', [step1, step2])

// 跨域
const cors = require("cors")
app.use(cors())

var corsOption = {
    origin: "*",
    optionsSuccessStatus: 200,
}
app.use(cors(corsOption))

// 以 express-session 管理狀態資訊 有重複 簡化版
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

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
        maxAge: 30 * 1000 // 設定 session 的有效時間，單位毫秒
    }
}));

app.use(session({
    secret: 'keyboard cat',
    // 控制是否在請求結束時重新保存 session，即使它從未被修改過。
    resave: false,
    // 控制是否將新建立但未被修改的 session 保存到存儲中。
    saveUninitialized: true,
    // 可以包含多個屬性來細化 cookie 的行為。maxAge設定 cookie 的有效期，單位是毫秒。
    cookie: { maxAge: 30000 }
}))

// 可用
var session = require("./script/session.js")
app.use("/session", session)


// 取得區網IP
const { getLocalIPAddress, getNetIPAddress } = require('./script/getIPAddress.js');
const localIP = getLocalIPAddress();

//開放端口給用戶訪問
app.listen(port, function (err) {
    if (err) { console.log("我去，出錯啦!") }
    console.log("伺服器服務中...                     http://localhost:" + port)
    console.log("檔案系統服務中...                   http://localhost:" + port + "/file")
    console.log("多模組系統服務中...                 http://localhost:" + port + "/multi")
    console.log("變數系統服務中...                   http://localhost:" + port + "/var")
    console.log("路由系統服務中...                   http://localhost:" + port + "/router/about")
    console.log(`session系統服務中...                ${requesthost}${port}/session`)
    console.log("同步延遲系統服務中...               http://localhost:" + port + "/wait/3")
    console.log("非同步延遲系統服務中...             http://localhost:" + port + "/asynwait/5")
    console.log(`局域網 IPv4 地址:                  http://${localIP}:${port}`);
})