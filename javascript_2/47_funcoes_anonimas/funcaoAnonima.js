/* 
É uma função que não tem nome.
Transformar valores de variáveis em funções, torna a própria variável em uma função anonimamente.
*/

function somar(a, b){
  return a + b
}

let operacao = somar //isso torna a variável uma função anônima.

console.log(operacao(2, 3))

//isso é exatamente uma função anônima:
// é obrigatório que a função esteja dentro de uma variável.
const subtrair = function (a, b){ //inserindo anonimamente a função no valor da variável.  
  return a - b
}

console.log(subtrair(2, 3))

// também é possível mudar o valor da variável de uma função:
operacao = function(a, b){
  return a * b
}

console.log(operacao(2, 3))

// INFORMAÇÃO IMPORTANTE: funções padrões podem ser chamadas antes da execução do código, já as anônimas, não. Elas só passam a executar depois da declaração.

/*
isso não funciona, mas o contrário sim:
oiMundo()
const oiMundo = function(){
  console.log("oi mundo")
}
*/



