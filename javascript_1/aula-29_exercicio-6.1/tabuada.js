/*
Robô da Tabuada:
- Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). - O programa deve começar pedindo o número a ser usado nos cálculos e então 
- salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 
- Depois o programa deve exibir esses resultados e finalizar.
*/
let numero = parseFloat(prompt("Digite um número para calcular a tabuada:"))

for(let i = 0; i <= 20; i++){
  let resultado = numero * i
  console.log(numero + " x " + i + " = " + resultado + "\n")
}
alert("Tabuada finalizada! Visualize a tabuada no console.")