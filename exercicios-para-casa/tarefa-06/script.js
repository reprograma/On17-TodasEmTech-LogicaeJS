/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */
    let valordaConta = 150.90;
    alert(`Valor da sua conta é R$ ${valordaConta}`)
    
    let valorRecebido = parseFloat(prompt("Valor pago"));
    alert(`O total recebido foi de ${valorRecebido}`);
    
    
    let trocoCliente = valorRecebido - valordaConta;
    
    if (trocoCliente > 0) {
        alert(`Seu troco é de R$ ${trocoCliente}`);
    } else {
        alert(`O valor da sua conta é de R$ ${valordaConta} por favor conferir o seu dinheiro.`);
    }