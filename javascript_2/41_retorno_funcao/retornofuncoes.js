//para o return funcionar, a função precisa estar dentro de uma variável?
function calcularmedia(a, b){
  const media = (a + b) / 2
  return media // o retorno recebe variável que faz o cálculo.
}
// é possível utilizar o retorno direto.
alert("A média é " + calcularmedia(10, 30))
// Retornando e alocando o resultado em um endereço de memória.
const resultado = alert("A média é " + calcularmedia(10, 30))

//o retorno já recebe o cálculo diretamente 
function areaRetangular(base, altura){
  return base * altura 
}
alert("A área do retângulo é " + areaRetangular(10, 20))

// chamando uma função dentro de outra:
function areaQuadrado(lado){
  return areaRetangular(lado, lado) //executa esta função primeiro
}
alert("A área do quadrado é " + areaQuadrado(10))

// funções só retornam uma única vez. Todo o código deve estar antes do return.

// função com mais de um return:

// 2: executando a função:
function calcularMaiorIdade(idade){
  if(idade >= 18){
    return "Maior de idade" //se for maior de idade retorna aqui.
  } else{
    return "Menor de idade" //se não, retorna aqui.
  }
}
// 1: chamando a função primeiro:
alert(calcularMaiorIdade(idade = parseInt(prompt("Digite sua idade"))))