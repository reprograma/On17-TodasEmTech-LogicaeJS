/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
      let anoNascimento = prompt("Em que ano você nasceu?");
      let anoAtual = 2022;
      let calcularIdade =  anoAtual - anoNascimento;
      let idadePermitida = 18;

      if(calcularIdade >= idadePermitida){
        alert("Está liberado para comprar bebidas alcoolicas");
      }else{
        alert("Está proibida a venda de bebidas alcoolicas para menores de 18 anos");
      }
      