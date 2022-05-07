/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let preco = parsefloat(prompt("Informe o preço da mercadoria: "));
let desconto = parsefloat(prompt("informe o percentual de desconto: "))/100;
let valorApagar = (preco * desconto);
let valorDescoto = preco - valorApagar; 

