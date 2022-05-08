/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

    
    let nascimento = prompt("Insira seu ano de nascimento")
    let anoAtual = 2022

    let idade = (anoAtual - nascimento)

    if (idade >= 18) {
      alert ("Compra autorizada")
    }
    else{
    alert ("Não autorizada")
  }

