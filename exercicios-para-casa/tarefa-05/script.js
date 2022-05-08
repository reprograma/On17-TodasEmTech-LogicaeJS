/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeItens = parseInt(prompt("Insira a aqui a quantidade de itens"));

let valorProdutos = 0;
for (let i = 1; i <= quantidadeItens; i++) {
  precoItens = parseFloat(prompt(`Insira aqui o preço ${i}`));
  valorProdutos += precoItens;
}

alert(`O valor total é de R$ ${valorProdutos.toFixed(2)}`);
