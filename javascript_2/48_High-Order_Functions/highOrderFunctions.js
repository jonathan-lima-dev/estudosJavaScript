/* 
É uma função que recebe outra função com parâmetro.

*/
function calcular(a, b, operacao){
  console.log("realizando uma operação")
  const resultado = operacao(a, b) // isso é a chamada de uma função dentro da outra função
  return resultado
}

function somar(x, y){
  console.log("Realizando uma soma.")
  return x + y
}

console.log(calcular(2, 3, somar))

console.log(calcular(8, 4, function (x, y){
  console.log("Realizando uma subtração.")
  return x - y
}))

function exibirElemento(elemento, indice, array){
  console.log({ 
    elemento, indice, array
  })
}
const lista = ["maça", "pera", "uva", "laranja", "banana", "morango"]
// for(let i = 0; i < lista.length; i++){
//   exibirElemento(lista[i], i, lista)
// }

lista.forEach(exibirElemento)

lista.forEach(
  function (elemento, indice, array){
  console.log({ 
    elemento, indice, array
  })
})
  