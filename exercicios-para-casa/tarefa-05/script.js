/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
 let quantidadeItens = parseInt(prompt(" Insira aqui a quantidade de itens"));
 let valorProduto = 0
for (let i = 1; i <= 10; i++) {
    precoItens = parseFloat(prompt(`Insira aqui o preço ${i}`));
    valorProduto += precoItens
}
alert(`O gasto total foi de  ${valorProduto.toFixed(2)}`);