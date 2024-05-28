from flask import  Flask
app = Flask(__name__)

@app.route('/login')
def home():
    return 'Ola seja bem vindo ao nosso website'

app.run()