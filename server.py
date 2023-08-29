from flask import Flask, jsonify, request
from flask import render_template

app = Flask(__name__, template_folder="C:/Users/User/Web/WebPractice20230826/templates")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/greeting', methods=['GET'])
def greeting():
    return jsonify(message="Hello from Flask!")

@app.route('/api/name', methods=['POST'])
def get_name():
    data = request.json
    name = data.get('name', '')
    return jsonify(message=f"Hello, {name}!")

if __name__ == "__main__":
    app.run(port=5000)
