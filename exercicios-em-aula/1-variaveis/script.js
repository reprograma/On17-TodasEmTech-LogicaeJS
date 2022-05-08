/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */

// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá,mundo!";
console.log(message);

// 2. Crie uma variável que armazene seu nome
let myName = "Izadora";
// 3. Crie uma variável que armazene o ano de seu nascimento
let year = 1990;
// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let myFirstJavascript = false;
// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(
  `Meu nome: ${myName}, Meu aniversário: ${year}, Hoje foi o seu primerio contato com Javascript = ${myFirstJavascript}`,
);
// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof myName);
console.log(typeof year);
console.log(typeof myFirstJavascript);

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let myVariable;
console.log(typeof myVariable);

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let myNewVariable = null;
console.log(typeof myNewVariable);
