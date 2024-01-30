var express = require('express');
var server = express();
var port = 8080;
var host = '0.0.0.0';
server.use(express.static('node'));
server.listen(port, host);

console.log(`Server is running on port ${port}`);
// server.get('/info/:pid', function (req, res) {
//     res.send(`info`, req.params.pid)
//     // res.sendFile(__dirname + '/index.html');
// })

// server.post('/login', function (req, res) {}
// )
// server.put('/login', function (req, res) {})
// server.delete('/login', function (req, res) {})













// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//     console.log('A user connected');
//     socket.on('disconnect', function() {
//         console.log('A user disconnected');
//     });
// });