/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoAtual = new Date().getFullYear();
let anoNascimento = Number(prompt('Digite o ano do seu nascimento:'));
let maiorIdade = anoAtual - anoNascimento;
console.log(maiorIdade);

if (maiorIdade >= 18) {
  alert('Maior de idade, pode comprar bebida');
} else {
  alert('Desculpe, você não pode comprar bebida alcoolica em nossa loja');
}