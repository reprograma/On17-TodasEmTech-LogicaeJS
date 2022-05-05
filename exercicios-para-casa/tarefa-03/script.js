/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let nascimento = Number(prompt("Qual ano você nasceu?"));
let idadeCalculada = 2022 - nascimento;

if (idadeCalculada >= 18) {
  alert("Você pode comprar bebidas");
} else {
  alert("Não estou autorizado a vender àlcool para menores");
}