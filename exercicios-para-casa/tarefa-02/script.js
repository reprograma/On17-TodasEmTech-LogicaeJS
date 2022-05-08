/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */
let preçoMercadoria = parseFloat(prompt('Qual o valor da mercadoria?'));
let desconto = parseFloat(prompt("desconto"));
let mercadoriaDesconto = preçoMercadoria - (preçoMercadoria * desconto) / 100;
alert (`valor da mercadoria com desconto é ${mercadoriaDesconto.toFixed(2)}`)
let valorEconomizado = preçoMercadoria - mercadoriaDesconto;
alert (`valor Economizado é ${valorEconomizado}`)