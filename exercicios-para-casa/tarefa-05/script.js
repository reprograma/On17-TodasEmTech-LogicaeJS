/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
    let quantidadeItens = parseInt(prompt("Informe a quantidade dos itens adquiridos"));

    let totalItens = parseFloat (0);


    for(let i = 1; i <= quantidadeItens; i++){
    let preco = parseFloat(prompt(`Preço do produto ${i}: `));
    totalItens += preco;
    }

    alert(`O total da compra é: R$${totalItens.toFixed(2)} reais.`)
    