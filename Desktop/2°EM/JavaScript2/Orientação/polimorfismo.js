
//Polimorfirmo//
class carro {
    constructor(marca,modelo,numPortas){
        this.marca = marca
        this.modelo = modelo
    }

    mover(){
        console.log(`${this.marca} ${this.modelo} esta andando`)
    }


}


class moto {
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }

    mover(){
        console.log(`${this.marca} ${this.modelo} esta andando.`)
    }
}


const carroP = new carro('Toyota','Corolla', 4)
const motoP = new moto('Honda','Hornet')

carroP.mover()
motoP.mover()