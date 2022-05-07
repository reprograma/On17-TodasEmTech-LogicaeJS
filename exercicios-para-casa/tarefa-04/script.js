/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

totalItems = 1;
let priceItem = 0;
let calcPrice = 0
while (totalItems < 11) {
    priceItem = prompt("Digite o valor do item " + totalItems + ".");
    if (isNaN(priceItem)) {
        alert("Digite somente números. Atualize a página e tente novamente.")
        break;
    }
    calcPrice = parseInt(priceItem) + calcPrice;
    ++totalItems;
}
    alert("Valor total: " + calcPrice);