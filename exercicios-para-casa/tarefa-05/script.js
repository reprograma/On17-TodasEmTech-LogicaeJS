/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
let quantidade = parseInt(prompt("insira a quantidade de itens"));
let totalPrecos = 0;

for (let i = 1; i <= quantidade; i++) {
  produto = parseFloat(prompt(`Preco do produto ${i}:`));
  console.log(`O valor é: ${totalPrecos}`);
  totalPrecos += produto;
}
alert(`Valor total da compra: ${totalPrecos.toFixed(2)}`);
