/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
    let item = 1;
    let total = 0;
    let qtd = prompt("Informe a quantidade de itens na compra")
    
    while(item <= qtd) {
     total += parseInt(prompt("Insira o valor do produto " + item));
     item++;
     
    }
    console.log("Valor total: " + total);