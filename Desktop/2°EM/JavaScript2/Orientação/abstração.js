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
