/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let precoMercadoria = parseFloat(prompt("Coloque o valor do produto"))

    let percentualDesconto = parseFloat(prompt("Escreva o percentual de desconto"))/100

    let valorComDesconto = precoMercadoria - (precoMercadoria * percentualDesconto)
    alert("Valor com o desconto R$" + valorComDesconto)

    let quantiaEconomizada = precoMercadoria - valorComDesconto 
    alert("Valor economizado foi de R$" + quantiaEconomizada)

