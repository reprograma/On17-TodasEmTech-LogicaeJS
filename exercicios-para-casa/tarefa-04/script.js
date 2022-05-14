/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
    let valorTotal = 0

    for (let i = 0; i < 10 ; i++) {
        const valorItem = Number(prompt("informe o valor do item " + (i + 1)));
        valorTotal += valorItem
    }

    alert("valor total da soma: " + valorTotal)