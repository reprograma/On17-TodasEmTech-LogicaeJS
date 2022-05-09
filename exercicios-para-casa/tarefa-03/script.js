/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let year = Number(prompt("Qual o ano do seu nascimento?"));

      if (year < 2004) {
        alert("Opa! Você pode comprar bebidas!")
      } else {
        alert("Você não pode comprar bebidas!")
      }
