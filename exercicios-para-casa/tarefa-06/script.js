/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let moneyClient = parseFloat(prompt('Qual valor recebido do cliente?'));
    let countClient = parseFloat(prompt('Qual o valor da conta do cliente?'));
    let changeClient = moneyClient-countClient;

    alert(`O valor do troco é R$${changeClient},00`)