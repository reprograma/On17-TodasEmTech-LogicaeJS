/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
/*1. Informe a quantia em dinheiro dada pelo cliente;*/
let valorPago = parseFloat(prompt('Qual foi o valor pago?'))

/*2. Informe o total da conta do cliente;*/
let totalConta = parseFloat(prompt('Qual o valor total da conta?'))

/*3. Exiba uma mensagem com o valor do troco.*/
let troco = valorPago - totalConta
alert(`O troco é de R$ ${troco}`)
