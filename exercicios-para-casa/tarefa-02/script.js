/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let precoMercadoria = parseFloat(prompt("Insira o preço da mercadoria:"));
let percentualDesconto = parseFloat(prompt("Insira o percentual de desconto:"));

let mercadoriaComDesconto =
  precoMercadoria - (precoMercadoria * descontoMercadoria) / 100;

alert(
  ` Valor da mercadoria com desconto: ${mercadoriaComDesconto.toFixed(2)}`
);

let quantiaEconomizada = precoMercadoria - mercadoriaComDesconto;

alert(`Você economizou R$ ${quantiaEconomizada.toFixed(2)}`);
