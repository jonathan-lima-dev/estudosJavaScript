/*
- Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
- O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, 
- a última opção deve ser a opção “Encerrar”. 
- Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida 
- e depois o programa deve exibir novamente o menu com as 5 opções. 
- Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

do {  
  let menu = parseFloat(prompt(
    "Menu Interativo:\n\n" +
    "1 - Início\n" +
    "2 - Cadastros\n" +
    "3 - Vendas\n" +
    "4 - Financeiro\n" +
    "5 - Encerrar\n\n" +
    "Escolha uma opção de 1 a 5\n"    
  ))

  switch(menu){
    case 1: alert("Você está na página Início.")
    break
    case 2: alert("Você está na página Cadastros.")
    break
    case 3: alert("Você está na página Vendas.")
    break
    case 4: alert("Você está na página Financeiro.")
    break
    case 5: alert("Você está encerrando o sistema.")
  }  
} while(menu != 5){
  alert("Sistema finalizado!")
}
