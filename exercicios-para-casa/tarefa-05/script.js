/*
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */

let soma = 0;
let itens = Number.parseInt(prompt(`Digite o número total de itens desta compra: `));
if(itens>10){
    for(let c=1; c<=itens; c+=1){
        let preco = Number.parseFloat(prompt(`Digite o preço do ${c}º item R$ `)); /*Não aceita vírgula na entrada do dado(,), somente ponto (.)*/
        console.log(`R$ ${preco.toFixed(2).replace('.',',')} + `);
        soma += preco;
    }
    console.log(`Valor total da compra R$ ${soma.toFixed(2).replace('.',',')}`);
}else{
    console.log(`Para compras de até 10 itens oferecemos também o caixa rápido para agilizar o seu atendimento.`)
}
