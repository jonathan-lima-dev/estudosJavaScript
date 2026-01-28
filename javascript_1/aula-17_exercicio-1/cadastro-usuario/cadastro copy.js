let primeiroNome;
let sobrenome;
let campoEstudos;
let anoNascimento;
let anoAtual = new Date().getFullYear();

primeiroNome = window.prompt("Digite seu primeiro nome:");
sobrenome = window.prompt("Digite seu sobrenome:");
campoEstudos = window.prompt("Digite seu campo de estudos:");
anoNascimento = window.prompt("Digite seu ano de nascimento:(AAAA)");

window.alert(
  "Cadastro concluído!\n\n" +
    "Nome: " + 
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de Estudos: " +
    campoEstudos +
    "\nIdade: " +
    (anoAtual - anoNascimento) +
    " anos."
);

if (anoAtual - anoNascimento >= 18) {
  window.alert(
    "Você é maior de idade." +
      " E seu nome começa com a letra " +
      primeiroNome[0] +
      "."
  );
} else {
  window.alert("Você é menor de idade.");
}