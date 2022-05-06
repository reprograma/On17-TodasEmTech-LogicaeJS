/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let quantiaEmDinheiro = parseFloat(prompt("Informe a sua quantia em dinheiro"));
const totalConta = 15;

window.alert(`Total da conta: R$${totalConta.toFixed(2)}`);

const valorTroco = quantiaEmDinheiro - totalConta;

window.alert(`Total do troco: R$${valorTroco.toFixed(2)}`);
