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
const num2 = Number(prompt("Insira outro número"));
console.log(num1)
console.log(num2)


// 2. Informe na tela a soma desses números
let soma = num1 + num2;
alert("O resultado é: " + soma);

// 3. Informe o resultado da subtração desses números
let diff = num1 - num2;
alert("O resultado é:" + diff);


// 4. Informe o produto desses números
let product = num1 * num2;
alert("O resultado é:" + product);


// 5. Receba dois números inteiros por meio do prompt
let c = parseInt(prompt("Insira um número"));
let d = parseInt(prompt("Insira outro número"));


// 6. Informe o resultado da divisão do primeiro pelo segundo
let div = c / d;
alert("O resultado é" + div);


// 7. Informe o resto da divisão do primeiro pelo segundo
let rest = c % d;
alert("O resultado é" + rest);
