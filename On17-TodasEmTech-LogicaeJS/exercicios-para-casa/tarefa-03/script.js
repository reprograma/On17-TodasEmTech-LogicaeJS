/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

    let nascimento = prompt("Informe o ano de nascimento: ");
    
    if ((2022 - nascimento) >= 18) {
      alert("Autorizado para compra de bebidas!")
    } else {
      alert("Não é autorizada a venda de álcool para menores de 18 anos!")
    };