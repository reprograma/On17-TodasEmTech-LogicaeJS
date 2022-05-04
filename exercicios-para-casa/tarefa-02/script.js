/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let price = Number(
  prompt("Informe o preço da mercadoria(apenas números): R$ "),
);
let percentual = Number(prompt("Informe o valor de desconto:"))/100;
let discount = price - price * percentual;
let valueDiscount = price - discount;
alert(`O preço da mercadoria após o desconto é: R$ ${discount}`);
alert(`O valor economizado foi de R$ ${valueDiscount}`)
