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
      let nome = "Ercilia";
      let password = "Divino";
  
      let nameUser = prompt("Digite seu nome:");
  
      let passwordUser = prompt("digite sua senha");
  
  
  
   if(nameUser === nome && passwordUser === password){
     alert(`Bom dia! ${nome}`);
   }else{
     alert("Suas crendenciais estão incorretas");
   }
   