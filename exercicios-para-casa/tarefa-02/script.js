/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


let precoMercadoria = parseFloat(prompt("Digite o preço da mercadoria:"));
let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto:"))/100
let valorMercadoria = precoMercadoria - (precoMercadoria * percentualDesconto);
let valorEconomia = precoMercadoria - percentualDesconto;

alert("O valor final de sua mercadoria é de R$ " + valorMercadoria + " e você economizou R$ " + valorEconomia);