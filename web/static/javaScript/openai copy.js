async function sendMessageToGpt(config = {}) {
    const {
        url = 'http://localhost:1234/v1', // 本地服务器 URL
        OPENAI_API_KEY = 'not-needed', // 默认 API 密钥
        model = 'local-model', // 默认模型
        messages = [
            { "role": "system", "content": "你是一個主要說繁體中文的語音助理" },
            { "role": "user", "content": "說一段英文跟一段中文的自我介紹" }
        ],
        systemPrompt = '你是一個主要說繁體中文的語音助理',
        userMessage = "回覆我這是一個測試",
        temperature = 0.7,
        max_tokens = 500,
    } = config;

    // 构建消息数组
    const messageArray = messages || [
        { "role": "system", "content": systemPrompt },
        { "role": "user", "content": userMessage }
    ];
    const headers = {
        'Content-Type': 'application/json'
    } || {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                model,
                messages: messageArray,
                temperature,
                max_tokens
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // 打印 GPT 回复的内容
        const gptResponse = data.choices[0].message.content.trim();
        document.getElementById('chatbox').innerHTML += `<div>GPT: ${gptResponse}</div>`;
    } catch (error) {
        console.error('Error fetching OpenAI completion:', error);
        document.getElementById('chatbox').innerHTML += `<div>Error: 無法從 GPT 獲得回應。</div>`;
    }
}





//讀取密鑰後訪問gpt
function fetchConfigAndSendMessage(message) {
    fetch('../static/json/config.json')
        .then(response => response.json())
        .then(Data => {
            const OPENAI_API_KEY = Data.OPENAI_API.OPENAI_API_KEY;
            queryOpenAI(OPENAI_API_KEY)

            // sendMessageToGpt({
            //     url: 'https://api.openai.com/v1/chat/completions',
            //     OPENAI_API_KEY: OPENAI_API_KEY,
            //     model: 'gpt-3.5-turbo',
            //     temperature: 0.7,
            //     max_tokens: 1,
            //     userMessage: message
            // })
        })
        .catch(error => {
            console.error('Error fetching config JSON:', error);
            document.getElementById('chatbox').innerHTML += `<div>Error: 無法讀取配置文件。</div>`;
        });
}

async function queryOpenAI(OPENAI_API_KEY) {
    const url = 'https://api.openai.com/v1/chat/completions';

    const data = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": "Who won the world series in 2020?"
            }
        ],
        max_tokens: 1,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        // 处理响应数据
    } catch (error) {
        console.error('Error:', error);
    }
}


//這個可以用
async function fetchChatCompletion() {
    const url = 'http://localhost:1234/v1/chat/completions';
    const data = {
        messages: [
            { "role": "system", "content": "Always answer in rhymes." },
            { "role": "user", "content": "Introduce yourself." }
        ],
        temperature: 0.7,
        max_tokens: -1,
        stream: false
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const gptResponse = result.choices[0].message.content.trim();
        document.getElementById('chatbox').innerHTML += `<div>GPT: ${gptResponse}</div>`;

        // 处理响应数据
    } catch (error) {
        console.error('Error fetching chat completion:', error);
    }
}


// 处理流式响应
const reader = response.body.getReader();
document.getElementById('chatbox').innerHTML += `<div id="newchat">GPT: </div>`;

while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    // 处理接收到的数据块
    const chunk = new TextDecoder().decode(value);
    const result = JSON.parse(chunk)
    const gptResponse = result.choices[0].message.content.trim();

    console.log(gptResponse); // 打印接收到的数据块

    document.getElementById('newchat').textContent += gptResponse;

    // 更新 UI
}
const result = await response.json();
const gptResponse = result.choices[0].message.content.trim();
document.getElementById('chatbox').innerHTML += `<div>GPT: ${gptResponse}</div>`;
if (jsonData.choices && jsonData.choices.length > 0) {

    "data: {\"id\":\"chatcmpl-g00y9gguk3uvsc9s2ssof\",\"object\":\"chat.completion.chunk\",\"created\":1704095258,\"model\":\"C:\\\\Users\\\\User\\\\.cache\\\\lm-studio\\\\models\\\\TheBloke\\\\CodeLlama-7B-Instruct-GGUF\\\\codellama-7b-instruct.Q4_K_S.gguf\",\"choices\":[{\"index\":0,\"delta\":{\"role\":\"assistant\",\"content\":\"\\n\"},\"finish_reason\":null}]}\n\n"

    systemPrompt = '你是一個主要說繁體中文的語音助理',
        userMessage = "回覆我這是一個測試",

        // 处理流式响应
        const reader = response.body.getReader();
    let accumulatedChunks = '';
    let text = '';

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        accumulatedChunks += new TextDecoder().decode(value);

        // 尝试解析累积的数据块
        try {
            // 检查和清理数据
            const cleanData = accumulatedChunks.trim();
            if (cleanData.startsWith("data: ")) {
                accumulatedChunks = cleanData.substring(6); // 移除非 JSON 部分
            }

            const jsonData = JSON.parse(accumulatedChunks);
            const gptResponse = jsonData.choices[0].delta.content;

            text += gptResponse;
            console.log(text); // 打印累积的文本

            // 处理 jsonData
            accumulatedChunks = ''; // 重置累积的数据块
        } catch (e) {
            // 如果解析失败，继续累积数据块
        }
    }