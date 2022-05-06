/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

let quantiaPaga = Number.parseFloat(prompt(`Digite a quantia em dinheiro dada pelo cliente R$`));
let totalCompra = Number.parseFloat(prompt(`Digite o valor total da compra R$ `));
let troco = quantiaPaga - totalCompra;
console.log(`Valor recebido pelo cliente: R$ ${quantiaPaga.toFixed(2).replace('.',',')}`);
console.log(`Valor total da compra: R$ ${totalCompra.toFixed(2).replace('.',',')}`);
console.log(`Valor total de troco devido ao cliente: R$ ${troco.toFixed(2).replace('.',',')}`);
