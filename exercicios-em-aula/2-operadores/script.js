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

const num1 = Number(prompt("Insira o primeiro número"));
const num2 = Number(prompt("Insira o segundo número"));

// 2. Informe na tela a soma desses números

let soma = num1 + num2;

// 3. Informe o resultado da subtração desses números

let subtracao = num1 - num2;

// 4. Informe o produto desses números
let multiplicacao = num1 * num2;

// 5. Receba dois números inteiros por meio do prompt
const numInt1 = parseInt(prompt("Insira o primeiro numero"));
const numInt2 = parseInt(prompt("Insira o segundo numero"));
// 6. Informe o resultado da divisão do primeiro pelo segundo

let divisao = numInt1 / numInt2;
// 7. Informe o resto da divisão do primeiro pelo segundo

let resto = numInt1 % numInt2;

console.log(resto);
