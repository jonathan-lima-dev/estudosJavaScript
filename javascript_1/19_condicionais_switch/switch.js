const nome = prompt("Digite seu nome:")
const idade = prompt("Digite sua idade")
const trabalho = prompt("Você já trabalha? (Sim ou Não)")

if(idade >= 18){
  alert("Você é maior de idade")
} else if(idade >= 12 ){
  alert("Você é menor de idade, mas já é um adolecente.\nComece a pensar no que quer fazer da vida.")
} else if(idade <= 11){
  alert("Você é uma criança, vá brincar!")
}

if(idade >= 18 && trabalho === "sim"){
  const abrirConta = prompt("Você precisa de uma conta bancária? (Sim ou Não)")
    if(abrirConta === "sim"){
      const escolhaBanco = prompt("Qual banco deseja abrir conta?")
      alert("Conta bancária criada no " + escolhaBanco)
    } else {
      escolhaBanco = prompt ("Qual banco você já tem conta?")
      alert("Usuário tem conta no " + escolhaBanco)
    }

    const departamento = parseFloat(prompt(
      "Departanto que vai trabalhar\n" +
      "1: ADM\n" +
      "2: Comercial\n" +
      "3: Gestão de Projetos\n" +
      "4: UI/UX\n" +
      "5: Desenvolvimento\n" +
      "6: QA"
    ))

    switch(departamento){
      case 1: alert("Departamento é ADM.")
      break
      case 2: alert("Departamento é Comercial.")
      break
      case 3: alert("Departamento é Projetos.")
      break
      case 4: alert("Departamento é UI/UX.")
      break
      case 5: alert("Departamento é Desenvolvimento.")
      break
      case 6: alert("Departamento é QA.")
    }
} else {
  alert(nome + " Vai trabalhar, seu desocupado!")
}