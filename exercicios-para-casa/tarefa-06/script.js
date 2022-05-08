/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

//  1. Informe a quantia em dinheiro dada pelo cliente;
let quantia = parseFloat(prompt("insira sua quantia"));

let total = parseFloat(prompt("O total é"));

let troco = quantia - total;

alert(` Quantia recebida R$ ${quantia.toFixed(
  2
)}, Total da conta foi de ${total.toFixed(2)} seu troco é de 
    ${troco.toFixed(2)}`);
