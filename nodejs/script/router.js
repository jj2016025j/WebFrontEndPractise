var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    res.send("hello!");
});

router.get('/about', function (req, res) {
    res.send('這是關於頁面');
});

//變數在request.params裡面
router.get("/:url", function (req, res) {
    res.send("Hello!" + req.params.url);
});


module.exports = router

app.post('/login', function (req, res) {
    res.send("you post login");
})

app.put('/login', function (req, res) {
    res.send("you put login");
})

app.delete('/login', function (req, res) {
    res.send("you delete login");
})

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
