function colocar(num) {
    var numero = document.getElementById('digito').innerHTML;
    document.getElementById('digito').innerHTML = numero + num;
   
}

function limpar() {
    document.getElementById('digito').innerHTML = "";
}

function apagar() {
    var resultado = document.getElementById('digito').innerHTML;
    document.getElementById('digito').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    
    var resultado = document.getElementById('digito').innerHTML;
    if (resultado) {
        document.getElementById('digito').innerHTML = eval(resultado)
    }
    else {
        document.getElementById('digito').innerHTML = ""
    }

}


function raiz(){
    var resultado = document.getElementById('digito').innerHTML;
    resultado = (Math.sqrt(resultado))
    document.getElementById('digito').innerHTML = resultado
}

function desligar() {

    const telaT = document.querySelector('#tela')
    const off = document.querySelector('#off')

    off.style.background = 'green'
    off.textContent = 'ON'
    telaT.style.background = 'black'
    limpar()
    off.addEventListener('click', ()=>{
        off.style.background = 'red'
        off.textContent = 'OFF'
        telaT.style.background = 'white'

    })


}

