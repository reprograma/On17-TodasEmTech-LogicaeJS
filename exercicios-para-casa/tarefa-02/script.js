/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

const valorMercadoria = Number(prompt("Digite o valor da mercadoria"));
const percentualDesconto = Number(prompt("Digite o percentual de deconto"));
const valorDesconto = (percentualDesconto / 100) * valorMercadoria;
const valorFinalMercadoria = valorMercadoria - valorDesconto;

window.alert(
  `O valor da mercadoria com desconto é de ${valorFinalMercadoria} `
);
window.alert(`Você economizou ${valorDesconto} `);

console.log(valorDesconto);
