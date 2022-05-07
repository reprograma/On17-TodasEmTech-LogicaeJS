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

if (letraEscolhida === 'a' || letraEscolhida === 'e'
  || letraEscolhida === 'i' || letraEscolhida === 'o'
  || letraEscolhida ==='u'){
    

}



// 

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

  switch (numeroEscolhido) {
    case 1:
    console.log('segunda');
    break;
 switch (numeroEscolhido) {
    case 2:
    console.log('terca');
  switch (numeroEscolhido) {
    case 3:
    console.log('quarta');
  switch (numeroEscolhido) {
    case 4:
    console.log('quinta');
  switch (numeroEscolhido) {
    case 5:
    console.log('sexta');
  switch (numeroEscolhido) {
    case 6:
    console.log('sabado');{
  switch (numeroEscolhido) {
    case 7:
    console.log('domingo');{

    
  }






/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
const num1 = Number(prompt('insira um numero'));
const num2 = number(prompt('insira um numero' ));

if (num1 > num2) {
  alert(num1);
} else if (num2 > num1){}
  alert(num2);
} else {
  console.log('os numeros são iguais');
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

const nota1 = Number(prompt('insiraa a primeira noto'));


let media = (nota1 + nota2 + nota3) /3;

if(media >= 7){
  alert ("Parabens, voce foi aprovado, aproveita suas ferias!")
} else if (media >= 5 && media <7){
  alert ("voce esta de recuperação");
} else if (media <=4);
  alert("voce esta reprovado , sinto muito!")


/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/