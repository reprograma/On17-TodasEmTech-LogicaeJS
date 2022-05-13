/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    const totalCompra = Number(prompt("Qual o total da compra?"));

    alert(`O total da compra é de R$ ${totalCompra.toFixed(2)}`);

    const dinheiroCliente = Number(prompt("Quanto o cliente deu?"));

    alert(`O cliente deu R$ ${dinheiroCliente.toFixed(2)}`);

    let troco = dinheiroCliente - totalCompra;

    alert(`O troco do cliente é de R$ ${troco.toFixed(2)}`);

    