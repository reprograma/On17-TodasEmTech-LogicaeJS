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
const numberOne = Number(prompt("Digite um número"));
const numberTwo = Number(prompt("Digite outro número"));

// 2. Informe na tela a soma desses números
let soma = numberOne + numberTwo;

window.alert(`A soma desses números é de ${soma}`);

// 3. Informe o resultado da subtração desses números

let subtração = numberOne - numberTwo;

window.alert(`A subtração desses números é de ${subtração}`);

// 4. Informe o produto desses números

let multiplicacao = numberOne * numberTwo;

window.alert(`A multiplicação desses números é de ${multiplicacao}`);

// 5. Receba dois números inteiros por meio do prompt
const numberOneInt = parseInt(prompt("Digite um número"));
const numberTwoInt = parseInt(prompt("Digite outro número"));

// 6. Informe o resultado da divisão do primeiro pelo segundo
let divisaoInt = numberOneInt / numberTwoInt;
window.alert(`A divisão desses números é de ${divisaoInt}`);

// 7. Informe o resto da divisão do primeiro pelo segundo

let restoDivisao = numberOneInt % numberTwoInt;
window.alert(`O resto da divisão desses números é de ${restoDivisao}`);
