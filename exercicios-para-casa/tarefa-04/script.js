/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let precoItens = 0;

    for (let i = 1; i <= 10; i++) {
      precoItens += parseFloat(prompt(`Digite o valor do item ${i}`));
    }
    
    alert (`O total dos itens é de R$${valorItem.toFixed(2)}`);
     