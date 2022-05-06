/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá aluna do Reprograma";
console.log(message);


// 2. Crie uma variável que armazene seu nome
let nome = "Mariana Orico";

// 3. Crie uma variável que armazene o ano de seu nascimento
let anoDeNascimento = "1998";


// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript

let jsHoje = false;
let pergunta = ("Hoje foi seu primeiro contato com JS?")

confirm(pergunta);

if (true) {
    alert("Que massaaa");
};

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)

console.log("Sou " + nome + " nasci em " + anoDeNascimento);


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(nome));


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let numIndefinido;
console.log(numIndefinido)
console.log(typeof(numIndefinido, nome));


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let numNull = null;
console.log(numNull);
console.log(typeof(numNull));