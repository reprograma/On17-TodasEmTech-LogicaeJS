/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeItens = parseInt(prompt("Insira quantidade de itens"));
let totalPrecos = 0
for (let i = 1; i <= quantidadeItens; i++) {
    produto = parseFloat(prompt(`Preco do produto ${i}:`));
    totalPrecos += produto;
  }
  
  alert(`Total da compra: ${totalPrecos.toFixed(2)}`); 