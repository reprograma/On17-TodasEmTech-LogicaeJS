/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let dinheiroCliente = parseFloat(prompt("Quantia dada pelo cliente: "));
let totalConta = parseFloat(prompt("Total da compra: "));
let troco = dinheiroCliente - totalConta;

alert(`Dinheiro dado pelo cliente é ${dinheiroCliente.toFixed(
  2
)}, total da conta é ${totalConta.toFixed(2)} e o valor do troco será 
${troco.toFixed(2)}`);
