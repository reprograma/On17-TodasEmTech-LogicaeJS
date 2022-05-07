/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeItens = parseInt(prompt("Qual a quantidade de itens na compra?"));
let totalPrecos = 0;

for (let i = 1; i <= quantidadeItens; i++) {
  totalPrecos += parseFloat(prompt(`Preço do produto ${i}: `));
}

alert(`Total da compra: ${totalPrecos.toFixed(2)}`);
