/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

   
let qtdItens = Number(prompt("Informe a quantidade de itens comprados: "));
let total = 0;
for (let i = 1; i <= qtdItens; i++) {
    let preco = parsefloat(prompt(`Preço do intem ${i}: `));
    total += preco;
}
console.log(`Total da compra é: R$${total}`);
