import os

from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask("Tic-Tac-Toe", template_folder="app", static_folder="app")
app.config["SECRET_KEY"] = os.urandom(42).hex()
socketio = SocketIO(app)

@app.route("/")
def root():
    return render_template("pages/welcome.html")

@socketio.on("connect")
def connect():
    print("connected")

@socketio.on("disconnect")
def disconnect():
    print("disconnected")

@socketio.on("message")
def message(msg):
	print(msg)

if __name__ == "__main__":
    socketio.run(app, debug=True)
