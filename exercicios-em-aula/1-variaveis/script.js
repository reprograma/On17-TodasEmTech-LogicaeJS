/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console
let mensagem = "ola mundo!"
console.log(mensagem)


// 2. Crie uma variável que armazene seu nome
let meuNome = "Nathália"
console.log(meuNome)


// 3. Crie uma variável que armazene o ano de seu nascimento
const date = "1995"
console.log(date)("eu nasci no ano de" + date)


// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
let aText = "Este é meu primeira vez que tenho contato em javascript pelo vscode" = true
console.log (aText)



// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log("meu nome é" + meuNome + "nasci em" + date + "sobre js" + aText) ;
console.log(meuNome);
console.log(date);
console.log(aText);



// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof meuNome);
console.log(typeof date);
console.log('aText é do tipo' + typeof(aText));


// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let emptyVariable;
console.log(emptyVariable);
console.log(typeof(emptyVariable));

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nullVariable;
console.log(nullVariable);
console.log(typeof(nullVariable));
