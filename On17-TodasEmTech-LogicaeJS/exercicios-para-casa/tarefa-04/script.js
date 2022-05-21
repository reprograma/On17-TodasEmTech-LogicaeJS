/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */


let soma = 0;

for(i=1; i<=10; i++) {
    let item = prompt(`Digite o preço do item ${i}`);
    soma = soma + parseFloat(item);
}
alert(`O valor total é: R$${soma}`);
