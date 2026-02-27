/* 
Uma função que chama ela mesma.
É basicamente uma estrutura de dados de pilha.
A função recursiva é perigosa. 
Precisa se atentar a criar na lógica uma forma dela parar de se chamar.
*/

function dividir(num){
  console.log(num)
  if (num % 2 === 0){
    dividir(num / 2)
  }else{
    return num  
  }
}

// Fatorial de 5: !5 === 5x4x3x2x1
function fatorial(num){
  console.log("Número: " + num)
  if (num > 1){
    console.log(num + " * ! " + (num - 1))
    return num * fatorial(num - 1)
  }else{
    return 1
  }
}

console.log(fatorial(5))