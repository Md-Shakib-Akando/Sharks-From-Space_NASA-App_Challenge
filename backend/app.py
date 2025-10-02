from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)


@app.route("/swot-data")
def swot_data():
    if os.path.exists("data.json"):
        with open("data.json") as f:
            data = json.load(f)
        return jsonify(data)
 
@app.route("/pace-data")
def pace_data():
    if os.path.exists("color.json"):
        with open("color.json") as f:
            data = json.load(f)
        return jsonify(data)


if __name__ == "__main__":
    app.run(port=5000, debug=True)
