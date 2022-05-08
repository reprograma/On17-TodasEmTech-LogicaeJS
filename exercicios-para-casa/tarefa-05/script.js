/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

   let resultado = 0;

    let quantidade = prompt("Quantos itens possui a compra?")
    for (let i = 0; i < quantidade; i++) {
    let valor = prompt("Valor de cada item" + i)
   resultado = resultado + Number (valor);

   }

   alert("Total gasto na compra " +resultado)