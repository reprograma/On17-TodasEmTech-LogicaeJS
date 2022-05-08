/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements
    
    if...else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    Switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

/*let letraEscolhida = prompt("insira uma letra qualquer do alfabeto").toLowerCase();
if(letraEscolhida == 'a' || letraEscolhida == 'e' || letraEscolhida == 'i' || letraEscolhida == 'o' || letraEscolhida == 'u'){
   console.log('Isto é uma vogal!', letraEscolhida);
} else {
    console.log('Isto é uma consoante!', letraEscolhida)
}

let letra = prompt("insira uma letra qualquer do alfabeto").toLowerCase();

switch(letra) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log('Isto é uma vogal!', letraEscolhida); 
    break;
  default:
    console.log('Isto é uma consoante!', letraEscolhida);
}
*/


/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = parseInt(prompt("Insira um numero de 1-7"));

switch(numeroEscolhido) {
  case 1:
    console.log('Hoje é domingo' , numeroEscolhido);
    break;
  case 2:
    console.log('Hoje é segunda-feira' , numeroEscolhido);
    break;
  case 3:
    console.log('Hoje é terça-feira' , numeroEscolhido);
    break;
  case 4:
    console.log('Hoje é quarta-feira' , numeroEscolhido);
      break;
  case 5:
    console.log('Hoje é quinta-feira' , numeroEscolhido);
    break;
  case 6:
    console.log('Hoje é sexta-feira' , numeroEscolhido);
    break;
  case 7:
    console.log('Hoje é sábado' , numeroEscolhido);
    break;
  default:
    console.log('Por favor digite um número de 1 a 7!' , numeroEscolhido)
}


/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

let num1 = Number(prompt('digite o primeiro número'))
let num2 = Number(prompt('digite o segundo número'))
if(num1 > num2) {
  console.log('O número ' + num1 + ' é maior que o número ' + num2)
} else if(num2 > num1) {
  console.log('O número ' + num2 + ' é maior que o número ' + num1)
} else {
  console.log('Os números são iguais')
}

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média
     e mostre as seguintes mensagens de acordo com cada situação:
  
    Se a media for igual ou maior que 7 - Aprovado
    Se a media for maior e igual a cinco e menor que 7 - Recuperação 
    Se a media for menor que 5 - Reprovado
  
    Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
    Alunos de recuperação devem ver a mensagem: Você está de recuperação!
    Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))
let media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
  console.log('Parabéns, você foi aprovado. Aproveite suas férias!')
} else if (media >= 5 || media < 7) {
  console.log('Você está de recuperação!')
} else {
  console.log('Que pena! Nos vemos semestre que vem...')
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let numero1 = Number(prompt('digite o primeiro número'))
let numero2 = Number(prompt('digite o segundo número'))

let soma = 0;

while(numero1 <= numero2) {
  soma = soma + numero1
  ++numero1 
}

console.log('Resolução do exercício 5 usando while', soma);

for(let i = numero1; i <= numero2; i++){
  soma += i;
}

console.log('Resolução do exercício 5 usando for', soma)
