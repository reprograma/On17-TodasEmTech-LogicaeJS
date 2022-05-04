/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let message = "Olá, Mundo"
console.log(message);

// 2. Crie uma variável que armazene seu nome

let nome = "MayaraRocha"
console.log(nome);

// 3. Crie uma variável que armazene o ano de seu nascimento
const year = 1995
console.log("eu nasci no ano de" + year);

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
 let meuPrimeiroContatoComJavaScript = false;
console.log(meuPrimeiroContatoComJavaScript);

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log("meu nome é " + nome +",nasci em " + year + ",Hoje foi meu primeiro contato com JavaScript?" +meuPrimeiroContatoComJavaScript  )
// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof nome);
console.log(typeof(year));
console.log(typeof(meuPrimeiroContatoComJavaScript));

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let variavelVazia;
console.log(variavelVazia);
console.log(typeof(variavelVazia));

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let variavelNull = null;
console.log(variavelNull);
console.log(typeof(variavelNull));