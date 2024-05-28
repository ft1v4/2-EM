// Cria a classe Cliente
class Cliente{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
    apresentar(documento){
        document.write(` <h1>Nome: ${this.nome}<br>CPF: ${this.cpf}<\h1><br>`);
    }
}
// Cria a classe Pet
class Pet{
    constructor(pet, especie){
        this.pet = pet;
        this.especie = especie;
    }
    apresentar(documento){
        document.write(` <h1>Nome do Pet: ${this.pet}<br>especie: ${this.especie}<\h1><br>`);
    }
}
// Cria a classe Serviço
class Servico{
    constructor(tipo, data_serv, valor){
        this.tipo = tipo;
        this.data_serv = data_serv;
        this.valor = valor;
    }
    apresentar(){
        document.write(` <h1>Tipo de Serviço: ${this.tipo}<br>Data do Serviço: ${this.data_serv}<\h1><br>Valor do Serviço: ${this.valor}<\h1><br>`);
    }
}
// Função Cadastro
function cadastro(){
    metodo_Cliente = new Cliente(document.getElementById("nome").value, document.getElementById("cpf").value);
    metodo_Pet = new Pet(document.getElementById("PET").value, document.getElementById("especie").value);
    metodo_Servico = new Servico(document.getElementById("tipo").value, document.getElementById("data_seryc").value,document.getElementById('valor').value);
}

// Função Consulta
function consulta(){
    metodo_Cliente.apresentar()
    metodo_Pet.apresentar()
    metodo_Servico.apresentar()
}