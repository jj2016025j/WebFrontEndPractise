var express = require('express');
var router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

router.get('/info', function (req, res) {
    res.send(`info`)
})

router.get('/about', function (req, res) {
    res.send('這是關於頁面');
});

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