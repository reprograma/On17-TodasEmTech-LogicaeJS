/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let nascimento = number(prompt("insira sua data de nascimento"));

let calculoIdade = 2022 - nascimento;
if (calculoIdade >= 18) {
  alert("Tudo certo, você pode comprar bebidas :)");
} else {
  alert(
    "Que pena, você não esta autorizado(a) a vender bebidas para menores de idade :("
  );
}
