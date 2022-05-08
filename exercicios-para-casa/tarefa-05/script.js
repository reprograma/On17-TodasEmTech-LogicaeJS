/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let valorTotalCompra = 0;
let quantidadeDeItens = Number(prompt('Digite a quantidade de itens que você deseja:'));
for(let indice = 0; indice < quantidadeDeItens; indice++) {
    let precoItem = Number(prompt('Digite o valor do item ' + indice + ':'));
    valorTotalCompra += precoItem;
}
alert('O valor total da compra foi de R$: ' + valorTotalCompra);
