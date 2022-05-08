/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let valorTotalItens = 0;

let contador = 1;
while(contador <=10) {
    let precoItem = Number(prompt('Digite o valor do item ' + contador + ':'));
    valorTotalItens += precoItem;
    contador++
}

alert('A soma total dos itens foi de: R$' + valorTotalItens);

// OU


for(let contador = 1; contador <= 10; contador++) {
    let precoItem = Number(prompt('Digite o valor do item ' + contador + ':'));
    valorTotalItens += precoItem;
}

alert('A soma total dos itens foi de: R$' + valorTotalItens);

