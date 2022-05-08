/**
    Tarefa 06

    1. Informe o total da conta do cliente;
    2. Informe a quantia em dinheiro dada pelo cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let valorTotalCompra = Number(prompt('Informe o total da compra do cliente:'));
let valorPago = Number(prompt('Digite o valor pago pelo cliente:'));
let troco, faltaPagar;
if (valorPago > valorTotalCompra) {
    troco = valorPago - valorTotalCompra;
    alert('O troco do cliente é de R$ ' +troco);
} else if (valorPago < valorTotalCompra) {
    faltaPagar = valorTotalCompra - valorPago;
    alert('Falta pagar R$ ' +faltaPagar);
} else {
    alert('Obrigada pela preferência, pagamento efetuado com sucesso!');
}