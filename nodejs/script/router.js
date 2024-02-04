var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send("hello!");
});

//變數在request.params裡面
router.get("/:url", function (request, response) {
    response.send("Hello!" + request.params.url);
});

router.get('/info', function (req, res) {
    res.send(`info`)
})

router.get('/about', function (req, res) {
    res.send('這是關於頁面');
});

// app.get('/', function (req, res) {
//     res.render(
//         'index',
//         {
//             title: 'ejs Demo',
//             cache: true,
//             username: req.params.name || "Hello",
//             users: [
//                 { name: "Albee", age: "16", color: "red" },
//                 { name: "Belee", age: "16", color: "blue" },
//                 { name: "Amy", age: "16", color: "orange" }
//             ]
//         },
//         function (err, html) {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Server Error');
//             } else {
//                 res.send(html);
//             }
//         });
// });

// app.get('/login', function (req, res) {
//     res.render('login', { title: 'Login' });
// })

// app.post('/login', function (req, res) {
//     // res.render('login', { title: 'Login' });
//     if (req) {
//         // 重定向
//         res.redirect('/menber')
//     } else {
//         res.send("OK")
//     }
// })

// app.get('/register', function (req, res) { })

// app.get('/menber', function (req, res) {
//     res.render('menber', { title: 'Menber' });
// })

module.exports = router

// app.post('/login', function (req, res) {}
// )
// app.put('/login', function (req, res) {})
// app.delete('/login', function (req, res) {})

// sendFile完整
// res.sendFile('/index.html', {
//     root: __dirname,
//     headers: {
//         'Content-Type': 'text/html'
//     },
//     dotfiles: 'deny'
// }, function (err) {
//     if (err) {
//         console.log(err);
//         res.status(err.status).end();
//     } else {
//         console.log('Sent:', fileName);
//     }
// });

// app.get('/info/:pid',這樣寫可以放參數