/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */



let dinheiro = parseFloat(prompt("Quantia dada pelo cliente: "));
let total = parseFloat(prompt("Total da compra: "));
let troco = dinheiro - total;

alert(`O valor recebido do cliente foi ${dinheiro.toFixed(
  2
)}, total da conta é ${totalConta.toFixed(2)} e o valor do troco será 
${troco.toFixed(2)}`);