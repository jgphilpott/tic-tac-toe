from flask import Flask, render_template

app = Flask("Tic-Tac-Toe", template_folder="app/pages")

@app.route("/")
def root():
    return render_template("welcome.html")

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0")
