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
