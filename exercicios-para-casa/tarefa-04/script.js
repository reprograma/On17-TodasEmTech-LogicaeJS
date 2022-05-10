/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let totalPrecos = 0;

for (let i = 1; i <= 10; i++) {
  totalPrecos += parseFloat(prompt(`Preço do produto ${i}:`));
}

alert(`Total da compra: ${totalPrecos.toFixed(2)}`);
