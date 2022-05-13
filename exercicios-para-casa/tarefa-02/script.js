/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let valorProduto = parseFloat(prompt("Digite o valor do produto."));
let descontoProduto = parseFloat(prompt("Digite um valor de desconto!"));

let transformDesconto = descontoProduto / 100;

let resto = valorProduto * transformDesconto;

let valorFinal = valorProduto - resto;

alert("Seu produto ficará com um valor de R$" + valorFinal.toFixed(2) + ", e você economizou R$" + resto.toFixed(2))
