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
const num1 = Number(prompt("Insira um número"))
const num2 = Number(prompt("Insira um número"))
console.log('resolução do exercício número 1', num1)
console.log('resolução do exercício número 1', num2)

// 2. Informe na tela a soma desses números
let soma = num1 + num2
console.log('resolução do exercício número 2', soma)

// 3. Informe o resultado da subtração desses números
let sub = num1 - num2
console.log('resolução do exercício número 3', sub)

// 4. Informe o produto desses números
let mult = num1 * num2
console.log('resolução do exercício número 4', mult)

// 5. Receba dois números inteiros por meio do prompt
 var numero1 = parseInt(prompt('Digite um número:'));
 var numero2 = parseInt(prompt('Digite um número:'));
 console.log('resolução do exercício número 5', numero1, numero2)


// 6. Informe o resultado da divisão do primeiro pelo segundo
console.log('resolução do exercício número 6', (numero1/numero2))

// 7. Informe o resto da divisão do primeiro pelo segundo
console.log('resolução do exercício número 7', (numero1 % numero2))