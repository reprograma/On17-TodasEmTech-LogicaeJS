/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

  let year = prompt("Informe seu ano de nascimento");
  console.log(year);

  let currentTime = new Date();

  let currentYear = currentTime.getFullYear();

  let age = currentYear - year;
  console.log(age);


if ( age >= 18){
  alert("Usuário maior de idade, venda autorizada!")
} else{
  alert("Você não está autorizada a vender álcool para menores")
}