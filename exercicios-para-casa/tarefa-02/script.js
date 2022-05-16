/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let itemPrice = parseInt(prompt("Insira o valor do item:"));
let discount = parseInt(prompt("Insira o percentual de desconto:"));
let finalPrice = itemPrice - (itemPrice * discount/100);
alert(`O valor final do item é: ${finalPrice}`);
let finalDiscount = alert(`Você economizou: ${itemPrice - finalPrice}`);