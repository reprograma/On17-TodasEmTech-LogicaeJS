/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let totalPreços = 0;
for (let i = 1; i<= 10; i++){
    mercadoria = parseFloat(prompt(`Preço do produto ${i}:`))
    totalPreços += mercadoria
}
alert(`Valor total: ${totalPreços.toFixed(2)}`)

//i, contador de itens, ele determina quantas vezes roda.
//i++ contanto de um+um, ex: 1+1=2
//reduzido valorToral += parseFloat(prompt(`Insira valor do item ${i}`))