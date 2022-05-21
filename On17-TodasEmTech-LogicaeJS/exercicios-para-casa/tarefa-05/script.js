/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


let quantiaItens = prompt("Digite a quantidade de itens:");
let totalGasto = 0;

for (i=1; i<=quantiaItens; i++) {
    let item = prompt(`Digite o valor do item ${i}`);
    totalGasto += parseFloat(item);
}
alert(`O total gasto na compra foi: R$${totalGasto.toFixed(2)}`);

