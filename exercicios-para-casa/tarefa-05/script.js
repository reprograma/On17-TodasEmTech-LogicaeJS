/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeItens = Number(prompt("Digite a quantidade de intens na compra"));
let somaItens = 0;

for (let i = 1; i <= quantidadeItens; i++) {
  let valorItens = parseFloat(prompt(`Digite o valor do item ${i}`));
  somaItens += valorItens;
}

window.alert(`O valor total dos itens é de R$${somaItens},00`);
