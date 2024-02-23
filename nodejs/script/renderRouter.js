var express = require("express")
const router = express.Router()

// 目前這個成功
router.get("/html", (req, res) => {
    // res.sendFile(__dirname + "/views/file.ejs")
    res.sendFile(__dirname + "/views/file.html")
})

//會變成下載
router.get("/ejs", (req, res) => {
    res.sendFile(__dirname + "/views/file.ejs")
})

router.get("/", (req, res) => {
    res.render(__dirname + "/views/file.ejs")
})

// server error
router.get("/render", (req, res) => {
    // res.render("index", {
    //     title: "title",
    //     cache: true,
    //     username: req.params.name || "Hello",
    //     users: [
    //         { name: "Albee", age: "16", color: "red" },
    //         { name: "Belee", age: "16", color: "blue" },
    //         { name: "Amy", age: "16", color: "orange" }
    //     ]
    // },
    //     function (err, html) {
    //         if (err) {
    //             console.error(err);
    //             res.status(500).send('Server Error');
    //         } else {
    //             res.send(html);
    //         }
    //     });
})

module.exports = router;