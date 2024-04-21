const express = require('express');
const app = express();

app.use(express.json()); // 使用 JSON 中间件解析JSON请求体

app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    console.log(`Registering user: ${username}`);
    res.json({ message: 'User registered successfully' });
});

app.listen(5501, () => {
    console.log('Server is running on port 5501');
});
