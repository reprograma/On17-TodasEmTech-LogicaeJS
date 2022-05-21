/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */


let quantiaCliente = prompt("Valor dado pelo cliente:");
const totalConta = 100.00;
let valorTroco = quantiaCliente - totalConta;

alert(`Devolva ao cliente o valor: R$${valorTroco}`);
