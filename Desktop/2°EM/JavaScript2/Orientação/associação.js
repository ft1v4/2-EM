//ASSOCIAÇÃO//

class Roda {
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
    new Roda('Dianteia Esquerda'),
    new Roda('Dianteia Direita'),
    new Roda('Traseira Esquerda'),
    new Roda('Traseira Direita')
]

const meuCarro3 = new veiculo2('Toyota','Corolla',minhasRodas)
meuCarro3.mover() 
minhasRodas[0].girar()
