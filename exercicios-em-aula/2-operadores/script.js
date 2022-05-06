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

const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));


// 2. Informe na tela a soma desses números

let soma = num1 + num2;
alert("O resultado da soma é " + soma);

// 3. Informe o resultado da subtração desses números

let subtracao = num1 - num2;
alert("O resultado da subtração é " + subtracao);

// 4. Informe o produto desses números

let divisao1 = num1 / num2;
alert("O produto dessa divisão é " + divisao1);


// 5. Receba dois números inteiros por meio do prompt

const num3 = parseInt(prompt("Digite um número"));
const num4 = parseInt(prompt("Digite outro número"));


// 6. Informe o resultado da divisão do primeiro pelo segundo

let divisao = num3 / num4;
alert("O resultado da divisão é " + divisao);


// 7. Informe o resto da divisão do primeiro pelo segundo

let mod = num3 % num4;
alert("O resto da divisão é " + mod);

