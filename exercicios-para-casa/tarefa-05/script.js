/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


    let quantItens = Number(prompt("Informe a quantidade de itens"));
    let valorTotal = 0;
    for (let i = 1; i <= quantItens; i++) {
        let preco = parseFloat(prompt(`Insira o valor do produto${i}: `))
        valorTotal += preco
    }
 
    alert (`O valor total dos itens é de R$${valorTotal}`);