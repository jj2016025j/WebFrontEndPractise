// 這個函數會發送請求到 OpenAI API
function callOpenAI2() {
    const promptText = "Translate the following English text to French: Hello, how are you?";
    const data = {
        prompt: promptText,
        max_tokens: 60
    };

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ', // 將 YOUR_API_KEY 替換成您的 API 密鑰
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('response').textContent = data.choices[0].text;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function callOpenAI() {
    const data = {
        model: "text-davinci-002", // 或者使用其他模型
        messages: [{ role: "user", content: "Translate 'Hello, how are you?' to French." }]
    };

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        if (data.choices && data.choices.length > 0) {
            document.getElementById('response').textContent = data.choices[0].message.content;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
