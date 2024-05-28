from flask import Flask, redirect, url_for, request 
app = Flask(__name__)


@app.route('/success/<name>')
def success(name):
    return 'Welcome '+name


@app.route('/error')
def error():
    return 'ERRO'


@app.route('/login',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['nm']
        senha = request.form['senha']
        if user == 'Fiote' and senha == '123':
            return redirect(url_for('success',name = user ))
        else:
            return redirect(url_for('error'))
    
    
    
app.run(debug=True)


