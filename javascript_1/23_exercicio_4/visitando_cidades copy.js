/*
- Escreva um programa em javascript que peça o nome de um turista

- Pergunte se ele já visitou alguma cidade. 

- Caso a resposta seja sim, 
    - pergunte o nome da cidade e o armazene em uma variável, 
- então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. 
- exibir o nome do turista
, quantas e quais cidades ele visitou.
*/

const nomeTurista = prompt("Digite seu nome:")
let visitouCidade = prompt("Você já visitou alguma cidade? (Sim/Não)")
let listaCidadesVisitadas = []
let nomeCidade = ""
let totalCidades = 0

if(visitouCidade === "sim"){
  while(visitouCidade === "sim"){
    nomeCidade = prompt("Qual o nome da cidade que visitou?")
    listaCidadesVisitadas.push(nomeCidade)    
    totalCidades = listaCidadesVisitadas.length
    visitouCidade = prompt("Você visitou mais cidades? (Sim/Não)")
  }
  alert(
    "Turista: " + nomeTurista + "\n" +
    "Quantidade Cidades: " + totalCidades + "\n" +
    "Cidades visitadas:\n" + listaCidadesVisitadas.join("\n")
  )
} else{  
  alert(nomeTurista + " não visitou nenhuma cidade.")
}