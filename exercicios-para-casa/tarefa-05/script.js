/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

    let soma = 0;
    let itens = 0;

    itens = prompt("Informe a quantidade de itens: "); 
    for (let count=1; count <= itens; count = count +  1) {
        soma = soma + Number(prompt(count + ") Indique o valor do produto:"));
    }

    alert(soma)