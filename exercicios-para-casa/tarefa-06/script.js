/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */


    let valorPago = parseFloat(prompt("Insira o valor pago"))

    let totalConta = (valorPago) + 50
alert ("Total de sua conta" + totalConta)

    let trocoCliente = (valorPago - totalConta)
alert ("Valor do seu troco" + trocoCliente)