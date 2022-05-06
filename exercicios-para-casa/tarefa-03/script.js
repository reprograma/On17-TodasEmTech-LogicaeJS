/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let anoNascimento = Number(prompt("Digite aqui o ano do seu nascimento."));
      if (anoNascimento < 2004 ){
        alert("Você pode comprar a bebida! :D ")
      } else{
        alert("Você não tem idade pra comprar bebidas. :( ")
      }