/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

   // 1. Solicite o preço de uma mercadoria;
   const num1 = Number(prompt("Qual o preço da mercadoria?"))
   console.log(num1)

  // 2. Solicite um percentual de desconto;
  const desco =Number(prompt('valor do desconto'))
  console.log(desco)

 // 3. Informe ao usuário o valor da mercadoria após o desconto;
 let mercado = num1 - desco;
alert('A mercadoria ficou por 70 reais');

//4. Informe ao usuário qual quantia foi economizada por conta do desconto.
let econo = num1 - desco;
alert(`${num1} - ${desco} = ${20}` + "O valor economizado");
