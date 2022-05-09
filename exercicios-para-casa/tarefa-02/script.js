/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let productPrice = parseFloat(prompt("Qual o valor da mercadoria?"));
    let productDiscount = parseFloat(prompt("Quanto de desconto você quer? (digite apenas números)"));

    let finalValue = (productPrice * productDiscount) / 100;
    let finalDiscount = productPrice - finalValue;

    alert("O valor da mercadoria com desconto é de " + finalDiscount);
    alert("Você economizou " + finalValue);
