from flask import Flask, render_template
import sass

app = Flask("Tic-Tac-Toe", template_folder="app", static_folder="app")

@app.route("/")
def root():
    return render_template("pages/welcome.html")

sass.compile(dirname=("app/styles", "app/styles"))

if __name__ == "__main__":
    app.jinja_env.auto_reload = True
    app.run(host="0.0.0.0")
