from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    print(f'Username: {username}, Password: {password}')

    user = {'username': username, 'password': password}

    # 儲存到 JSON 文件
    if not os.path.isfile('users.json'):
        # 文件不存在，創建文件並寫入
        with open('users.json', 'w') as file:
            json.dump([user], file)
    else:
        # 文件存在，讀取內容並添加新數據
        with open('users.json', 'r+') as file:
            users = json.load(file)
            users.append(user)
            file.seek(0)
            json.dump(users, file)

    return jsonify({'status': 'success', 'username': username})

if __name__ == '__main__':
    app.run(debug=False)
