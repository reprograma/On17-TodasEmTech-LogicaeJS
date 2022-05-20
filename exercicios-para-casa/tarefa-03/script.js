/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      const ano = Number(prompt('Digite o ano do seu nascimento(ex: XXXX)'))
      const idade = 2022 - ano
      if( idade >= 18){
        alert('Você pode comprar bebida')
      }else{
        alert('Você não pode comprar bebida')
      }