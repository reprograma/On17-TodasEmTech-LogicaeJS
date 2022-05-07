/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let i = 0;
let totalValor = 0
for (let i = 1; i < 10; i++) {
  let preco = parseFloat(prompt("Preço do produto ${i+1}: "));
  totalValor += preco;
}
alert("O preço total da compra é: R$${totalValor.toFixed(2)}");