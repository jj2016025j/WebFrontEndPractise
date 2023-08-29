const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.post('/api/name', (req, res) => {
    const user = req.body.name;
    res.json({ message: `Hello, ${user}!` });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
