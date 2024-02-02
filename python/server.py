from flask import Flask, render_template  # 导入 render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5050"}})# 这将允许所有来源的跨域请求

# def open_browser():
#       webbrowser.open_new('http://127.0.0.1:5000/')

# if __name__ == '__main__':
#     # if os.environ.get('WERKZEUG_RUN_MAIN') == 'true':
#     #     threading.Timer(0, open_browser).start()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/login.html')
def login():
    return render_template('login.html')

@app.route('/payFinish.html')
def pay_finish():
    return render_template('payFinish.html')

@app.route('/portfolio.html')
def portfolio():
    return render_template('portfolio.html')

@app.route('/productInfo.html')
def product_info():
    return render_template('productInfo.html')

@app.route('/shoppingCar.html')
def shopping_car():
    return render_template('shoppingCar.html')

@app.route('/shoppingCarPay.html')
def shopping_car_pay():
    return render_template('shoppingCarPay.html')

@app.route('/signup.html')
def signup():
    return render_template('signup.html')

@app.route('/store.html')
def store():
    return render_template('store.html')

@app.route('/test.html')
def test():
    return render_template('test.html')

@app.route('/tool.html')
def tool():
    return render_template('tool.html')

@app.route('/gpt.html')
def gpt():
    return render_template('gpt.html')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(405)
def method_not_allowed_error(error):
    return render_template('405.html'), 405

if __name__ == '__main__':
    app.run(debug=True,port=5050)
    