/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

 let quantidadeItens = Number(prompt('Digite o quantidade de produtos:'))  
 let totalGasto = 0
 
 for(let i =1; i<= quantidadeItens;i++){
     let valorCompra = parseFloat(prompt('Digite o valor do produto'))
     totalGasto += valorCompra
 }
alert(`O valor total gasto nas compras foi de R$${totalGasto},00`)