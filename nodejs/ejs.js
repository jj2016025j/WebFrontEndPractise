var express = require("express")
var app = express()
app.listen(3000, function (request, response) {
    console.log("Server running on http://localhost:3000")
})

app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render(
        'index',
        {
            title: 'ejs Demo',
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
});

app.get('/login', function (req, res) {
    res.render('login', { title: 'Login' });
})

app.post('/login', function (req, res) {
    // res.render('login', { title: 'Login' });
    if (req) {
        // 重定向
        res.redirect('/menber')
    } else {
        res.send("OK")
    }
})

app.get('/register', function (req, res) { })

app.get('/menber', function (req, res) {
    res.render('menber', { title: 'Menber' });
})


// 在您的應用中設置 ejs 作為模板引擎
// app.set('views', path.join(__dirname, 'views')); // 設置視圖文件夾
// app.engine('html', require('ejs').renderFile); // 使用 ejs 處理 .html 文件
