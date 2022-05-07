/**
    Documentação para consulta
    
    Expressões e operadores
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

    Objetos globais
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

    Window
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window
 */

// 1. Receba dois números por meio do prompt
const num1 = Number(prompt('Insira um Número'))
const num2 = Number(prompt('Insira um Número'))
console.log(num1)
console.log(num2)

// 2. Informe na tela a soma desses números
let soma = num1 + num2
alert('A soma dos dois números é ' + soma)

// 3. Informe o resultado da subtração desses números
let subtracao = num1 - num2
alert('A subtração dos dois números é ' + subtracao)

// 4. Informe o produto desses números
let prod = num1 * num2
alert(`${num1} * ${num2} = ${prod}`)

// 5. Receba dois números inteiros por meio do prompt
let num3 = parseInt(prompt('Insira um Número'))
let num4 = parseInt(prompt('Insira outro Número'))

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisao = num3 / num4
alert('Essa é a divisão dos dois números ' + divisao)

// 7. Informe o resto da divisão do primeiro pelo segundo
let resto = num3 % num4
alert(`${num3} % ${num4} = ${resto}`)
