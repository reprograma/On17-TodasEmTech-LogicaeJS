/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let birthdayYear = prompt("Digite seu ano de nascimento:");
let thisYear = 2022;
if ((thisYear - birthdayYear) >= 18) {
  alert("Você pode comprar bebidas!");
} else {
  alert("Você é menor de idade, não autorizo a venda de alcool.");
}