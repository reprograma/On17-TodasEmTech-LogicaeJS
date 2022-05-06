/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"));

      if (anoDeNascimento <= 2004) {
        alert("Você pode comprar bebidas!!")
      } else {
        alert("Não estamos autorizados a vender álcool para menos de 18 anos")
      }