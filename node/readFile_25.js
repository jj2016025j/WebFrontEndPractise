var fs = require("fs");
console.log("Starting...");
var data = fs.readFileSync("./world.html");
console.log("file content: " + data);
