/*  
Variáveis externas podem ser utilizadas em escopos internos, como variável global sendo chamada dentro de uma função.

OBS: Não é sempre que uma variável global vai funcionar logicamente falando de uma maneira exata em um escopo interno.
*/

const numero = parseInt(prompt("Digite um número:")) //variável de escopo global
const quantidadeMultiplicacao = parseInt(prompt("Digite a quantidade de multiplicações:")) //variável de escopo global

//const resultado = 0;
console.log("Tabuada do " + numero);
for (let i = 0; i <= quantidadeMultiplicacao; i++) {
  const resultado = numero * i
  console.log(numero + " x " + i + " = " + resultado);
}