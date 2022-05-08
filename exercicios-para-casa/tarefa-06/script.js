/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let dinheiroCliente = parseFloat(prompt("Informe a quantia em dinheiro dada pelo cliente"))

    let totalCliente = parseFloat(prompt("Informe o total da conta do Cliente"))

    let resultado = dinheiroCliente - totalCliente
    alert ("O valor do troco é R$ " + resultado)    

   