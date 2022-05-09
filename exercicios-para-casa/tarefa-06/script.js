/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */


let quantiaDinheiro = parseFloat(prompt("Qual foi a quantida de dinheiro recebida do cliente?"));
let valorTotalConta = parseFloat(prompt("Qual o valor total da conta do cliente?"));

troco = quantiaDinheiro - valorTotalConta;

alert("O valor do troco é de R$" + troco);