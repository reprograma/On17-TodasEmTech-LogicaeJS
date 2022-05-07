/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
// Resposta
// 1. 
let anoDeNascimento = prompt('Em qual ano você nasceu?').toLocaleLowerCase();
// 2.
if (anoDeNascimento >= 18){
  console.log('ok, você pode beber');
} else if(anoDeNascimento < 18){
  console.log('Desculpe, mas não estou autorizada vender bebida alcoolica para menores');
}