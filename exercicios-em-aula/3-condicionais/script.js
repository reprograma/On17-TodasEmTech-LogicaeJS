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

let  letraEscolhida  =  prompt ( "insira uma letra qualquer do alfabeto" ) . toLowerCase ( ) ;

if  ( letraEscolhida  ==  'a'  ||  letraEscolhida  ==  'e'  ||  letraEscolhida  ==  'i'  ||  letraEscolhida  ==  'o'  ||  letraEscolhida  ==  'u' )  {
  alert ( ` ${ letraEscolhida } é vogal` ) ;
}  senao  {
  alert ( ` ${ letraEscolhida } é primo` ) ;
}

switch  ( letraEscolhida )  {
  caso  'a' :
  caso  'e' :
  caso  'eu' :
  caso  'o' :
  caso  'u' :
    alert ( "é uma vogal" ) ;
    quebrar ;
  padrão :
    alert ( "é uma correspondência" ) ;
}

// 

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

let  numeroEcolhido  =  prompt ( "Insira um numero de 1-7" ) ;

switch  ( numeroEscolhido )  {
  caso  '1' :
    alerta ( "Domingo" ) ;
    quebrar ;
  caso  '2' :
    alerta ( "Segunda" ) ;
    quebrar ;
  caso  '3' :
    alerta ( "Terça" ) ;
    quebrar ;
  caso  '4' :
    alerta ( "Quarta" ) ;
    quebrar ;
  caso  '5' :
    alerta ( "Quinta" ) ;
    quebrar ;
  caso  '6' :
    alerta ( "Sexta" ) ;
    quebrar ;
  caso  '7' :
    alerta ( "Sábado" ) ;
    quebrar ;
  padrão :
    tente ( "valor inválido, novamente" ) ;
}

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/
const  number1  =  Number ( prompt ( "Primeiro Número" ) ) ;
const  number2  =  Number ( prompt ( "Segundo Número" ) ) ;

if  ( número1  >  número2 )  {
  alert ( ` ${ number1 } é maior que ${ number2 } ` ) ;
}  else  if  ( numero1  <  numero2 )  {
  alert ( ` ${ number1 } é menor que ${ number2 } ` ) ;
}  senao  {
  alert ( `Os números são iguais` ) ;
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
const  note1Student  =  Number ( prompt ( "Nota 1 do aluno:" ) ) ;
const  note2Student  =  Number ( prompt ( "Nota 2 do aluno:" ) ) ;
const  note3Student  =  Number ( prompt ( "Nota 3 do aluno:" ) ) ;
const  notaAluno  =  ( nota1Aluno  +  nota2Aluno  +  nota3Aluno )  /  3 ;


if  ( noteAluno  >=  7 )  {
  alert ( `Parabéns, você foi aprovado, aproveite suas férias!` ) ;
}  else  if  ( noteStudent  >=  5 )  {
  alert ( `Você está de recuperação!` ) ;
}  senao  {
  alert ( `Que pena, você foi reprovado.` ) ;
}
/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/