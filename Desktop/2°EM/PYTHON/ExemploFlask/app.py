from flask import Flask , render_template, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/fiote/<name>')
def fiote(name):
    return render_template('fiote.html', name = name)

@app.route('/links')
def links():
    return render_template('links.html')


@app.route('/variaveis/<name>')
def variaveis(name):
    return render_template('variaveis.html', name = name)


@app.route('/fioteft/<name>/<sobrenome>')
def fioteft(name, sobrenome):
    return render_template('fioteft.html', name = name , sobrenome = sobrenome)


app.run(debug=True)