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
if(letraEscolhida == "a" || letraEscolhida == "e" || letraEscolhida == "i" || letraEscolhida == "o" || letraEscolhida == "u"){
  console.log("Essa letra é uma vogal");
}else{
  console.log("NÃO é vogal");
}


switch (letraEscolhida){
  case "a":
    console.log("Essa letra é uma vogal");
  break;
  
  case "e": 
    console.log("Essa letra é uma vogal");
  break

  case "i":
    console.log("Essa letra é uma vogal");
  break

  case "o":
    console.log("Essa letra é uma vogal");
  break

  case "u":
    console.log("Essa letra é uma vogal");
  break

  default:
    console.log("NÃO é vogal");
}


/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/
let numeroEscolhido = Number(prompt("Insira um numero de 1-7"));

switch(numeroEscolhido){
  case 1: 
    console.log("Domingo");
  break

  case 2: 
    console.log("Segunda");
  break

  case 3: 
    console.log("Terça");
  break

  case 4: 
    console.log("Quarta");
  break

  case 5: 
    console.log("Quinta");
  break

  case 6: 
    console.log("Sexta");
  break;

  case 7: 
    console.log("Sábado");
  break

  default:
    console.log("Número inválido!");
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

if(n1 > n2){
  alert(`${n1} é maior.`);
}else if(n2 > n1){
  alert(`${n2} é maior.`);
}else{
  console.log(`${n1} e ${n2} são iguais.`);
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
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let media = (nota1 + nota2 + nota3)/3;
if(media >= 7){
  console.log("Parabéns, você foi aprovado, aproveite suas férias!");
}else if(media >= 5){
  console.log("Você está de recuperação!");
}else{
  console.log("Que pena, você foi reprovado.");
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let v1 = Number(prompt("Digite o primeiro número: "));
let v2 = Number(prompt("Digite o segundo número: "));

let soma = 0;
  for(let c=v1; c<=v2; c+=1){
    soma += c;
  }
console.log(`Total = ${soma}.`)