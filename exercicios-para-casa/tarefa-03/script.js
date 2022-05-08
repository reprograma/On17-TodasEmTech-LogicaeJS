/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let nascimento = Number(prompt("Insira sua data de nascimento"));
      
      let calculoIdade = 2022 - nascimento;

      if (calculoIdade >= 18) {
        alert ("Voce pode comprar bebidas");
      } else {
        alert ("Nao está autorizada a vender bebidas pra menores de idade");

      }
