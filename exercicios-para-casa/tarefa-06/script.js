/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
let quantiaDinheiro = parseFloat(prompt("Qual Valor?"));
let totalConta = parseFloat(prompt("Valor total"));
let troco = quantiaDinheiro - totalConta 
alert(`Valor dado pelo cliente ${quantiaDinheiro.toFixed(2)}
Total da conta do cliente ${totalConta.toFixed(2)}
Troco do cliente ${troco.toFixed(2)}`);