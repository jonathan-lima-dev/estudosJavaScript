/* Métodos são funções atreladas a objetos 

*/

let pessoa = {
  nome: "Jonathan",
  idade: 22,

  falar() { // não precisa inserir a palavra FUNCTION
  console.log("Olá mundo! Meu nome é " + this.nome + " e tenho " + this.idade + " anos.") 
  //O this (este obejto) serve para referenciar a propriedade dentro do obejto.
  }
}

console.log(pessoa)
pessoa.falar()
