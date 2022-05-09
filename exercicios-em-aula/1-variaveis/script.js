/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá, mundo!!"
console.log(message)


// 2. Crie uma variável que armazene seu nome
let myName = "Lorena Araújo"
console.log(myName)

// 3. Crie uma variável que armazene o ano de seu nascimento
const myYear = 1990
console.log("Eu nasci no ano de " + myYear)


// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let javascriptForTheFirstTime = false
console.log(javascriptForTheFirstTime)


// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(myName,myYear,javascriptForTheFirstTime)


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof myName)
console.log(typeof(myYear))
console.log(typeof(javascriptForTheFirstTime))


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let semValor;
console.log(semValor)
console.log(typeof(semValor))

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
const nullVariable = null;
console.log(nullVariable)
console.log(typeof(nullVariable))