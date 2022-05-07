/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */
/* 1. Receba o preço de cada um dos 10 itens;*/

let preco1 = Number(prompt('Preço 1'))
let preco2 = Number(prompt('Preço 2'))
let preco3 = Number(prompt('Preço 3'))
let preco4 = Number(prompt('Preço 4'))
let preco5 = Number(prompt('Preço 5'))
let preco6 = Number(prompt('Preço 6'))
let preco7 = Number(prompt('Preço 7'))
let preco8 = Number(prompt('Preço 8'))
let preco9 = Number(prompt('Preço 9'))
let preco10 = Number(prompt('Preço 10'))

/*2. Mostre na tela a soma de todos os preços.*/
let soma =
  preco1 +
  preco2 +
  preco3 +
  preco4 +
  preco5 +
  preco6 +
  preco7 +
  preco8 +
  preco9 +
  preco10
alert(`Essa é a soma total dos itens R$ ${soma}`)
