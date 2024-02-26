// 各種讀取檔案的方法

var fs = require("fs");
// 目前基本沒問題 除了異步讀出來的不是看得懂的內容

// 是用來異步讀取文件的內容。當文件被成功讀取後，其內容會作為回調函數的參數返回。
fs.readFile("index.html", function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);//<Buffer 3c 68 74 6d 6c 3e 0d 0a 0d 0a 3c 62 6f 64 79 3e 0d 0a 20 20 20 20 3c 68 31 3e 48 65 6c 6c 6f 21 3c 2f 68 31 3e 0d 0a 3c 2f 62 6f 64 79 3e 0d 0a 0d 0a ... 7 more bytes>
    }
});

console.log("Starting...");
// 這是同步的，沒有callback
var data = fs.readFileSync("index.html");
console.log("file content: " + data);

// fs.watchFile 是用來監視文件的變化的。當被監視的文件發生變化時，提供的回調函數會被調用。
fs.watchFile("config.json", function (current, previous) {
	console.log("Config file changed.");
	config = JSON.parse(fs.readFileSync("config.json"));
	console.log("Config file: ", config);
});
