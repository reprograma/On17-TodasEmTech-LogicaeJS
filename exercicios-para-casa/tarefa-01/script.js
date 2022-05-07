/**
    Tarefa 01

    1. Crie duas variáveis para armazenar o nome de usuário e a senha dentro do script;
    2. Use um `prompt` para pedir ao usuário seu nome e armazene o resultado numa variável;
    3. Use outro `prompt` para pedir ao usuário sua senha e a armazene em outra variável;
    4. Verifique se o nome de usuário e a senha estão corretos:
      a. caso afirmativo, cumprimente o usuário com um `Bom dia!` por meio de um `alert`;
      b. caso as credenciais estejam erradas, informe o usuário
      (aqui não precisamos pedir as credenciais novamente; podemos finalizar normalmente)
 */

//Respostas
// 1.
let Name = "Nome do usuário"
console.log (Name);
let passoword = "Senha"
console.log (passoword);
// 2.
let information = prompt("Qual o seu nome?");
// 3.
let digitarSenha = prompt("Digite a sua senha utilizando apenas caracteres numéricos");
// 4.
if (nome === 'Benja'){
  alert('Bom dia!');
} else if(nome != 'Benja'){
  alert('usuário não encontrado');
}