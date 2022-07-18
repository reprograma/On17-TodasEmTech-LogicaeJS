
// Tarefa 01

 
//1. Crie duas variáveis para armazenar o nome de usuário e a senha dentro do script;//

const nome = "Nana";
const senha = "@Cexd8w2";

//2. Use um `prompt` para pedir ao usuário seu nome e armazene o resultado numa variável;

const nomeUsuario = prompt("Digite seu nome:");

//3. Use outro `prompt` para pedir ao usuário sua senha e a armazene em outra variável;

const senhaUsuario = prompt("digite sua senha");

// 4. Verifique se o nome de usuário e a senha estão corretos:
//   a. caso afirmativo, cumprimente o usuário com um `Bom dia!` por meio de um `alert`;
//   b. caso as credenciais estejam erradas, informe o usuário
//   (aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente)

if (nomeUsuario === nome && senhaUsuario === senha) {
  alert("Bom dia!");
} else {
  alert("Crendencias inválidas");
}