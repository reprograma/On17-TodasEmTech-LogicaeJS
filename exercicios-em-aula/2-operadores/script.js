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
let num1 = Number(prompt("Insira um numero"));
let num2 = Number(prompt("Insira um numero"));
console.log(num1, num2);


// 2. Informe na tela a soma desses números
let soma = num1 + num2;
console.log(soma);

// 3. Informe o resultado da subtração desses números
let subtração = num1 - num2;
console.log(subtração);


// 4. Informe o produto desses números
let produto = num1 * num2;
console.log(produto);


// 5. Receba dois números inteiros por meio do prompt
let num01 = Number.parseInt(prompt("Insira um numero inteiro"));
let num02 = Number.parseInt(prompt("Insira um numero inteiro"));
console.log(num01 , num02);


// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisão = num01 / num02;
console.log(divisão);

// 7. Informe o resto da divisão do primeiro pelo segundo
let resto = num01 % num02;
console.log(resto);
