/*

- Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
- exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

*/

const veiculoUm = prompt("Digite o modelo do carro 1:")
const velocidadeCarroUm = parseFloat(prompt("Qual é a velocidade do carro 1:"))
const veiculoDois = prompt("Digite o modelo do carro 2:")
const velocidadeCarroDois = parseFloat(prompt("Qual é a velocidade do carro 2:"))

if(velocidadeCarroUm > velocidadeCarroDois){
  alert("O carro 1: " + veiculoUm + " é mais rápido. " + velocidadeCarroUm + " km/h.")
} else if(velocidadeCarroUm < velocidadeCarroDois){
  alert("O carro 2: " + veiculoDois + " é mais rápido. " + velocidadeCarroDois + " km/h.")
} else{
  alert("A velocidade dos dois carros são iguais.")
}