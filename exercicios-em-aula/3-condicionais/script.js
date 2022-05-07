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

// ----------- EXEMPLOS LEW ---------------
// let ehVogal = false;
// let vogais = ["a", "e", "i", "o", "u"];
//
// for (let i = 0; i < vogais.length; i++) {
//   const vogal = vogais[i];
//   if (letraEscolhida == vogal) {
//     alert("É uma voaguauaua");
//     ehVogal = true;
//     break;
//   }
// }
//
// if (!ehVogal) {
//   alert("não é vogal");
// }
//
// if (vogais.indexOf(letraEscolhida) == -1) {
//   alert("não é vogal");
// } else alert("é vogal");
// ----------------------------------------

if (letraEscolhida == "a") {
  alert("É uma vogal");
} else if (letraEscolhida == "e") {
  alert("É uma volgal");
} else if (letraEscolhida == "i") {
  alert("É uma volgal");
} else if (letraEscolhida == "o") {
  alert("É uma volgal");
} else if (letraEscolhida == "u") {
  alert("É uma volgal");
} else {
  alert("Poxaa não é uma vogal");
}

letraEscolhida = prompt(
  "insira novamente uma letra qualquer do alfabeto"
).toLowerCase();

// switch (letraEscolhida) {
//   case "a":
//     alert("É uma vogal");
//     break;
//   case "e":
//     alert("É uma vogal");
//     break;
//   case "i":
//     alert("É uma vogal");
//     break;
//   case "o":
//     alert("É uma vogal");
//     break;
//   case "u":
//     alert("É uma vogal");
//     break;
//   default:
//     alert("Não é uma vogal D:");
// }

switch (letraEscolhida) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    alert("É uma vogal");
    break;
  default:
    alert("Não é uma vogal D:");
}

//

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let numeroEscolhido = prompt("Insira um numero de 1-7");

switch (numeroEscolhido) {
  case "1":
    alert("É Dobingos");
    break;
  case "2":
    alert("É Segonhas");
    break;
  case "3":
    alert("É Trema");
    break;
  case "4":
    alert("É Quartzu");
    break;
  case "5":
    alert("É Quintonho");
    break;
  case "6":
    alert("É Sesksu");
    break;
  case "7":
    alert("É Sambonha");
    break;
  default:
    alert("Pô... Ai vc me quebar tem que colocar um numero de 1 a 7");
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

let numero1 = Number(prompt("coloca ai um numero qualquer ai pooooo"));
let numero2 = Number(prompt("coloca outro numero ai poooxa vida faz essa ai!"));
let mensagem;

if (numero1 == numero2) {
  mensagem = "São numeros iguais";
} else if (numero1 > numero2) {
  mensagem = numero1 + "é maior que" + numero2; //estou tendo problema dar alert  e falar que um numero é mior que outro
} else if (numero1 < numero2) {
  (mensagem = numero2), "é maior que", numero1;
} else {
  mensagem = "vc nao colocou um numero";
}

alert(mensagem);

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

let nota1 = Number(prompt("coloque sua nota de matematica")); //5
let nota2 = Number(prompt("coloque usa nota de portugues")); //8
let nota3 = Number(prompt("coloque sua nota de fisica")); //7

let soma = nota1 + nota2 + nota3;
console.log(soma);

let media = soma / 3;
console.log(media);

if (media >= 7.0) {
  alert("Aprovado");
} else if ((media >= 5.0, media <= 7.0)) {
  alert("Recuperação");
} else if (media <= 4.0) {
  alert("Reprovado");
} else {
  alert("nao consegui calcular sua media");
}

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/
