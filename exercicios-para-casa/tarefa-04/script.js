// Tarefa 04

    // 1. Receba o preço de cada um dos 10 itens;

    let item = 0;
    for (let i = 1; i <= 10; i++){
        let preco = parseFloat(prompt(`Preço do produto ${i}:`));
        item += preco;
    }

       // 2. Mostre na tela a soma de todos os preços.

    alert(`O total da compra é: R$${item}`)