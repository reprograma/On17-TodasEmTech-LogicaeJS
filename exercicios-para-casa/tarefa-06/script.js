/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let dinheiroEntrada = parseFloat(prompt("Informe a quantia dada pelo cliente: "));
    let valorTotalCompra = parseFloat(prompt("Informe o valor total da compra: "));
    let troco = dinheiroEntrada - valorTotalCompra;

    alert (`O valor do troco é: R$${troco}`);