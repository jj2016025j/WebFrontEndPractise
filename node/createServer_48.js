console.log("Starting...");
var host = "127.0.0.1";
var port = 80;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/:url", function (request, response) {
	response.send("Hello!" + request.params.url);
});

// Web伺服器的靜態檔案置於 public 資料夾
app.use(express.static("public"));
var fs = require("fs");
fs.readFile('demofile1.html', function (err, data) {
    console.log(err);
    console.log(data);
})
// 此fs.appendFile()方法將指定的內容附加到文件中。如果該檔案不存在，則會建立該檔案：
// 方法將指定的內容追加到指定檔案的末端：
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
// 此fs.open()方法將「flag」作為第二個參數，如果該flag為「w」（表示「寫入」），則開啟指定檔案進行寫入。如果該文件不存在，則建立一個空文件：
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// 該fs.writeFile()方法將替換指定的文件和內容（如果存在）。如果該檔案不存在，將建立一個包含指定內容的新檔案：
// 方法取代指定的文件和內容：
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// 此fs.unlink()方法刪除指定檔案：
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

app.listen(port, host);
