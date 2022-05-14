/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
    const quantidadeItens = parseInt(prompt("informe a quantidade de itens"));
    let valorTotal = 0

    for (let i = 0; i < quantidadeItens; i++) {
        const valorItem = Number(prompt("informe o valor do item " + (i + 1)));
        valorTotal += valorItem
    }

    alert("valor total da compra: " + valorTotal)