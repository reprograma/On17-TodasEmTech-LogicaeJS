/**
    Tarefa 05

    1. Solicite a quantidade de itens na compra;
    2. Receba o valor de cada um dos itens da compra;
    3. Informe o total gasto na compra.
 */
/*1. Solicite a quantidade de itens na compra;*/
let itens = Number(prompt('Quantos itens foram comprados?'))
let total = 0

for (let item = 1; item <= itens; item++) {
  let preco = parseFloat(prompt(`Coloque o valor do ${item}`))
  total += preco
}
alert(`o Valor do total dos intens foi de R$ ${total}`)
