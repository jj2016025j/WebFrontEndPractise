// 檔案管理 先不用...吧
const multer = require("multer")
const upload = multer({ dest: 'upload/' })
const upload2 = multer({
    // mystorage本來就有的變數
    storage: mystorage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true)
        } else {
            // cb(null, false)
            return cb(new Error('Only .png and .jpg format allowed!'))
        }
    }
})
var mystorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    }
    , filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
    , limits: { fileSize: 1024 * 1024 * 10 }
    , fileFilter: function (req, file, cb) {
        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
    , onError: function (err, next) {
        console.log("multer error ->", err)
        next(err)
    }
    , onFileSizeLimit: function (file) {
        console.log("multer file size limit ->", file)
    }
    , onFieldsLimit: function (fields) {
        console.log("multer fields limit ->", fields)
    }
})

// 失敗
// 檔案上傳 會取得myfile會存入cb顯示的路徑
// http://localhost:3000/file
app.post("/file", upload.single('myfile'), (req, res) => {
    let file = req.file
    console.log("檔案類型" + file.mimetype)
    console.log("原始檔名" + file.originalname)
    console.log("檔案路徑" + file.path)
    console.log("檔案大小" + file.size)
    res.send("上傳成功")
})
