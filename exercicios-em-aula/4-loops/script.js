/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */

/* 
  1. Utilizando a estrutura de repetição for, mostre no console todos números 0 ao 100,
  inclusive esses 2
*/

for (let numero = 0; numero <= 100; numero++) {
  console.log(numero);
}

/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele! %
*/

for (let index = 1; index < 50; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

/*
  3. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let num1 = Number(prompt("Escolha algum numero"));
let num2 = Number(prompt("Escolha outro numero"));

if (num1 > num2) {
  const amigo = num1;
  num1 = num2;
  num2 = amigo;
}
let soma = 0;

for (let contador = num1; contador <= num2; contador++) {
  soma += contador;
}

let contador = num1;

while (contador <= num2) {
  soma += contador;
  contador++;
}

do {
  soma += contador;
  contador++;
} while (contador <= num2);

alert(`a soma de todos os numeros entre ${num1} e ${num2} é ${soma}`);
