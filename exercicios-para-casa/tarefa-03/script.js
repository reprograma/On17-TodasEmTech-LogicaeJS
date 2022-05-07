/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */


      //1-
      
      let nascimento = prompt("Informe o ano do seu nascimento");

      //2-
      if (nascimento <= 2004) {
        alert("Você tem autorização para realizar a compra das bebidas");  
      }
      else{
        alert("Você NÃO tem autorização para realizar esta compra");
      }