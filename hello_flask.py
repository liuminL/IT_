from flask import Flask

app = Flask('my_web_app')

@app.route('/')
def hello():
    return '<h1>Hello Flask</h1>'

app.run()
