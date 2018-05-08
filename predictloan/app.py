from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/predictloan', methods=['POST'])
def run_model():
  print(request.get_json())
  return jsonify({"status":201}), 201

if __name__ == '__main__':
    app.run()
