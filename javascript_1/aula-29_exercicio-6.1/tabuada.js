/*
Robô da Tabuada:
- Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). - O programa deve começar pedindo o número a ser usado nos cálculos e então 
- salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. 
- Depois o programa deve exibir esses resultados e finalizar.
*/
let numero = prompt("Digite um número para calcular a tabuada:")
let quantideDeVezes = prompt("Digite a quantidade de vezes que deseja calcular a tabuada:")

  while(quantideDeVezes < 10){
    alert("A quantidade de vezes deve ser maior que 10.")
    quantideDeVezes = prompt("Digite a quantidade de vezes que deseja calcular a tabuada:")
  }

for(let i = 0; i <= quantideDeVezes; i++){
  let resultado = numero * i
  //alert(numero + " x " + i + " = " + resultado + "\n")
  console.log(numero + " x " + i + " = " + resultado + "\n")
}
alert("Tabuada finalizada! \nVisualize a tabuada no console. \nAperte F12")