/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
let year = 2022;
let dateBirth = prompt("Digite o ano do seu nascimento: ");
const ageCheck = year - dateBirth;
if (isNaN(dateBirth)) {
  alert("Este campo aceita somente números. Por favor, atualize a página e tente novamente.")
} else if (dateBirth < 1900) {
  alert("Informe um ano válido. Por favor, atualize a página e tente novamente.")
}
else if (ageCheck < 18) {
  alert("Você tem " + ageCheck + " anos. Não estamos autorizados a vender alcool para menores.")
} else {
  alert( "Você tem " + ageCheck + " anos. Você pode comprar bebidas.");
}