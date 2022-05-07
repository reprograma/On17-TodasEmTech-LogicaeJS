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

// 1-

      let usuario = null;
      let senha = null;

// 2- 

      usuario = prompt("insira seu usuário");

// 3-

      senha = prompt("insira sua senha");

// 4-

      if (usuario == "xoxica" && senha == "123lol") {
        alert("Bom dia!");
      } else {
        alert("Suas credenciais não são válidas");
      }