/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let qntCliente = parseFloat(prompt("insira a sua quantia"));
let total = parseFloat(prompt("total da conta"));
let trocoCliente = qntCliente - total;
alert(` Quandidade dada pelo cliente R$ ${qntCliente.toFixed(2)},R$ total gasto ${total.toFixed(2)}, O seu troco será de R$ ${trocoCliente.toFixed(2)}`);

