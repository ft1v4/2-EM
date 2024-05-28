var navios = new Map()

navios.set('JetSky', 3)
navios.set('Bote', 2)
navios.set('Canoa', 3)
navios.set('Submarino', 2)
navios.set('Titanic', 1)

const url = 'http://127.0.0.1:5000'
function inicio(){
    window.location = '/inicio'
}

function certo(){
    window.location = '/sucesso/<name>'
}

function apertou(){
     axios.post(url,{'coordenada': coordenada} )
 }

function criarTabuleiro(linha,coluna){
    linha = 10
    coluna =10
    tabuleiro = document.querySelector('.tabuleiro')
    tabuleiro.innerHTML = ''
    for(i = 0 ; i < linha; i++){
        let linhas = document.createElement('div')
        linhas.setAttribute('class', 'flex')
        let numeroLinha = document.createElement('div')
        numeroLinha.setAttribute('class', 'linha')
        numeroLinha.textContent = i
        linhas.appendChild(numeroLinha)

        for(j = 0; j <coluna; j++){
            cln = document.createElement('div')
            cln.setAttribute('id', (i + 1 ) + ':'+ (j + 1))
            cln.setAttribute('class', 'block')
            cln.setAttribute('navio', '')
            linhas.appendChild(cln)
        }
        tabuleiro.appendChild(linhas)
        
    }
    celulaClicavel()    
}
criarTabuleiro()


function celulaClicavel(){
    celulas = document.querySelectorAll('.block');
    celulas.forEach(element => {
        
        element.addEventListener('click',function(){

            navio = navioAtual()
            reconhecer(navio,this)
        })
            
        
    });
}


function criarTabuleiroCPU(linha,coluna){
    linha = 10
    coluna =10
    tabuleiro = document.querySelector('.tabuleiro2')
    tabuleiro.innerHTML = ''
    for(i = 0 ; i < linha; i++){
        let linhas = document.createElement('div')
        linhas.setAttribute('class', 'flex')
        let numeroLinha = document.createElement('div')
        numeroLinha.setAttribute('class', 'linha')
        numeroLinha.textContent = i
        linhas.appendChild(numeroLinha)

        for(j = 0; j <coluna; j++){
            cln = document.createElement('div')
            cln.setAttribute('id', (i + 1 ) + ':'+ (j + 1))
            cln.setAttribute('class', 'block')
            linhas.appendChild(cln)
        }
        tabuleiro.appendChild(linhas)
        
    }
}
criarTabuleiroCPU()

function verificar(objeto){
    if(objeto.getAttribute('class') == 'troca'){
            return false
    }else{
            return true
        }

}

function reconhecer(navio,objeto){
    console.log(navio)
    if(verificar(objeto) == true){
        objeto.setAttribute('navio',navio)
        objeto.setAttribute('class','troca' )
        console.log(objeto.id)
        reduzNavio(navio)

    }
        
    else
    {
        alert('voce nao pode posicionar ai')
    }
}

    
    

function reduzNavio(navio){
    navios.set(navio, navios.get(navio) - 1)
}

function navioAtual(){
    bloco = document.querySelectorAll('.block');
   for(var [nomeBarco , quantidade] of navios){
    if (quantidade != 0){
        if (!nomeBarco){
            alert('ja colocou todos')
            bloco.setAttribute('class', 'block')
        }else{
            return nomeBarco
        }
    }
   }
}


