/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */


let itemQuantity = prompt("Digite a quantidade de itens da compra: ")
let currentItem = 1;
let itemPrice = 0;
let totalSpent = 0;
while (itemQuantity > 0) {
    itemPrice = prompt("Digite o valor do item " + currentItem)
    totalSpent = parseInt(itemPrice) + totalSpent;
    --itemQuantity;
    currentItem = currentItem + 1;
}

alert("O total gasto na compra foi de foi R$" + totalSpent + ".");