/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let totalItens = parseFloat (0);
    for(let i = 1; i <= 10; i++){
    let preco = parseFloat(prompt(`Preço produto ${i}: `));
    totalItens += preco;
}
alert(`O total da compra é: R$${totalItens.toFixed(2)} reais.`)
    