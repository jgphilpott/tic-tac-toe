import os

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask("Tic-Tac-Toe", template_folder="app", static_folder="app")
app.config["SECRET_KEY"] = os.urandom(42).hex()

@app.route("/")
def root():
    return render_template("pages/welcome.html")

@app.route("/human-options")
def HVH():
    return render_template("pages/HVH.html")

@app.route("/computer-options")
def HVC():
    return render_template("pages/HVC.html")

@app.route("/local-game")
def LOC():
    return render_template("pages/LOC.html")

@app.route("/lobby")
def LOB():
    return render_template("pages/LOB.html")

@app.route("/online-game")
def NET():
    return render_template("pages/NET.html")

@app.route("/human-first-game")
def MAN():
    return render_template("pages/MAN.html")

@app.route("/computer-first-game")
def COM():
    return render_template("pages/COM.html")

socketio = SocketIO(app)
clients = 0

@socketio.on("connect")
def connect():
    global clients
    clients += 1
    emit("clientConnect", clients, broadcast=True)

@socketio.on("disconnect")
def disconnect():
    global clients
    clients -= 1
    emit("clientDisconnect", clients, broadcast=True)

if __name__ == "__main__":
    socketio.run(app, debug=True)
