/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let precoProduto = parseFloat (prompt("Digite o Preço da Mercadoria"))
    let descontoProduto = parseFloat (prompt("Percentual de Desconto ofertado")) /100
    let precoDesconto = precoProduto - (precoProduto * descontoProduto)
    alert("Desconto do Produto" + precoDesconto)
    let valorEconomizado = precoProduto - precoDesconto
    alert("Valor de sua economia" + valorEconomizado)