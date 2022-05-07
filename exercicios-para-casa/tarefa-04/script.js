/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

    let item01 = parseFloat(prompt("Insira o valor do Item 01"))
    let item02 = parseFloat(prompt("Insira o valor do Item 02"))
    let item03 = parseFloat(prompt("Insira o valor do Item 03"))
    let item04 = parseFloat(prompt("Insira o valor do Item 04"))
    let item05 = parseFloat(prompt("Insira o valor do Item 05"))
    let item06 = parseFloat(prompt("Insira o valor do Item 06"))
    let item07 = parseFloat(prompt("Insira o valor do Item 07"))
    let item08 = parseFloat(prompt("Insira o valor do Item 08"))
    let item09 = parseFloat(prompt("Insira o valor do Item 09"))
    let item10 = parseFloat(prompt("Insira o valor do Item 10"))
    
let somaItens = (item01 + item02 + item03 + item04 + item05 + item06 + item07 + item08 + item09 + item10)
alert("Valor da soma dos itens" + somaItens)