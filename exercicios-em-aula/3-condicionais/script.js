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

if (letraEscolhida == 'a' || letraEscolhida == 'e' || letraEscolhida == 'i' || letraEscolhida == 'o' || letraEscolhida == 'u') {
  alert(`${letraEscolhida} é vogal`);
} else {
  alert(`${letraEscolhida} é consoante`);
}

switch (letraEscolhida) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    alert("essa letra é uma vogal");
    break;
  default:
    alert("essa letra é uma consoante");
}

// 

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

switch (numeroEscolhido) {
  case '1':
    alert("Domingo");
    break;
  case '2':
    alert("Segunda-Feira");
    break;
  case '3':
    alert("Terça-Feira");
    break;
  case '4':
    alert(Quarta-Feira);
    break;
  case '5':
  alert(Quinta-Feira);
    break;
  case '6':
  alert(Sexta-Feira);
    break;
  case '7':
    alert("Sábado");
    break;
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

const num1 = Number(prompt("Insira um número"));
const num2 = Number(prompt("Insira outro número"));

if (num1 > num2) {
    alert(num1);
} else if (num2 > num1) {
  alert(num2);
}else {
    console.log("Os números são iguais")
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

const nota1 = Number(prompt("Insira a primeira nota:"));
const nota2 = Number(prompt("Insira a segunda nota:"));
const nota3 = Number(prompt("Insira a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  alert(`Parabéns, você foi aprovado, aproveite suas férias!`);
} else if (media >= 5) {
  alert(`Você está de recuperação!`);
} else {
  alert(`Que pena, você foi reprovado.`);
}


/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}