/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let totalPreços = 0;

for (let i = 1; i <= 10; i++) {
  totalPreços += parseFloat(prompt(`Preço do produto ${i}:`));
}

alert(`Total da compra: ${totalPreços.toFixed(2)}`);
