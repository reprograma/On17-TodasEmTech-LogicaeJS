/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let clientTotal = prompt("Informe o total do cliente: ");
let clientPayment = prompt("Informe o quanto o cliente pagou: ");
let change = clientTotal - clientPayment;
alert("O troco é: " + change + ".")