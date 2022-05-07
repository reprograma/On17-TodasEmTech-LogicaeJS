/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
      let anoNascimento = Number(prompt("Qual ano você nasceu?"));

      let calculoIdade = 2022 - anoNascimento;
      
      if (calculoIdade >= 18) {
        alert("Você pode comprar bebidas!");
      } else {
        alert("Não possuo autorização para vender bebidas a menores de 18 anos!");
      }