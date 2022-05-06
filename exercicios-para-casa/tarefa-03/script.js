/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let ano = prompt(`Digite seu ano de nascimento: `);
let idade = 2022-ano
if(idade>=18){
  console.log(`Você tem ${idade} anos portanto é maior de idade e já pode comprar bebidas alcólicas.`);
}else{
  console.log(`Você tem ${idade} anos portanto é menor de idade. Não vendemos álcool para menores de 18 anos.`);
}