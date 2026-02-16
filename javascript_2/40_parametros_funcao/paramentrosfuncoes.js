function dobrar(x){
  alert("O dobro de " + x + " é " + (x*2))
}

//dobrar(5)

function multiplicar(x, y){
  alert(x + " vezes " + y + " é " + (x*y))
}

function dividir(x, y){
  alert(x + " dividido por " + y + " é " + (x/y))
}

function subtrair(x, y){
  alert(x + " - " + y + " é " + (x-y))  
}

function somar(x, y){
  alert(x + " + " + y + " é " + (x+y))
}

function quadrado(x){
  alert("O quadrado de " + x + " é " + (x*x))
}

function raiz(x){
  alert("A raiz quadrada de " + x + " é " + Math.sqrt(x))
}

function dizerOla(nome = "mundo"){
  alert("Olá " + nome)
}

//somar(2, 3)
// dizerOla("João")
// dizerOla()

//a ordem dos parâmetros é importante. Descrever e chamar os parâmetros devem estar na mesma ordem:
//valores padões, defina por último para não ter problema.
function criarUsuario(nome, email, senha, tipoConta = "comum"){
  const usuario = {
    nome: nome, //dá para abreviar neste caso de chave: valor iguais: "nome," (achei ruim)
    email: email,
    senha: senha,
    tipoConta: tipoConta
  }  
  console.log(usuario)
}

criarUsuario("Jonathan", "joujou0@gmail.com", "123456", "admin")

//função com muitos parâmetros, podemos transformá-los em objetos:
function muitosParametros(usuarioObjetoParametro){  
    usuarioObjetoParametro.nome
    usuarioObjetoParametro.telefone
    usuarioObjetoParametro.endereço
    usuarioObjetoParametro.email
    usuarioObjetoParametro.aniversario
    usuarioObjetoParametro.senha
    usuarioObjetoParametro.tipoConta 
     
    alert("Nome: " + usuarioObjetoParametro.nome +
          "\nTelefone: " + usuarioObjetoParametro.telefone +
          "\nEndereço: " + usuarioObjetoParametro.endereço +
          "\nEmail: " + usuarioObjetoParametro.email +
          "\nAniversário: " + usuarioObjetoParametro.aniversario +
          "\nSenha: " + usuarioObjetoParametro.senha +
          "\nTipo de conta: " + usuarioObjetoParametro.tipoConta
        )       
}

const dadosUsuario = {
  nome: "Jonathan",
  telefone: "11942641875",
  endereço: "Rua da minha casa, n: 70",
  email: "joujou0@gmail.com",
  aniversario: "06/08/1991",
  senha: "123456",
  tipoConta: "admin"
}

muitosParametros(dadosUsuario)