/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no 
let mensagem ="Olá Mundo!";
console.log(mensagem);


// 2. Crie uma variável que armazene seu nome
const nome = "Leticia Coelho";
console.log(nome);


// 3. Crie uma variável que armazene o ano de seu nascimento
const anoNascido = 1993;
console.log(anoNascido);


// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript
const primeiroContato = false;


// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)
console.log (nome + " " + anoNascido + " " + primeiroContato);


// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas
console.log(typeof(nome));
console.log(typeof(anoNascido));
console.log(typeof(primeiroContato));



// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console
let semvalor;
console.log(semvalor);
console.log(typeof(semvalor));


// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console
let nulo = null;
console.log(nulo);
console.log(typeof(nulo));