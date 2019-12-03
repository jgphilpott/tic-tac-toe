from flask import Flask

app = Flask("Tic-Tac-Toe")

@app.route("/")
def root():
    return "Welcome to Tic-Tac-Toe!"

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0")
