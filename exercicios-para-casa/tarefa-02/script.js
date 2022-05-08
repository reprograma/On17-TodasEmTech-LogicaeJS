/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let valorProduto = Number(prompt("Digite o valor do mercadoria:"));
let desconto = Number(prompt("Digite quantos % de desconto: "));
let valorDesconto = (desconto/100) * valorProduto;
let valorFinal = valorProduto - valorDesconto;

alert('Você teve R$'+ valorDesconto + ' de desconto e sua mercadoria irá custar R$'+ valorFinal);