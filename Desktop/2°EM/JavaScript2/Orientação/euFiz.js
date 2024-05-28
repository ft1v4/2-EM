///Encapsulamento

class rotina {
    #primeiraAçao
    #segundaAçao
    #terceiraAçao
    #quartaAçao
    #quintaAçao
    constructor (primeiraAçao,segundaAçao,terceiraAçao,quartaAçao,quintaAçao){
        this.#primeiraAçao = primeiraAçao
        this.#segundaAçao = segundaAçao
        this.#terceiraAçao = terceiraAçao
        this.#quartaAçao = quartaAçao
        this.#quintaAçao = quintaAçao
    }

    começar(){
        console.log(`A primeira coisa que faço na minha rotina é ${this.#primeiraAçao} depois eu vou ${this.#segundaAçao} logo após vou ${this.#terceiraAçao} termino e vou ${this.#quartaAçao} para poder ${this.#quintaAçao}`)
    }
}
const fiote = new rotina ('Acordar','Comer','Tomar Banho','Trocar','Sair')

console.log(fiote.começar())


class Alimentação{
     primeiroAlimento
     segundoAlimento
     terceiroAlimento
     quartoAlimento
     
     constructor(primeiroAlimento,segundoAlimento,terceiroAlimento,quartoAlimento){
        this.primeiroAlimento = primeiroAlimento
        this.segundoAlimento = segundoAlimento
        this.terceiroAlimento = terceiroAlimento
     }

     comer(){
        console.log(`Começo a comer ${this.primeiroAlimento} depois eu tomei ${this.segundoAlimento} e terminei com um ${this.terceiroAlimento}`)
     }
}
const fioteA = new Alimentação('Pão','Leite com achocolatado','Pão de Queijo')

console.log(fioteA.comer())
///////////////////////////////////////////////////////////////////////////////////////////


/*Polimorfismo*/
class Animal {
    constructor(nome){
        this.nome = nome
    }
    som(){
        console.log(`O ${this.nome} faz um som`)
    }
}

class gatos extends Animal{
    som(){
        console.log(`${this.nome} mia`)
    }
}

class cachorros extends Animal{
    som(){
        console.log(`${this.nome} late`)
    }
}

const cachorro = new cachorros('Paçoca');
console.log(cachorro.som())

const gato = new gatos('Lua');
console.log(gato.som())

///////////////////////////////////////////////////


/*Abstração*/
class Pastel {
    constructor(massaPastel, recheioPastel,) {
        this.massaPastel = massaPastel
        this.recheioPastel = recheioPastel
    }
 
    montagem() {
     console.log(`pego a ${this.massaPastel} coloco ${this.recheioPastel} e ja era`)
    }
}
 

  const pastel = new Pastel('massa do pastel', 'frango');
console.log(pastel.montagem())
//////////////////////////


//Herança//

class Pai {
    constructor(dinheiro){
        this.dinheiro = dinheiro
    }
}

class filho extends Pai{
    constructor(divida){
        this.divida = divida
        super(Pai)
    }
}

////////////////////////////////////





/*Associação*/

class pessoa  {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    falar() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
  };

  class animal  {
    constructor(nome){
        this.nome = nome
    }
    latir() {
      console.log(`${this.nome} esta latindo`);
    }
  };

class Associação {
    fiote = new pessoa('Fiote',16)
    paçoca= new animal('Paçoca')
}

/////////////////////////////////////////////////////////////


/*Agregaçao*/

class geladeira {
    constructor(marca){
        this.marca = marca
    }

    gelar(){
        console.log(`A geladeira da marca ${this.marca} esta gelando`)
    }
}

class carne {
    constructor(tipo){
        this.tipo = tipo
    }

    congelando(){
        console.log(`A sua ${this.tipo} esta congelando`)
    }
}

 const electrolux = new geladeira('electrolux')
 const picanha = new carne('picanha')

function Agregação(){
    electrolux.gelar()
    picanha.congelando()
}

Agregação()

/////////////////////////////////


/*Composição*/
class Roda {
    constructor(tipo){
        this.tipo = tipo
    }

    girar(){
        console.log(`A roda ${this.tipo} esta girando`)
    }
}



class Veiculo {
    constructor(marca,modelo,numRodas){
        this.marca = marca
        this.modelo = modelo
        this.roda = []


        for (let i = 0; i < numRodas; i++){
            this.roda.push(new Roda (`Roda ${i + 1}`))
        }
    }
    
    mover(){
        console.log(`O veiculo ${this.marca} ${this.modelo} esta em movimento`)
        this.roda.forEach(roda =>{
            roda.girar()
        })
    }

}



const meuCarro = new Veiculo('Ferrari','F40',4)
meuCarro.mover()