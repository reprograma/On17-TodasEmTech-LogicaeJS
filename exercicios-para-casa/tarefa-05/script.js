/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let quantidadeItens = parseInt(prompt("Qual a quantidade de itens da sua compra?"));

    let i = 1;
    let somaItens = 0;
    for (let i = 1; i <= quantidadeItens; i++) {
        let valor = parseFloat(prompt("Qual o valor do item " + i + "?"));
        somaItens += valor;
    }  
    alert("O total do gasto da compra é de R$" + somaItens);