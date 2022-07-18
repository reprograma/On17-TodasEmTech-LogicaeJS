
    // Tarefa 03

    // 1. Solicite o ano de nascimento;

        let anoNascimento = Number(prompt("Informe seu ano de nascimento"));
        let idade = 2022 - anoNascimento;
    
    // 2. Verifique se a pessoa é maior de idade:
    //   - caso seja, informe na tela que ela pode comprar bebidas;
    //   - caso contrário, informe que você não está autorizada a vender álcool para menores.
         
      if (idade >= 18) {
        alert ("Você está apto para comprar bebidas alcoólicas");
      } else {
        alert ("Não estamos autorizados a vender ácool para menores");
      }