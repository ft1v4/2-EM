function enviar(){
    valor = document.getElementById('input').value
    URL = 'http://127.0.0.1:5000/fiote/'+ valor
    window.location.href = URL
}



function enviar2(){
    valor2 = document.getElementById('input2').value
    valor3 = document.getElementById('sobrenome').value
    URL2 = 'http://127.0.0.1:5000/fioteft/'+ valor2 +'/' + valor3
    window.location.href = URL2
}