/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */



    let quantiaDinheiro = parseFloat(prompt("Qual a quantia em dinheiro recebida?"));

    let valorConta = parseFloat(prompt("Qual o total da conta do cliente?"));




    troco = quantiaDinheiro - valorConta;




    alert("O valor do troco é R$" + troco);