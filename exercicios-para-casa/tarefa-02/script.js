/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


// 1
let preco = prompt ("digite o preço de uma mercadoria")

// 2
let percentual = prompt("digite um percentual de desconto")

// 3
let descontoFinal = preco * percentual / 100
let valorFinal = preco - descontoFinal
if (valorFinal) {
    alert("o valor da mercadoria após o desconto é : " + valorFinal)

    alert("o valor da quantia economizada é : " + descontoFinal) // 4
} else {
    alert("por favor tente novamente ")
}


