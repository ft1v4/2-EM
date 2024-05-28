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


const meuCarro = new Veiculo(`Ferrari`,'F40', 4)
const Roda_insolada = new Roda (`roda isolada`)

meuCarro.rodas[0].girar()
meuCarro.rodas[1].girar()
meuCarro.rodas[2].girar()
meuCarro.rodas[3].girar()

Roda_insolada.girar()