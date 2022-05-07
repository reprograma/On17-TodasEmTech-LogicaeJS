/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
/*1. Solicite o ano de nascimento;*/
let nascimento = String(prompt('Ano de Nascimento'))

if (nascimento <= 2004) {
  alert('Você pode comprar bebida!')
} else {
  alert('você não pode comprar bebida!')
}
