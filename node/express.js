var express = require('express');
var server = express();
var port = 3000;
var host = '127.0.0.1';
server.use(express.static('public'));
server.get('/info/:pid', function (req, res) {
    res.send(`info`, req.params.pid)
    // res.sendFile(__dirname + '/index.html');
})
server.listen(port, host);
console.log('Server is running on port 3000');













// var io = require('socket.io')(server);

// io.on('connection', function(socket) {
//     console.log('A user connected');
//     socket.on('disconnect', function() {
//         console.log('A user disconnected');
//     });
// });