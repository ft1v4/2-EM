console.log('### ABSTRAÇÃO ###')

/*Abstração*/
class Carro {
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
    }

    ligar(){
        this.ligado= true;
        console.log(`${this.marca} ${this.modelo} esta ligado.`);
    }

   
        desligar() {
            this.ligado=false;
            console.log(`${this.marca} ${this.modelo} está desligado.`)
        }

        acelerar(velocidade){
        if (this.ligado) {
            this.velocidade += velocidade
            console.log(`${this.marca} ${this.modelo} está indo a ${this.velocidade} km/h.`)
        } else {
            console.log(`${this.marca} ${this.modelo} está desligando. Ligue o carro para acelerar.`);
        }

        }
       
        frear() {
            this.velocidade = 0;
            console.log(`${this.marca} ${this.modelo} parou`);
        }
}

let meuCarro = new Carro('Ferrari', 'F40', 'Amarelo');
meuCarro.ligar();
meuCarro.acelerar(50);
meuCarro.acelerar(60);
meuCarro.acelerar(70);
meuCarro.acelerar(80);
meuCarro.frear();
meuCarro.desligar();
////////////////////////////////////////////////////////////////////


console.log('##########################')
console.log('### AGREGAÇÃO ###')

/*Agregação*/

class Roda {
    constructor(tipo){
        this.tipo = tipo
    }

    girar(){
        console.log(`A roda ${this.tipo} esta girando.`)
    }
}



class Veiculo {
    constructor(marca,modelo,numRodas){
        this.marca = marca
        this.modelo = modelo
        this.rodas = []


        
    for (let i = 0; i< numRodas; i++){
        this.rodas.push(new Roda (`Roda ${i+1}`))
    }

    }

}


const meuCarro2 = new Veiculo(`Ferrari`,'F40', 4)
const Roda_insolada = new Roda (`roda isolada`)

meuCarro2.rodas[0].girar()
meuCarro2.rodas[1].girar()
meuCarro2.rodas[2].girar()
meuCarro2.rodas[3].girar()

Roda_insolada.girar()

///////////////////////////////////////////////////////////////////


console.log('##########################')
console.log('### ASSOCIAÇÃO ###')
//ASSOCIAÇÃO//

class Roda2 {
    constructor(tipo){
        this.tipo = tipo
    }

    girar(){
        console.log(`A roda ${this.tipo} esta girando`)
    }
}


class veiculo2 {
    constructor(marca,modelo,rodas){
        this.marca = marca
        this.modelo = modelo
        this.rodas = rodas
    }

    mover(){
        console.log(`O veiculo ${this.marca} ${this.modelo} esta em movimento`)
        this.rodas.forEach(roda =>{
            roda.girar()
        })
    }
}



const minhasRodas = [
    new Roda2('Dianteia Esquerda'),
    new Roda2('Dianteia Direita'),
    new Roda2('Traseira Esquerda'),
    new Roda2('Traseira Direita')
]

const meuCarro3 = new veiculo2('Toyota','Corolla',minhasRodas)
meuCarro3.mover() 
minhasRodas[0].girar()

////////////////////////////////////////////////////////


console.log('##########################')
console.log('### ENCAPSULAMENTO ###')

/*Encapsulamento*/

class Banco {
    #diretoria
    constructor(nome,cnpj,diretoria){
        this.nome = nome
        this.cnpj = cnpj
        this.#diretoria = diretoria
    }
    consulta(){
        console.log(this.nome)
        console.log(this.cnpj)
        console.log(this.#diretoria)
    }
     escrita(novo_diretor){
        this.#diretoria = novo_diretor
     }
}


let consulta_Banco = new Banco('Itau','123.123.123/0001-98', 'Jorge Armando')

/*console.log(consulta_Banco.nome)
console.log(consulta_Banco.cnpj)
console.log(consulta_Banco.diretoria)*/

consulta_Banco.consulta()
consulta_Banco.escrita('Neymar')
consulta_Banco.consulta()
//////////////////////////////////////////////////////////////////////

















console.log('##########################')
console.log('### HERANÇA ###')

//Herança//

class Veiculo3 {
    constructor(marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.ligado = false
    }

    ligar(){
        this.ligado = true
        console.log(`${this.marca} ${this.modelo} esta ligado`)
    }

    desligar (){
        this.ligado = false
        console.log(`${this.marca} ${this.modelo} esta desligado`)
    }
}




class Carro2 extends Veiculo3{
    constructor(marca,modelo,ano,numPortas){
        super(marca,modelo,ano)
        this.numPortas = numPortas
    }

    abrirPortas(){
        console.log(`${this.marca} ${this.modelo} tem ${this.numPortas} portas abertas`)
    }
}


class Moto2 extends Veiculo3{
    constructor(marca,modelo,ano){
        super(marca,modelo,ano)
        this.numPortas = false
    }

    ligarFarol(){
        console.log(`${this.marca} ${this.modelo} ligou o farol`)
    }
}


const meuCarro4 = new Carro2('Fiat','147',2020,4)
meuCarro4.ligar()
meuCarro4.abrirPortas()
meuCarro4.desligar()

const minhaMoto = new Moto2('Honda','CBR 600', 2021)
minhaMoto.ligar()
minhaMoto.ligarFarol()
minhaMoto.desligar()

//////////////////////////////////////////////////////////////////////////////






console.log('##########################')
console.log('### POLIMORFISMO ###')

//Polimorfirmo//
class carro7 {
    constructor(marca,modelo,numPortas){
        this.marca = marca
        this.modelo = modelo
    }

    mover(){
        console.log(`${this.marca} ${this.modelo} esta andando`)
    }


}


class moto7 {
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }

    mover(){
        console.log(`${this.marca} ${this.modelo} esta andando.`)
    }
}


const carroP = new carro7('Toyota','Corolla', 4)
const motoP = new moto7('Honda','Hornet')

carroP.mover()
motoP.mover()

////////////////////////////////////////////////////////////////////////


console.log('##########################')
console.log('### COMPOSIÇÃO ###')


class Roda9 {
    constructor(tipo){
        this.tipo = tipo
    }

    girar(){
        console.log(`A roda ${this.tipo} esta girando`)
    }
}



class Veiculo9 {
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



const meuCarro9 = new Veiculo9('Ferrari','F40',4)
meuCarro9.mover()


console.log('##########################')