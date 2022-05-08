/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */

let valorProdutos = 0
for (let i = 1; i <= 10; i++) {
  precoItens = parseFloat(prompt(`Insira aqui o preço ${i}`));
  valorProdutos += precoItens;
}

alert(`O valor total é de R$ ${valorProdutos.toFixed(2)}`);

// forma reduzida do algoritimo
// valorProdutos += parseFloat(prompt(`Insira aqui o preço ${i}`))
