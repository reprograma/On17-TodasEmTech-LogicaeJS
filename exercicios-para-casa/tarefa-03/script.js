/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */


let anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));
if (anoNascimento <= 2004) {
  alert("Você está autorizado a comprar bebidas alcoólicas!")
} else {
  alert("Esse estabelecimento não está autorizado a vender bebidas alcoólicas para menores!")
} 
