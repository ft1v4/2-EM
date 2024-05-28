from flask import Flask, render_template,redirect, url_for,request
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['name']
        senhaC = request.form['senha']
        if user == '' and senhaC == '':
            return redirect(url_for('erro'))
        else:
            return redirect(url_for('sucesso', name = user))
        
@app.route('/erro')
def erro():
    return 'BURRO'

@app.route('/sucesso/<name>')
def sucesso(name):
    return render_template('certo.html', name = name)

@app.route('/inicio')
def inicio():
    return render_template('login.html')





app.run(debug=True)