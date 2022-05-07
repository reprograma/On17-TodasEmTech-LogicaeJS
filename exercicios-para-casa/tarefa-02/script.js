/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let precoProduto = parseFloat(prompt("Por favor, insira o preço do produto:"));
let desconto = parseFloat(prompt("Por favor, insira o percentual de desconto:"));

let produtoDesconto =
  precoProduto - (precoProduto * desconto) / 100;
alert(
  "valor da mercadoria com desconto é  R$ ${produtoDesconto.toFixed(2)}"
);

let valorEconomizado = precoProduto - produtoDesconto;
alert("Você economizou R$ ${valorEconomizado.toFixed(2)}");