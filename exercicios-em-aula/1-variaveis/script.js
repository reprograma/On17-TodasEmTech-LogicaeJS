/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá Mundo!"
console.log(message)

// 2. Crie uma variável que armazene seu nome
let myName = "Ercilia"
console.log(myName)

// 3. Crie uma variável que armazene o ano de seu nascimento
let nascimento = "21 de setembro"
console.log(nascimento)

const year = 1990
console.log("eu nasci no ano de"+ year)
// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let contatojava = "Meu primeiro contato com Java Script foi ótimo"
console.log(contatojava)

let javascriptForTheFirstTime = false
console.log(javascriptForTheFirstTime)

// 5. Imprima, no console, seu nome, o ano de seu nascimento
let phrase1="Olá meu nome é Ercilia" + myName + "eu nasci em" + nascimento + contatojava;
console.log (myName, nascimento, contatojava)

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof (myName))
console.log (typof (year))
console.log (typeop (contatojava))

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let emptyVariable;
console.log (emptyVariable)
console.log (typeof (emptyVariable))


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nulVariable = null;
console.log(nulVariable)
console.log(typeof (nulVariable))

