const idade = prompt("Digite sua idade")
const trabalho = prompt("Você já trabalha? (Sim ou Não)")

if(idade >= 18){
  alert("Você é maior de idade")
} else if(idade >= 12 ){
  alert("Você é menor de idade, mas já é um adolecente")
} else if(idade <= 11){
  alert("Você é uma criança")
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
} else {
  alert("Você precisa de uma emprego, seu vagabundo!")
}