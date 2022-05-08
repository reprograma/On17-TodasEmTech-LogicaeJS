/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console

let message= "Olá, mundo!"
console.log(message)

// 2. Crie uma variável que armazene seu nome

let myName = "Luine Mauricio"
console.log(myName)

// 3. Crie uma variável que armazene o ano de seu nascimento

const year = "1988"
console.log("Eu nasci no ano de " + year)

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript

let javascriptForTheFirstTime = true
console.log(javascriptForTheFirstTime)

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)

console.log(myName, year, javascriptForTheFirstTime)
console.log("Meu nome é " + myName + " Nasci em " + year)
// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas

console.log(typeof myName)
console.log(typeof (year))
console.log(typeof(javascriptForTheFirstTime))

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console

let emptyVariable;
console.log(emptyVariable)
console.log(typeof(emptyVariable))

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console