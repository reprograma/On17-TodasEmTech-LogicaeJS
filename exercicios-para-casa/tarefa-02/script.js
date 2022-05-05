/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let produto = parseFloat(prompt("Digite valor mercadoria"));
let desconto = parseFloat(prompt("Digite o valor do desconto(Apenas número)"));

let valor_do_desconto = produto * desconto / 100;
let a_pagar = produto - valor_do_desconto;

alert(`O valor com desconto é de ${a_pagar.toFixed(2)}`)
alert(`A quantia economizada foi de ${valor_do_desconto.toFixed(2)}`)
console.log