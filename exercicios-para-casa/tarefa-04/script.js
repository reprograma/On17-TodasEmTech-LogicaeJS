/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let precoTotal = 0
for (let c = 1; c <= 10; c++) {
    let total = Number(prompt(`Qual é o valor do item ${c}`));
    precoTotal += total;
}
alert(`Preço total de todos os itens ${precoTotal}`);







