/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

const nascimento = Number(prompt("Qual seu ano de nascimento?"));

let idade = 2022 - nascimento;

if (idade >= 18) {
  alert("Você é maior de idade e pode comprar bebidas alcoólicas =).")
} else if (idade < 18) {
  alert("Você não tem idade para comprar bebidas! =/")
} else {
  alert("Você não digitou seu ano de nascimento! =(")
}
