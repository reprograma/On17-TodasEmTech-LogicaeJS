/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))

      if (anoDeNascimento <= 2004) {
        alert("Maior de idade, liberado para comprar bebidas!")
      } else {
        alert("Menor de idade, não autorizado comprar bebidas!")
      }
