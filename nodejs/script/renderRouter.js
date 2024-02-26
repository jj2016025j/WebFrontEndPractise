// 晚點來改 
var express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index")
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