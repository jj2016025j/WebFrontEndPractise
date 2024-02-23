
// 從 URL 參數中獲取秒數，並轉換成毫秒
const delaySeconds = parseInt(5, 10);//轉換成十進位制的整數串 (要轉的字串或參數, 進位制)
const delayMilliseconds = delaySeconds * 1000;//把秒數轉換成電腦用的1:1000的時間

// 非阻塞的延遲 1 秒，後發送回應
setTimeout(() => {
    response.send("Hello after " + delaySeconds + " seconds!");
}, delayMilliseconds);

const stopTime = new Date().getTime() + delayMilliseconds;//現在時間Date().getTime()

// 模擬程式延遲
while (new Date().getTime() < stopTime) {//現在時間<設定的時間
    // 延遲迴圈，不做任何操作
}