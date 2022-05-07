/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

/* 1. Solicite o preço de uma mercadoria;*/
let preco = parseFloat(prompt('Digite o preço!'))

/*2. Solicite um percentual de desconto;*/
let desconto = parseFloat(prompt('Digite o desconto!')) / 100

/*3. Informe ao usuário o valor da mercadoria após o desconto;*/
let valor = preco - preco * desconto
alert(`O valor da Mercadoria com o desconto é de R$ ${valor}`)

/*4. Informe ao usuário qual quantia foi economizada por conta do desconto.*/
let economia = preco - valor
alert(`O valor economizado foi de R$ ${economia}`)
