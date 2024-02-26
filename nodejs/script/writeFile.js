// 各種寫入檔案的方法

// 檔案管理
var fs = require("fs");
console.log("Starting...");
// 這個函數是異步的，取代指定的文件和內容（如果存在）。如果該檔案不存在，將建立一個包含指定內容的新檔案：
fs.writeFile('writeFile.html',
  '<html><body><h1>writeFile!</h1></body></html>',
  (err) => {
    if (err) throw err;
    console.log("已完成 writeFile.");
  });
console.log("已呼叫 writeFile.");

// 這個函數是同步的，這意味著它會阻塞 Node.js 事件循環，直到文件寫入操作完成。
try {
  fs.writeFileSync("./writeFileSync.html",
    "<html><body><h1>Hello! World.</h1></body></html>");
  console.log("已完成 writeFileSync.");
} catch (err) {
  console.error(err);
} 
console.log("已呼叫 writeFileSync.");

// 「w」開啟指定檔案進行寫入。
// 如果文件不存在，則建立空文件
fs.open(
  'open.html',
  'w',
  function (err, file) {
    if (err) throw err;
    console.log('已完成 open!');
  });
console.log("已呼叫  open.");

// 此fs.appendFile()方法將指定的內容附加到文件中。如果該檔案不存在，則會建立該檔案：
// 方法將指定的內容追加到指定檔案的末端：
fs.appendFile('appendFile.html', 'Hello appendFile!', function (err) {
  if (err) throw err;
  console.log('已完成 appendFile');
});
console.log("已呼叫 appendFile");

// 此fs.unlink()方法刪除指定檔案：
fs.writeFileSync('unlink.html','<html><body><h1>For delete!</h1></body></html>',function (){})
fs.unlink('unlink.html', (err) => {
  if (err) throw err;
  console.log('已完成 unlink');
});
console.log("已呼叫 unlink");

//函數用於異步地重命名檔案或目錄
fs.writeFileSync('rename.html','<html><body><h1>For rename!</h1></body></html>',function (){})
fs.rename('rename.html', 'new.html', function (err) {
  if (err) throw err;
  console.log('已完成 rename');
});
console.log("已呼叫 rename");
fs.unlink('unlink.html', ()=>{})