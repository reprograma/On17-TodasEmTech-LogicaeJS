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
const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite outro número"))
console.log(numero1)
console.log(numero2)

// 2. Informe na tela a soma desses números
let soma = numero1 + numero2;
alert("A soma é " + soma);

// 3. Informe o resultado da subtração desses números
let subtracao = numero1 - numero2;
alert("A diferença é " + subtracao);

// 4. Informe o produto desses números
let produto = numero1 * numero2;
alert("O produto é " + produto)

// 5. Receba dois números inteiros por meio do prompt
let numero3 = parseInt(prompt("Novamente, digite mais um número"));
let numero4 = parseInt(prompt("Digite um último número"));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisao = numero3 / numero4;
alert ("A divisão é do primeiro número pelo segundo é " + divisao)

// 7. Informe o resto da divisão do primeiro pelo segundo
let mod = numero4 / numero3;
alert ("A divisão é do segundo número pelo primeiro é " + mod)