/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let finalValue = 0;

    for(let i= 1; i <= 10; i++) {
        console.log("o valor é: " + i);
        let value = prompt("Valor do item" + i);
        totalValue += value;
        console.log(totalValue);
    }

    alert("O valor total dos itens é de " + totalValue)