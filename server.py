from flask import Flask, render_template, request, jsonify
import requests
import threading
import webbrowser
import os
import openai
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# def open_browser():
#       webbrowser.open_new('http://127.0.0.1:5000/')

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    # if os.environ.get('WERKZEUG_RUN_MAIN') == 'true':
    #     threading.Timer(0, open_browser).start()
    app.run(debug=True,port=5050)