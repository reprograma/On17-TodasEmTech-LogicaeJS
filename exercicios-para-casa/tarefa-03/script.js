/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

//  1. Solicite o ano de nascimento;
const anoDeNascimento = Number(prompt("Qual o ano do seu nascimento?"))
const idade = (2022 - anoDeNascimento);

if (idade >= 18) {
  alert("Você pode comprar bebidas");
} else if (idade < 18) {
  alert("não estamos altorizados a vender bebidas alcoolica para menores de idade");
}