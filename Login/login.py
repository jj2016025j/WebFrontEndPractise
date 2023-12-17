from flask import Flask, request

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    # 提取表單數據
    username = request.form['username']
    password = request.form['password']
    
    # 這裡添加驗證邏輯
    # ...

    return 'Login Successful'  # 可以返回適當的響應

@app.route('/register', methods=['POST'])
def register():
    # 提取註冊表單數據
    username = request.form['username']
    password = request.form['password']

    # 這裡添加用戶註冊的邏輯
    # ...

    return 'Registration Successful'

if __name__ == '__main__':
    app.run(debug=True)
