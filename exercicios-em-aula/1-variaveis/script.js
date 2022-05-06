/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */

// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console

let message = "Olá mundo";
console.log(message);

// 2. Crie uma variável que armazene seu nome

let meuNome = "Tamires";
console.log(meuNome);

// 3. Crie uma variável que armazene o ano de seu nascimento
let meuNascimento = 1993;
console.log(meuNascimento);
// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let PrimeiroContatoComJavaScript = "Hoje não foi meu primeiro contato com JS";
console.log(PrimeiroContatoComJavaScript);

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(`${meuNome} ${meuNascimento} , ${PrimeiroContatoComJavaScript}`);

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(
  typeof meuNome +
    " " +
    typeof meuNascimento +
    " " +
    typeof PrimeiroContatoComJavaScript
);
// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let semValor;
console.log(semValor);

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let tudoNulo = null;
console.log(tudoNulo);
