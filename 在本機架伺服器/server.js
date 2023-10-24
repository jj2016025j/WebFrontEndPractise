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
document.getElementById('fetchGreeting').addEventListener('click', () => {
    fetch('/api/greeting')
        .then(response => response.json())
        .then(data => {
            document.getElementById('displayGreeting').innerText = data.message;
        });
});

document.getElementById('submitName').addEventListener('click', () => {
    const userName = document.getElementById('userName').value;
    fetch('/api/name', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: userName })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('displayName').innerText = data.message;
    });
});
function changeTextColor() {
    const paragraph = document.getElementById("dynamicText");
    paragraph.style.color = "red";
}
