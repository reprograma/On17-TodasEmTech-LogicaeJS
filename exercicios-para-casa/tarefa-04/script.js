/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

const item1 = parseFloat(prompt("Digite o valor do produto."));
const item2 = parseFloat(prompt("Digite o valor do produto."));
const item3 = parseFloat(prompt("Digite o valor do produto."));
const item4 = parseFloat(prompt("Digite o valor do produto."));
const item5 = parseFloat(prompt("Digite o valor do produto."));
const item6 = parseFloat(prompt("Digite o valor do produto."));
const item7 = parseFloat(prompt("Digite o valor do produto."));
const item8 = parseFloat(prompt("Digite o valor do produto."));
const item9 = parseFloat(prompt("Digite o valor do produto."));
const item10 = parseFloat(prompt("Digite o valor do produto."));

let valorTotal = item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10;

alert(`Sua compra deu no total R$ ${valorTotal.toFixed(2)}`);