/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let pagamento = prompt("Insira o pagamento");
    let compra = prompt("Total da compra");

    let troco = (pagamento - compra);
    alert("Troco do cliente "+troco)