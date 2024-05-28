

//Herança//

class Veiculo {
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




class Carro extends Veiculo{
    constructor(marca,modelo,ano,numPortas){
        super(marca,modelo,ano)
        this.numPortas = numPortas
    }

    abrirPortas(){
        console.log(`${this.marca} ${this.modelo} tem ${this.numPortas} portas abertas`)
    }
}


class Moto extends Veiculo{
    constructor(marca,modelo,ano){
        super(marca,modelo,ano)
        this.numPortas = false
    }

    ligarFarol(){
        console.log(`${this.marca} ${this.modelo} ligou o farol`)
    }
}


const meuCarro2 = new Carro('Fiat','147',2020,4)
meuCarro2.ligar()
meuCarro2.abrirPortas()
meuCarro2.desligar()

const minhaMoto = new Moto('Honda','CBR 600', 2021)
minhaMoto.ligar()
minhaMoto.ligarFarol()
minhaMoto.desligar()



