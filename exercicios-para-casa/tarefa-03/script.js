/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
      const yearBirth = Number(prompt("diga seu ano de nascimento"));

      if (yearBirth <= 2004){
        alert("pode comprar bebidas");
      } else {   
        alert("proibido a venda para menores de 18 anos")
      }