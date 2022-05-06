/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

let preco = Number.parseFloat(prompt(`Digite o preço do produto R$ `));
let percentual = Number(prompt(`Digite o valor percentual de desconto (%) `));
let desconto = preco*percentual/100;
console.log(`Preço do produto: R$ ${preco.toFixed(2).replace(".",",")}. `);
console.log(`Preço final do produto com desconto aplicado: R$ ${(preco-desconto).toFixed(2).replace(".",",")}.`);
console.log(`Você economizou R$ ${desconto.toFixed(2).replace(".",",")} valor com desconto de ${percentual}%.`);
