/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNascimento = Number(prompt("Seu ano de nascimento"));
let idadeUsuario = 2022 - anoNascimento;

if (idadeUsuario >= 18) {
  window.alert("Você já pode comprar bebidas");
} else {
  window.alert("Não estamos autorizados a vender álcool para menores");
}
