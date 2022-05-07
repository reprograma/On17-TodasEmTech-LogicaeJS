/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let price = prompt("Digite o preço da mercadoria: ");
let discount = prompt("Digite o percentual de desconto:");
if (isNaN(price) || isNaN(discount)) {
    alert("O valor digitado em um dos campos não é um número. Atualize a página e tente novamente.")
} else {
    const savings = (price * discount / 100);
    const result = (price - savings);
    alert("O valor da mercadoria após o desconto é de R$" + result + " e o valor economizado foi de R$" + savings + ".");
}
