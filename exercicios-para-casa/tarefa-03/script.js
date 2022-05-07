/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))

if (anoDeNascimento <= 2004) {
  alert("maior de idade, liberado para comprar bebida")
} else {
  alert ("menor de idade, não pode autorizado comprar bebidas!")
}
