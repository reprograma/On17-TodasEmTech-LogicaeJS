/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let item = 1;
let total = 0;

while(item <= 10) {
 total += parseInt(prompt("Insira o valor do produto " + item));
 item++;
 console.log("Valor total: " + total);
}
