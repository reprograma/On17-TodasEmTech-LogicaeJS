/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 
    Ex.:
    let itens = parseInt(prompt("Insira o número de itens"));

    while (itens-- > 0) {
        alert("Lendo novo item");
    }

    Ex.:
     ou usando FOR

    for (; itens > 0; --itens) {
        alert("Novo Item");
    }


    Ex.:
     com Do

    do {
        
    } while {

    }
    */

let itens = parseInt(prompt("Qual a quantidade de itens na compra?"));

let i = 1;
let total = 0;
for (let i = 1; i <= itens; i++) {
    let preco = parseFloat(prompt(`Qual o valor do produto ${i}?`));
    total += preco;
}
alert(`O total da compra é de R$${total}`);