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

let letraEscolhida = prompt("insira uma letra qualquer do alfabeto").toLowerCase();

if (letraEscolhida === 'a') {
  console.log('esa letra é uma vogal');
} else if (letraEscolhida === 'e') {
  console.log('essa letra é uma vogal');
} else if (letraEscolhida === 'i'){
  console.log('essa letra é uma vogal');
} else if (letraEscolhida === 'o'){
  console.log('essa letra é uma vogal');
} else if (letraEscolhida === 'u'){
 console.log('essa letra é uma vogal');
} else {
  console.log('essa letra não é uma vogal');
}

switch (letraEscolhida) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert('é uma vogal')
    break;
  default:
    alert('não é uma vogal')      
}

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

switch (numeroEscolhido) {
  case 1:
    console.log('segunda');
    break;
  case 2:
    console.log('terça');
    break;
  case 3:
    console.log('quarta');
    break;
  case 4:
    console.log('quinta');
    break;
  case 5:
    console.log('sexta');
    break;
  case 6:
    console.log('sabado');
    break;
  case 7:
    console.log('domingo');
    break;

}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
const num1 = Number(prompt("Insira um numero"));
const num2 = Number(prompt("Insira outro numero"));

if(num1>num2) {
  alert(num1);
} else if(num2>num1) {
  alert(num2);
} else {
console.log("os numeros são iguais")
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
const nota1 = Number(prompt("Insira a primeira nota"));
const nota2 = Number(prompt("Insira a segunda nota"));
const nota3 = Number(prompt("Insira a terceira nota"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  alert("Parabens vc foi aprovado, aproveite suas ferias!");
} else if (media >= 5 && media < 7) {
  alert("Voce esta de recuperaçao");
} else {
  alert ("Voce foi reprovado");
}