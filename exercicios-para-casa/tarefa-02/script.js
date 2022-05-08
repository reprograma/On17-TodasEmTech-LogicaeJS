/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


    
    let valor = prompt("Informe o preço do produto")
    
    let desconto = prompt("Informe o percentual de desconto")

    let precoFinal = (valor/100)*desconto;
    let precoDesconto = valor-precoFinal
    alert("Valor do produto com desconto " + precoDesconto);
    alert("Valor economizado " + precoFinal);


