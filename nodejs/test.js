var express = require("express")
var app = express()

app.get("/", function (req, res) {
    console.log("localhost ->", req.query)
    console.log("localhost ->", req.url)
    res.send("<h1>Hello<h1>")
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
app.post("/post", (req, res) => {
    console.log(req.body)
    res.json({
        post_result: 'ok',
        body: req.body
    })
})

// curl -X POST http://localhost:3000/post -d "param1=value1&param2=value2" -H "Content-Type: application/x-www-form-urlencoded"
// curl -X POST http://localhost:3000/post -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"

//顯示常用數據
const http = require("http")
app.get("/info", (req, res) => {
    res.json({
        // 方法
        methods: http.METHODS,
        // http狀態代碼
        status_codes: http.STATUS_CODES,
        // 請求頭
        headers: req.headers,
        // 主機名
        hostname: req.hostname,
        // 請求url
        url: req.url,
        // 請求路徑
        path: req.path,
        // 請求ip
        ip: req.ip,
        // 請求方法
        method: req.method,
        // 請求協議
        protocol: req.protocol,
        // 域名數組
        subdomains: req.subdomains,
        // 請求串
        // 如果 URL 是 http://example.com/api/users?name=John&age=30，
        // 那么 req.query 将是 { name: 'John', age: '30' }。
        // GET 请求：
        query: req.query,
        // 參數 对于路由 /users/:userId/posts/:postId，如果请求的 URL 是 /users/123/posts/456，
        // 那么 req.params 将是 { userId: '123', postId: '456' }。
        // GET 请求（路由参数）：
        params: req.params,
        // 表單數據 内容：通常是一个对象，包含 POST 或 PUT 请求发送的数据。
        // 它的具体结构取决于请求体的类型（如 application/json、
        // application/x-www-form-urlencoded）和发送的数据内容。
        // 要使 req.body 可用，需要使用适当的中间件来解析请求体，
        // 如 express.json() 或 express.urlencoded()。
        // POST 请求：
        // 请求体: { "name": "John", "age": 30 }，
        // 内容类型为 application/json。
        // req.body 会包含 { name: 'John', age: 30 }。
        body: req.body,
        //不知道這啥 
        originalUrl: req.originalUrl,

    })
})

// 建立一個中間件
const middleware = function (req, res, next) {
    console.log("中間件 console.log ->" + req.method, req.url)
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

const cors = require("cors")
app.use(cors())

app.get("/sitemap", (req, res) => {
    res.send("sitemap")
})

var corsOption ={
    origin:"*",
    optionsSuccessStatus:200,
}
app.use(cors(corsOption))

var port = process.env.PORT || 3000;
app.listen(port, function (err) {
    if (err) { console.log("我去，出錯啦!") }
    console.log("伺服器服務中...    http://localhost:" + port)
    console.log("伺服器服務中...    http://localhost:" + port + "/json")
    console.log("伺服器服務中...    http://localhost:" + port + "/redirect")
    console.log("伺服器服務中...    http://localhost:" + port + "/status")
    console.log("伺服器服務中...    http://localhost:" + port + "/404")
    console.log("伺服器服務中...    http://localhost:" + port + "/sitemap")
    console.log("伺服器服務中...    http://localhost:" + port + "/info")
    console.log("伺服器服務中...    http://localhost:" + port + "/admin")
})