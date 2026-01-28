/*
Crie um programa que receba a velocidade de um carro e enquanto a velodade for maior do que zero, exiba a velocidade do carro na tela. Quando a velocidade for menor do que zero, informe que o carro parou.
*/

let velocidade = parseFloat(prompt("Digite a velocidade do carro"))

while(velocidade > 0){
  alert("Velocidade do carro é: " + velocidade + " km/h")
  velocidade -= 20
  alert("Diminuindo velocidade para " + velocidade + " km/h")
}

alert("O carro parou!")