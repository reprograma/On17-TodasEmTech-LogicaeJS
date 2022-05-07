/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let soma = 0;

    for (let count=1; count <= 10; count = count +  1) {
        soma = soma + Number(prompt(count + ") Insira aqui o preço do serviço:"));
    }

    alert(soma)