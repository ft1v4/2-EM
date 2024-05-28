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