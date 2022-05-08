/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let price = 0;
for (let i = 1; i <= 10; i++) {
  price += parseFloat(prompt("Digite o preço do item: R$"));
}
alert(`A soma dos produtos é: ${price}`);
