/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let qtdeItens = parseInt(prompt("Qual a quantidade de items nessa compra?"));
let totalItens = parseFloat (0);

for (let i = 1; i <= qtdeItens; i++) {
    let preco = parseFloat(prompt(`Preço do produto ${i}`));
    totalItens += preco
}


alert(`O valor total da sua compra é de: R$${totalItens.toFixed(2)} reais.`)