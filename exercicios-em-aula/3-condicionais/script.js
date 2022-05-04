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

let letraEscolhida = prompt(
  "insira uma letra qualquer do alfabeto"
).toLowerCase();

if (
  letraEscolhida === "a" ||
  letraEscolhida === "e" ||
  letraEscolhida === "i" ||
  letraEscolhida === "o" ||
  letraEscolhida === "u"
) {
  window.alert(`A letra escolhida é uma vogal`);
} else {
  window.alert(`A letra escolhida é uma consoante`);
}

switch (letraEscolhida) {
  case "a":
    alert("A letra escolhida é uma vogal");
    break;
  case "e":
    alert("A letra escolhida é uma vogal");
    break;
  case "i":
    alert("A letra escolhida é uma vogal");
    break;
  case "o":
    alert("A letra escolhida é uma vogal");
    break;
  case "u":
    alert("A letra escolhida é uma vogal");
    break;
  default:
    alert("A letra escolhida é uma consoante");
}

//

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

switch (numeroEscolhido) {
  case "1":
    alert("Segunda-feira");
    break;
  case "2":
    alert("Terça-feira");
    break;
  case "3":
    alert("Quarta-feira");
    break;
  case "4":
    alert("Quinta-feira");
    break;
  case "5":
    alert("Sexta-feira");
    break;
  case "6":
    alert("Sabado");
    break;
  case "7":
    alert("Domingo");
    break;
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

const numberOne = prompt("Digite um número");
const numberTwo = prompt("Digite outro número");

if (numberOne > numberTwo) {
  window.alert(`${numberOne} é o maior`);
} else if (numberOne < numberTwo) {
  window.alert(`${numberTwo} é o maior`);
} else {
  window.alert("Os números são iguais");
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

const nota1 = Number(prompt("insira a primeira nota"));
const nota2 = Number(prompt("insira a segunda nota"));
const nota3 = Number(prompt("insira a terceira nota"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
  window.alert("Parabéns, você foi aprovado, aproveite suas férias!");
} else if (media >= 5 && media < 7) {
  window.alert("Você está de recuperação!");
} else {
  window.alert("Reprovado");
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
let x = Number(prompt("Digite um numero"));
let y = Number(prompt("Digite outro numero"));
let contador = 0;

for (let i = x; i <= y; i++) {
  contador += i;
}
window.alert(`A soma desses numeros é: ${contador} `);

let contador2 = 0;
let i = x;

while (i <= y) {
  contador2 += i;
  i++;
}

window.alert(`A soma desses numeros é: ${contador2} `);
