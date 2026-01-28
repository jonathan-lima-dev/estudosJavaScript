let velocidade = parseFloat(prompt("Digite a velocidade do veículo:"))

do{
  alert("A velocidade do carro é: " + velocidade + " Km/h.")
  velocidade -= 20
  alert("Velocidade reduzida para: " + velocidade + " Km/h.")
} while (velocidade > 0){
  alert("O carro parou.")
}