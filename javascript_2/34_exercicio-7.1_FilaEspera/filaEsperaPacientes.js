/* Exercício 7-1: 
>>> Separando problema inteiro em pequenos problemas para facilitar a lógica de desenvolvimento.

- Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
- O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
- O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), 
- “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, 
- e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/


let filaPacientes = []
let opcaoMenu = 0
let nomePaciente = ""

function mostrarFila(){
let filaCompleta = ""
      for(let i = 0; i < filaPacientes.length; i++){
        filaCompleta += (i + 1) + "º " + filaPacientes[i] + "\n"    
      }
      alert(filaCompleta)
}

do {
  opcaoMenu = parseInt(prompt("Escolha uma opção:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair")) 
  switch (opcaoMenu) {
    case 1:          
      nomePaciente = prompt("Digite o nome do paciente:")
      filaPacientes.push(nomePaciente)
      mostrarFila()
      //alert("Fila de pacientes:\n " + filaPacientes)
      //let filaCompleta = ""
      //for(let i = 0; i < filaPacientes.length; i++){
      //  filaCompleta += (i + 1) + "º " + filaPacientes[i] + "\n"        
      //}
      //alert(filaCompleta)
        break   
    case 2:      
      if (filaPacientes.length > 0){
        alert("Chamando paciente: " + filaPacientes[0])
        filaPacientes.shift()      
        mostrarFila()  
      //alert("Fila de pacientes:\n " + filaPacientes)
      } else {
        alert("A fila de pacientes vazia.")
      }        
        break
    case 3:
      alert("Saindo")
        break
    default:
      alert("Opção inválida")
  }
} while (opcaoMenu != 3)
    