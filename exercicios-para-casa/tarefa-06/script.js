/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let quantiaCliente = parseFloat(prompt("Insira valor"))

let total =parseFloat(prompt("Total da conta"))

let troco = quantiaCliente - total 
alert(`Valor recebido pelo cliente é ${quantiaCliente.toFixed(2)},total da conta é ${total.toFixed(2)} e o troco será ${troco.toFixed(2)}`)