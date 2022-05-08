/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let mensage = 'Olá, Mundo!';
console.log(mensage);

// 2. Crie uma variável que armazene seu nome
let myName = 'Thayanne';
console.log(myName);

// 3. Crie uma variável que armazene o ano de seu nascimento
let year = 'Eu nasci no ano de 1997';
console.log(year);

/* outra forma de fazer: 
  const year = 1997
  console.log("Eu nasci no ano de" + year)
*/

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let firstTime = 'Hoje, dia 30/04/22 está sendo meu primeiro contato com JS';
console.log(firstTime);

// outra forma de fazer: 
  let javascriptForThefirstTime = true;
  console.log(javascriptForThefirstTime);


// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log(mensage, myName, year, firstTime);


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(mensage));
console.log(typeof(myName));
console.log(typeof(year));
console.log(typeof(javascriptForThefirstTime));


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
var vazio;
console.log(vazio, typeof(vazio));


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let aNull = null
console.log(aNull)
