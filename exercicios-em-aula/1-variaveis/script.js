/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá Mundo";
console.log (message);


// 2. Crie uma variável que armazene seu nome
let meuNome = "Gabriella";
console.log (meuNome)



3. Crie uma variável que armazene o ano de seu nascimento
const anoNascimento = 1998;

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
const jsHoje = false;


// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(meuNome + ' ' + anoNascimento + ' ' + jsHoje);
console.log(meuNome);
console.log(anoNascimento);
console.log(jsHoje);


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(meuNome));
console.log(typeof anoNascimento);
console.log('jsHoje é do tipo ' + typeof(jsHoje));


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let variable;
console.log(variable);
console.log(typeof(variable));


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let anotherVariable = null;
console.log(anotherVariable);
console.log(typeof(anotherVariable));