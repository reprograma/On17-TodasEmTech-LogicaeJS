/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let paperMoney = Number(prompt("Digite o valor dado pelo cliente:"));
let totalPrice = Number(prompt("Digite o valor final da compra do cliente:"))

let moneyBack = paperMoney - totalPrice;
console.log(`Devolva R$ ${moneyBack} de troco.`);