/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let itens = Number(prompt("Quanto itens tem na sua compra?"));

    for(let i = 1; i <= totalItens; i++) {
        let value = Number(prompt("Valor do item " + i));

        totalItens += value
    }

    alert("O total da sua compra é de R$ " + totalItens)