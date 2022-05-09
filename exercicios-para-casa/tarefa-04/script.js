/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let itens = parseInt(prompt("Qual a quantidade de itens na compra?"));

let i = 1;
let precoTotal = 0;
for (let i = 1; i <= itens; i++) {
    let preco = parseFloat(prompt(`Qual o valor do item ${i}?`))
    precoTotal += preco
}
    alert(`O preço total de todos os itens é de R$${precoTotal}`)