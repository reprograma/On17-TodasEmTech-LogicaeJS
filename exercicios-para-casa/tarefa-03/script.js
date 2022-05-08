/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let anoNascimento = Number(prompt("Insira seu ano de nascimento"))
let calculoIdade = 2022 - anoNascimento
if (calculoIdade>=18){
  alert("Você pode comprar bebibas")
}else{
  alert("Você não tem autorização para seguir com a compra")
}