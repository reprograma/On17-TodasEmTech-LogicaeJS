/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console

let message = "Olá, Mundo!"
console.log(message)


// 2. Crie uma variável que armazene seu nome
let myName = "Mariana"
console.log(myName)

// 3. Crie uma variável que armazene o ano de seu nascimento
let birthday = 1991
console.log("Eu nasci em " + birthday)

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let firstContact = true
console.log(firstContact)

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log("Olá, meu nome é " + myName + " nasci em " + birthday + " e é " + firstContact + " que tenho o primeiro contato com JS")

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof myName)
console.log(typeof (birthday))
console.log(typeof (firstContact))


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let newVariable 
console.log(newVariable)
console.log(typeof(newVariable))

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nullVariable = null;
console.log(nullVariable)
consolelog(typeof(nullVariable))