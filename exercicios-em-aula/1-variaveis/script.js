/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */

// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
console.log(`Olá, mundo!`);

// 2. Crie uma variável que armazene seu nome
const nome = "Mariana";
console.log("Meu nome é " + nome);

// 3. Crie uma variável que armazene o ano de seu nascimento
const anoNascimento = 1990;
console.log("Nasci no ano: " + anoNascimento);

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
const primeiroContatoJavascript = false;
console.log("Hoje é o meu primeiro contato com JavaScript? " + primeiroContatoJavascript);

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(nome, anoNascimento, primeiroContatoJavascript);

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof nome);
console.log(typeof anoNascimento);
console.log(typeof primeiroContatoJavascript);

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let variavel; //undefined
console.log(variavel);
console.log(typeof variavel);

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nula = null;
console.log(nula);
console.log(typeof nula);
