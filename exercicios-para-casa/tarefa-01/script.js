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



let saveUser = "Lorena";
let savePassword = "On17"

let user = String(prompt("Digite o seu nome:"))
let password = String(prompt("Digite a sua senha:"))

if(user === saveUser && password === savePassword) {
  alert("Bom dia! Tudo bem?")
} else {
  alert(`As credenciais estão incorretas!`)
}
