import os

from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask("Tic-Tac-Toe", template_folder="app", static_folder="app")
app.config["SECRET_KEY"] = os.urandom(42).hex()
socketio = SocketIO(app)

@app.route("/")
def root():
    return render_template("pages/welcome.html")

@app.route("/HVH")
def HVH():
    return render_template("pages/HVH.html")

@app.route("/HVC")
def HVC():
    return render_template("pages/HVC.html")

@app.route("/LOC")
def LOC():
    return render_template("pages/LOC.html")

@app.route("/NET")
def NET():
    return render_template("pages/NET.html")

@app.route("/MAN")
def MAN():
    return render_template("pages/MAN.html")

@app.route("/COM")
def COM():
    return render_template("pages/COM.html")

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
