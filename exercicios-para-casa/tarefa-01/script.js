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

let usuario = "usuario123";
let senha = "123456abcd";

let nome = prompt(`Qual o seu nome?`);
let usuarioLogin = prompt(`Digite seu usuario cadastrado: `);
let senhaLogin = prompt(`Digite sua senha cadastrada: `);

if(usuarioLogin===usuario && senhaLogin===senha){
  console.log(`Bom dia, ${nome}, seja bem-vinda!`);
}else{
  console.log(`Usuário e/ou senha digitados estão incorretos, tente novamente ou solicite o reset da senha.`);
}