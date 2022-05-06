/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
let soma = 0;
let itens = Number.parseInt(prompt(`Digite o número total de itens desta compra: `));
if(itens<=10){
    console.log(`Total de itens: ${itens}`);
    for(let c=1; c<=itens; c+=1){
        let preco = Number.parseFloat(prompt(`Digite o preço do ${c}º item R$ `)); /*Não aceita vírgula na entrada do dado(,), somente ponto (.)*/
        console.log(`R$ ${preco.toFixed(2).replace('.',',')} + `);
        soma += preco;
    }
    console.log(`Valor total da compra R$ ${soma.toFixed(2).replace('.',',')}`);
}else{
    console.log(`Este é um caixa rápido, passamos compras de até 10 itens. Para compras acima de 10 produtos procure o caixa regular. Agradecemos a compreensão!`);
}
