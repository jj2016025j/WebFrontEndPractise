var fs = require("fs");
console.log("Starting...");
var config = JSON.parse(fs.readFileSync("config.json"));
console.log("Config file: ", config);

fs.watchFile("config.json", function (current, previous) {
	console.log("Config file changed.");
	config = JSON.parse(fs.readFileSync("config.json"));
	console.log("Config file: ", config);
});
