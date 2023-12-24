from flask import Flask, request, render_template_string

app = Flask(__name__)

HTML = '''
<!DOCTYPE html>
<html>
<head>
    <title>Python Flask表單示例</title>
</head>
<body>
    <h1>歡迎到我的網站</h1>
    {% if username %}
        <p>用戶名: {{ username }}</p>
        <p>密碼: {{ password }}</p>
    {% endif %}
    <form method="post">
        <input type="text" name="username" placeholder="用戶名">
        <input type="password" name="password" placeholder="密碼">
        <input type="submit" value="提交">
    </form>
</body>
</html>
'''

@app.route('/', methods=['GET', 'POST'])
def form_example():
    username = None
    password = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
    return render_template_string(HTML, username=username, password=password)

import socket
from contextlib import closing

def find_free_port():
    with closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as s:
        s.bind(('', 0))
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        return s.getsockname()[1]

if __name__ == '__main__':
    port = find_free_port()
    app.run(debug=True, port=port)
