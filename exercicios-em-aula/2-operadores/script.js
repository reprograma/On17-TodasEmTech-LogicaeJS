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
const num1 = Number(prompt("Insira um número"));
const num2 = Number(prompt("Insira um número"));
console.log(num1);
console.log(num2);

// 2. Informe na tela a soma desses números
let soma = Number(alert(num1 + num2));


// 3. Informe o resultado da subtração desses números
let subtração = Number(alert(num1 - num2));


// 4. Informe o produto desses números
let produto = Number(alert(num1 % num2));

// 5. Receba dois números inteiros por meio do prompt
const numInt1 = parseInt(prompt('Insira um número inteiro'))
const numInt2 = parseInt(prompt ('Insira outro número inteiro'))
console.log(numInt1);
console.log(numInt2);

// 6. Informe o resultado da divisão do primeiro pelo segundo
const divInt = Number (alert(numInt1 / numInt2));

// 7. Informe o resto da divisão do primeiro pelo segundo
const resto = Number (alert(numInt1 % numInt2));