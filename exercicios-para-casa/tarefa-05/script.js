/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let quantidadeDeItens = Number(prompt("Digite a quantidade de itens da compra"));
let valorTotal = 0
//ctrl d - seleciona ao mesmo tempo a ocorrencia daquilo que estou segurando
for (let c = 1; c <= quantidadeDeItens; c++) {
   let valorDecadaitem = Number(prompt(`Qual é o valor do item ${c}`));
   valorTotal += valorDecadaitem;
}
alert(`O valor gasto na compra R$ ${valorTotal}`);







