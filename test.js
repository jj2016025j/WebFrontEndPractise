fetch('https://example.com/nonexistentpage')
    .then(response => {
        if (!response.ok) {
            if (response.status === 404) {
                console.error('Error 404: Not Found');
            }
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));




fetch('https://example.com/server-error', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` // 用实际的 API 密钥替换
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": `` }],
        temperature: 0.7,
        max_tokens: 1
    })
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching server error page:', error);
    });
