/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let quantidadeDeItens = parseInt(prompt("Quantos itens foram comprados?"));

    let i = 1;
    let somaDeItens = 0;
    for (let i = 1; i <= quantidadeDeItens; i++) {
        let valor = parseFloat(prompt("Quanto custa o item" + i + "?"));
        somaDeItens += valor;
    }  
    alert("O preço total dos itens é de R$" + somaDeItens);