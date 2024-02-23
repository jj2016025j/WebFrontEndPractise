// 這個可以用POSTMAN解決
const fetch = require('node-fetch');

const response = await fetch('http://localhost:1234/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer not-needed'  // 使用实际的 API 密钥
    },
    body: JSON.stringify({
        model: "local-model",  // 这个字段目前未使用
        messages: [
            { "role": "system", "content": "你是一個主要說繁體中文的語音助理" },
            { "role": "user", "content": "跟我講一些關於llm的基礎知識" }
        ],
        temperature: 1,
        max_tokens: 100
    })
});

if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
res.send(data.choices[0].message.content);

