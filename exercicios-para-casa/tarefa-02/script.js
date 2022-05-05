/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

  // 1. Solicite o preço de uma mercadoria; 
let preço = Number (prompt("Infome o valor da mercadoria?"));

//2. Solicite um percentual de desconto;
let desconto = Number (prompt("qual é o percentual de desconto da mercadoria?"));

// 3. Informe ao usuário o valor da mercadoria após o desconto;
let preçoDesconto = (preço - (preço * desconto) / 100);
alert( "O valor da mercadoria com desconto é " + preçoDesconto);

let economia = (preço * (desconto/ 100)) ;
alert("Você economizou " + economia + " reais por conta do desconto" );