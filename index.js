
/*/////////////////////////////////////*/
const text = document.querySelector('#text')
const nomeF = document.querySelector('#nome')
const nomePet = document.querySelector('#nomePet')
const cpf = document.querySelector('#cpf')
const ende = document.querySelector('#endereco')
const tele = document.querySelector('#telefone')
/*////////////////////////////////////*/


const textP = document.querySelector('#textP')
const nomePet2 = document.querySelector('#nomePet2')
const raca = document.querySelector('#raca')
const dataNasc = document.querySelector('#dataNas')


/*Cadastre-se /// Cadastre seu Pet //// Serviço */

function mudar(){
    document.querySelector('#text').id = 'textP'
    document.querySelector('#textP').textContent = 'Cadastre seu Pet'


    document.querySelector('#nomePet').id = 'nomePet2'
    document.querySelector('#nomePet2').placeholder = 'Espécie';

    document.querySelector('#cpf').id =  'raca'
    document.querySelector('#raca').placeholder = 'Raça';

    document.querySelector('#endereco').id = 'dataNas'
    document.querySelector('#dataNas').placeholder = 'Data de Nascimento';
    document.querySelector('#dataNas').type = 'date'

    document.querySelector('#telefone').hidden = true
    document.querySelector('#ser').hidden = false

    

}

function voltar(){
    document.querySelector('#textP').id = 'text'
    document.querySelector('#text').textContent = 'Cadastre-se'


    document.querySelector('#nomePet2').id = 'nomePet'
    document.querySelector('#nomePet').placeholder = 'Nome do Pet';

    document.querySelector('#raca').id =  'cpf'
    document.querySelector('#cpf').placeholder = 'CPF';

    document.querySelector('#dataNas').id = 'endereco'
    document.querySelector('#endereco').placeholder = 'Endereço';
    document.querySelector('#endereco').type = 'text'

    
    document.querySelector('#telefone').hidden = false
    document.querySelector('#ser').hidden = true


}

function voltar2 (){
    document.querySelector('#textF').id = 'text'
    document.querySelector('#text').textContent = 'Cadastre-se'


    document.querySelector('#trampo').id = 'nomePet'
    document.querySelector('#nomePet').type = 'text'

    document.querySelector('#valor').id =  'cpf'
    document.querySelector('#cpf').placeholder = 'CPF';


    document.querySelector('#dataNas').id = 'endereco'
    document.querySelector('#endereco').placeholder = 'Endereço';
    document.querySelector('#endereco').type = 'text'
  

    document.querySelector('#telefone')
    document.querySelector('#ser').hidden = true
}




function tra (){
    document.querySelector('#cliente').id = 'cliente2'
    document.querySelector('#cliente2').textContent = 'teste'

    document.querySelector('#textf').id = 'text'
    document.querySelector('#textF').textContent = 'Serviço'


    document.querySelector('#nome').id = 'teste'
    document.querySelector('#teste').placeholder = 'Serviço'

    document.querySelector('#nomePet2').id = 'trampo'
    document.querySelector('#trampo').type = 'date'

    document.querySelector('#raca').id =  'valor'
    document.querySelector('#valor').placeholder = 'Valor';


    document.querySelector('#dataNas').hidden = true
  

    document.querySelector('#telefone').hidden = true
    document.querySelector('#ser').hidden = true
}








class Pets {
    constructor(nome,esp,racao,dataNasci){
        this.nome = nome
        this.esp = esp
        this.racao = racao
        this.dataNasci = dataNasci
    }

}




function info (){
    


   let n = document.querySelector('#nome').value
   let nP = document.querySelector('#nomePet').value
   let cp = document.querySelector('#cpf').value
   let end = document.querySelector('#endereco').value
   let tel = document.querySelector('#telefone').value
 

   if(n === ''| nP === ''| cp === ''| end === ''|tel === ''){
    document.querySelector('#nome').placeholder = '!COLOQUE SEU NOME!'
    document.querySelector('#nomePet').placeholder = '!COLOQUE O NOME DO SEU PET!'
    document.querySelector('#cpf').placeholder = '!COLOQUE SEU CPF!'
    document.querySelector('#endereco').placeholder = '!COLOQUE SEU ENDEREÇO!'
    document.querySelector('#telefone').placeholder = '!COLOQUE SEU TELEFONE!'
   }if(n != '' | nP != ''| cp != ''| end != ''| tel != ''){
    colocar()
   }

   let back = document.querySelector('.back')
   back.remove()

    let fundo = document.createElement('div')
    fundo.id = 'div'
    
    let cn1 = document.createElement('p')
    cn1.id = 'cN'
   
    let cn2 = document.createElement('p')
    cn2.id = 'cN2'

    let cn3 = document.createElement('p')
    cn3.id = 'cN3'

    let cn4 = document.createElement('p')
    cn4.id = 'cN4'

    let cn5 = document.createElement('p')
    cn5.id = 'cN5'

    fundo.appendChild(cn1)
    fundo.appendChild(cn2)
    fundo.appendChild(cn3)
    fundo.appendChild(cn4)
    fundo.appendChild(cn5)



   let tx = document.createElement('p')
   tx.id = 'titu'
   tx.appendChild(document.createTextNode('Nome'))

   let tx2 = document.createElement('p')
   tx2.id = 'titu2'
   tx2.appendChild(document.createTextNode('Nome do pet'))

   let tx3 = document.createElement('p')
   tx3.id = 'titu3'
   tx3.appendChild(document.createTextNode('CPF'))

   let tx4 = document.createElement('p')
   tx4.id = 'titu4'
   tx4.appendChild(document.createTextNode('Endereço'))

   let tx5 = document.createElement('p')
   tx5.id = 'titu5'
   tx5.appendChild(document.createTextNode('Telefone'))


   fundo.appendChild(tx)
   fundo.appendChild(tx2)
   fundo.appendChild(tx3)
   fundo.appendChild(tx4)
   fundo.appendChild(tx5)


   let imgD = document.createElement('p')

   let im = document.createElement('img')
   im.id = 'imgD'
   im.width = '140'
   im.height = '140'
   im.src = 'img/logoDIV.png'

   imgD.appendChild(im)
   fundo.appendChild(imgD)

   let btnS = document.createElement('button')
   btnS.appendChild(document.createTextNode('Sair'))
   btnS.id = 'sair'
   btnS.onclick = sair
   fundo.appendChild(btnS)




    let body = document.querySelector('body')
    body.appendChild(fundo)
    

    var div2 = document.querySelector('#div').innerHTML.value
    document.querySelector('#cN').innerHTML = n
    document.querySelector('#cN2').innerHTML = nP
    document.querySelector('#cN3').innerHTML = cp
    document.querySelector('#cN4').innerHTML = end
    document.querySelector('#cN5').innerHTML = tel
}





function colocar (){
    let n = document.querySelector('#nome').value
    let nP = document.querySelector('#nomePet').value
    let cp = document.querySelector('#cpf').value
    let end = document.querySelector('#endereco').value
    let tel = document.querySelector('#telefone').value



}


function sair (){
window.location = 'https://www.google.com.br/?hl=pt-BR'  
}

