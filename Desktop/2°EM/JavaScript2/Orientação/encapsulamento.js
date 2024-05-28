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
