// text-davinci-002
//openai.js
function sendMessage(sendToGpt = false) {
    let inputField = document.getElementById('input');
    let message = inputField.value;
    inputField.value = '';
    document.getElementById('chatbox').innerHTML += `<div>訪客: ${message}</div>`;
    sendMessageToGpt(message, sendToGpt)//如果不要就設false
}

function sendMessageToGpt(message, sendToGpt = false) {
    // 调用 OpenAI API
    if (!sendToGpt)
        return
    let OPENAI_API_KEY
    fetch('../json/config.json')
        .then(response => response.json())
        .then(OPENAI_API_Data => {
            console.log(OPENAI_API_Data)
            OPENAI_API_KEY = OPENAI_API_Data.OPENAI_API.OPENAI_API_KEY
            fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}` // 用实际的 API 密钥替换
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ "role": "user", "content": `${message}` }],
                    temperature: 0.7,
                    max_tokens: 1
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // 提取 GPT 响应
                    let gptResponse = data.choices[0].message.content.trim();
                    document.getElementById('chatbox').innerHTML += `<div>GPT: ${gptResponse}</div>`;
                })
                .catch(error => console.error('Error:', error));
            console.log(OPENAI_API_KEY)
        })
        .catch(error => {
            console.error('Error fetching config JSON:', error);
            // 可以在这里处理错误，比如显示一个错误消息
        });


}

export { sendMessage, sendMessageToGpt };