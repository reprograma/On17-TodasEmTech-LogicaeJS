/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


    // 1-

    let preco = prompt("Qual o preço da mercadoria?");

    //2-

    let porcentagem = prompt("Informe o desconto");

    //3-

    let desconto = preco*porcentagem/100;
    let valorFinal = preco-desconto;
    alert("Seu valor com desconto aplicado: " + valorFinal);

    //4-

    alert("Você economizou: " + desconto + " reais");




