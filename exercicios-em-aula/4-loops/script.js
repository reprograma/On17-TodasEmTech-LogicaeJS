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
for(let c=0; c<=100; c+=10){
  console.log(c);
}

/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/
for(let cont=1; cont<=50; cont+=1){
  if(cont%2===0){
    console.log(cont);
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

/*FOR*/
let v1 = Number(prompt("Digite o primeiro valor (for): "));
let v2 = Number(prompt("Digite o segundo valor (for): "));

let soma = 0;
  for(let c=v1; c<=v2; c+=1){
    soma += c;
  }
console.log(`Total = ${soma}.`);

/*WHILE*/
let num1 = Number(prompt("Digite o primeiro número (while): "));
let num2 = Number(prompt("Digite o segundo número (while): "));

let total = 0;
let contador=num1;
while(contador<=num2){
  total += contador;
  contador+=1;
}
console.log(`Soma = ${total}.`);
