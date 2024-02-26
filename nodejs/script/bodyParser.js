//body-parser解碼工具大部分已整合進express 不須使用
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.listen(3000, () => {
    console.log('server start')
})
