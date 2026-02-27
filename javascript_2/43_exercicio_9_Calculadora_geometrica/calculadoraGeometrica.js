function calcularTriangulo(){
  const base = parseFloat(prompt("Digite a base: "))
  const altura = parseFloat(prompt("Digite a altura: ")) 
  return (base * altura) / 2
}

function calcularRetangulo(){
  const base = parseFloat(prompt("Digite a base: "))
  const altura = parseFloat(prompt("Digite a altura: "))
  const resultado = base * altura
  if((base !== 0 || altura !== 0) || (base !== altura)){     
      return resultado
    } else {
    alert("Um retângulo não pode ter lados iguais ou nulos")  
  }
}

function calcularQuadrado(){
  const lado = parseFloat(prompt("Digite o lado: "))
  if(lado !== 0){    
    return lado * lado
  } else{
    alert("Um quadrado não pode ter lados iguais ou nulos")
  }  
}

function calcularTrapezio(){
  const baseMaior = parseFloat(prompt("Digite a base maior: "))
  const baseMenor = parseFloat(prompt("Digite a base menor: "))
  const altura = parseFloat(prompt("Digite a altura: "))  
  return ((baseMaior + baseMenor) * altura) / 2
}

function calcularCirculo(){
  const raio = parseFloat(prompt("Digite o raio: "))
  let pi = 3.14   
  return pi * (raio * raio)
}

function exibirMenu(){  
  return parseInt(prompt(
    "Calculadora de áreas." +
    "\n\nEscolha uma opção:" +
    "\n1 - Triângulo" +
    "\n2 - Retângulo" +
    "\n3 - Quadrado" +
    "\n4 - Trapézio" +
    "\n5 - Círculo" +
    "\n0 - Sair\n"
  ))
}
function executar(){
    let menu = 0
    do {    
    menu = exibirMenu()

    switch(menu){
      case 1: //area do triângulo      
        alert("A área do triângulo é: " + calcularTriangulo())
        break
      case 2: //area do retângulo    
        alert("A área do retângulo é: " + calcularRetangulo())              
        break
      case 3: //area do quadrado       
        alert("A área do quadrado é: " + calcularQuadrado())     
        break 
      case 4: //area do trapézio   
        alert("A área do trapézio é: " + calcularTrapezio())
        break
      case 5: //area do círculo
        alert("A área do círculo é: " + calcularCirculo())
        break
      case 0:
        alert("Saindo")
        break
      default:
        alert("Opção inválida")
        break      
    }
  } while(menu !== 0)
}
executar()

