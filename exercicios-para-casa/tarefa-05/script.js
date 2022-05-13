/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    const quantidadeItens = Number(prompt("Quantos itens você adquiriu?"));

    if (quantidadeItens <= 5) {
        const item1 = parseFloat(prompt("Digite o valor do produto."));
        const item2 = parseFloat(prompt("Digite o valor do produto."));
        const item3 = parseFloat(prompt("Digite o valor do produto."));
        const item4 = parseFloat(prompt("Digite o valor do produto."));
        const item5 = parseFloat(prompt("Digite o valor do produto.")); 

        let totalGasto = item1 + item2 + item3 + item4 + item5;

        alert(`Você gastou R$ ${totalGasto.toFixed(2)}`);

    } else {
        alert("Você passou de 5 itens, procure outro caixa!");
    }
