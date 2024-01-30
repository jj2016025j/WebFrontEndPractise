var fs = require("fs");
console.log("Starting...");
// 這個函數是異步的，它在執行文件寫入操作時不會阻塞事件循環。操作完成時，將調用回調函數。
fs.writeFile('hello.txt',
  '<html><body><h1>Hello!</h1></body></html>',
  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    console.log("已建立檔案.");
  });
console.log("Finish Flag.");

fs.readFile("hello.txt", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// require("fs")檔案管理伺服器
// 這個函數是同步的，這意味著它會阻塞 Node.js 事件循環，直到文件寫入操作完成。
// console.log("Starting...");
// try {
//   fs.writeFileSync("./world.html",
//     "<html><body><h1>Hello! World.</h1></body></html>");
//   console.log("已建立檔案.");
// } catch (err) {
//   console.error(err);
// } 
// console.log("Finish Flag.");
