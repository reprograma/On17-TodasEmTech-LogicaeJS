/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */
let preco = parseFloat(prompt("Digite o valor da mercadoria"));
let desconto = parseFloat(prompt("Digite o percentual do desconto"));
let resultado = (preco * desconto) / 100;
let precoAtualizado = (preco - resultado);
alert ("O novo valor da sua mercadoria é R$" + precoAtualizado);
alert ("O valor total do desconto foi de R$" + resultado.toFixed(2));
