/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let totalItems = parseInt(prompt("Digite quantos itens deseja comprar:"));

let arrayPrices = [];

do {
    let whatPrice = Number(prompt("Digite o valor do item:"));
    arrayPrices.push(whatPrice);
} while (arrayPrices.length < totalItems);

let firstNumber = 0;
let finalSum = [];

for (let item = 0; item <= arrayPrices.length; item++) {
    let justPrice = arrayPrices[item];
    let elementsSum = firstNumber += justPrice;

    finalSum.push(elementsSum);

    if (finalSum.length === arrayPrices.length){
        console.log(finalSum[finalSum.length - 1]);
    };
};