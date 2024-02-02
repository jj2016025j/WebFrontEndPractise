llm下載用https://lmstudio.ai/
下載
模型是這個
TheBloke
/
CodeLlama-7B-Instruct-GGUF
/
codellama-7b-instruct.Q4_K_S.gguf

Preset
設定 "MataAI Llama 2 Chat" 模型

!!!跨域要打開!!! !!!跨域要打開!!!
!!!跨域要打開!!! !!!跨域要打開!!!
!!!跨域要打開!!! !!!跨域要打開!!!
下面這個選項
Cross-Origin-Resource-Sharing (CORS)ⓘ


#如果要裝對外網的功能用這個 通常會無法辨識
# pip install ngrok
ngrok authtoken 2TgnwaFJy8Ez0j07UtssJyAHzQp_RSjTnkAWZDrYCWUGM7Qi
ngrok config add-authtoken 2TgnwaFJy8Ez0j07UtssJyAHzQp_RSjTnkAWZDrYCWUGM7Qi
ngrok http 5050

#   系統如果找不到
# .\ngrok
pip install ngrok

確保下面這個執行檔在
ngrok.exe

ngrok-v3-stable-windows-amd64.zip  //這個不用
ngrok.yml //這個看你

下面這兩個則一就好
./ngrok authtoken 2TgnwaFJy8Ez0j07UtssJyAHzQp_RSjTnkAWZDrYCWUGM7Qi
./ngrok config add-authtoken 2TgnwaFJy8Ez0j07UtssJyAHzQp_RSjTnkAWZDrYCWUGM7Qi

./ngrok http 5050

個人網站
**[img](images/index.PNG)**
[![image](img/index.PNG)](img/index.PNG)
[網址名稱](網址)
[Google 搜索](https://www.google.com/search)




//node.js架設伺服器
//移動位置到node資料夾
cd node

//快速設置環境
npm init -f

//安裝模塊
npm install express
npm install node-fetch
    "body-parser": "^1.20.2",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-session": "^1.18.0",
    "jquery": "^3.7.1",
    "public-ip": "^6.0.1",
    "querystring": "^0.2.1"
	請確認 node_modules 資料夾裡頭有 express 子資料夾

//在裡面的script加上
"dev":"nodemon app.js",

//啟動script裡面的dev呼叫nodemon app.js
npm run dev