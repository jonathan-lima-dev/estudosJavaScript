/*Requisitos do sistema: Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair. >>> feito
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
  - Nome do proprietário.
  - Quantidade de quartos.
  - Quantidade de banheiros.
  - Se possui garagem.
  
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

const imoveisCadastrados = []
let quantidadeImoveis = 0
let menu = 0
do{
  menu = parseInt(prompt(
    "Imóveis cadastrados: " + imoveisCadastrados.length + 
    "\n\nDigite a opção desejada:\n1: Cadastrar Imóvel\n2: Mostrar Imóveis\n3: Sair"))
  switch(menu){
    case 1:
      const imovel = {
      nomeProprietario: "",
      quantidadeQuartos: 0,
      quantidadeBanheiros: 0,
      possuiGaragem: ""
      }       
      imovel.nomeProprietario = prompt("Cadastrando imóvel\nDigite o nome do proprietário: ")
      imovel.quantidadeQuartos = parseInt(prompt("Digite a quantidade de quartos: "))
      imovel.quantidadeBanheiros = parseInt(prompt("Digite a quantidade de banheiros: "))
      imovel.possuiGaragem = prompt("Possui garagem? (Sim/Não)")
      imoveisCadastrados.push(imovel)
      quantidadeImoveis = imoveisCadastrados.length      
      break    
    case 2:
      //alert("Imóveis cadastrados: ")
      if(imoveisCadastrados.length === 0){
        alert("Nenhum imóvel cadastrado!")                     
      } else {   
        let listaImoveis = ""          
        for(let i = 0; i < imoveisCadastrados.length; i++){
          listaImoveis += "Imóvel " + (i + 1) + ": \nNome do proprietário: " + imoveisCadastrados[i].nomeProprietario +
                "\nQuantidade de quartos: " + imoveisCadastrados[i].quantidadeQuartos + 
                "\nQuantidade de banheiros: " + imoveisCadastrados[i].quantidadeBanheiros + 
                "\nPossui garagem: " + imoveisCadastrados[i].possuiGaragem + "\n\n"  
        }
        alert(listaImoveis)        
        break
      }  
      break         
    case 3:
      alert("Saindo")
      break
    default:
      alert("Opção inválida")         
  }
} while(menu !== 3)

