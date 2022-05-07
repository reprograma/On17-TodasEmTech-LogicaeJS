/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeItens = parseInt(prompt("Qual a quantidade de itens na compra?"));

let i = 0;
let totalPrecos = 0;
for (let i = 1; i <= quantidadeItens; i++) {
  let preco = parseFloat(prompt("Preço do produto ${i + 1}: "));
  totalPreços += preco;
}
alert("O valor total da compra é: R$${totalPreços.toFixed(2)}");