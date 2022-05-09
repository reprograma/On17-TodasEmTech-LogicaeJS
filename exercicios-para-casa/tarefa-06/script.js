/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let cash = Number(prompt("Informe a quantia"));
    let totalCash = Number(prompt("O total da sua conta é de "));

    let change = (cash - totalCash);
    alert("O seu troco é de " + change)
