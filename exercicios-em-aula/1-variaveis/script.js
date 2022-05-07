/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá, Mundo!"
console.log(message)
// 2. Crie uma variável que armazene seu nome
const myName = "Emanuelly"
console.log(myName)
// 3. Crie uma variável que armazene o ano de seu nascimento
const anoNascimento = 1997
console.log("Eu nasci no ano de" + anoNascimento)
// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let contatoJS = false
console.log(contatoJS)
// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(myName + " " + anoNascimento + " " + contatoJS);

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(myName))
console.log(typeof(anoNascimento))
console.log(typeof(contatoJS))

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let variavelVazia;
console.log(variavelVazia)
console.log(typeof variavelVazia)

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
const variavelNull = null;
console.log(variavelNull)
console.log(typeof variavelNull)