/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let cliente = parseFloat(prompt("Digite valor recebido"));
let total = parseFloat(prompt("Digite o valor total da conta"));
let troco = cliente - total 
alert(`Seu troco é de R$${troco.toFixed(2)} reais`)
