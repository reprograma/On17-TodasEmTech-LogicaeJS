/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
let valorPago = prompt("Informe a quantia em dinheiro dada pelo cliente");
let valorConta = prompt("Informe o total da conta do cliente");

alert(` o valor do troco é : ${valorConta - valorPago}`);