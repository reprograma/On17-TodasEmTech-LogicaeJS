# On17-TodasEmTech-LogicaComJS

**30/04/2022 e 05/05/2022**

Board para escrever dúvidas/ comentários em aula: [DontPad](http://dontpad.com/On17-TodasEmTech-LogicaeJS)

## Objetivo

Entender os princípios básicos de lógica de programação a partir da linguagem JavaScript, introduzindo sua sintaxe básica

## JavaScript: o que é?

Antes de tudo, não tem nada a ver com Java - que é outra linguagem de programação que não veremos no curso.

JavaScript é hoje a principal linguagem de programação web, para client-side appliations, podendo também ser utilizada no lado do servidor com auxílio do node.js. A linguagem foi criada em 1995, pelo grupo Netscape Communications.

O JS permite dá um comportamento ao HTML e ao CSS que escrevemos na página, tornando-a mais dinâmica e atrativa para o usuário. Por exemplo, quando você abre um site de delivery e clica em um filtro que mostre apenas restaurantes do seu bairro... Isso é lógica de programação! E essa filtragem só foi possível existir por causa do JavaScript. Ou seja, além de tornar o site mais interessante, ele pode trazer funcionalidades que facilitam muito a nossa vida. Imagine quanto tempo não perderíamos procurando os restaurantes um por um?

### Ferramentas necessárias para essa aula:

Navegador (Google Chrome, Firefox, etc) e editor de texto (VS Code)

## O que é um algoritmo

**Para entender algoritmo de forma não-convencional:**

> [Bubble-sort algorithm - Hungarian Dance](https://youtu.be/lyZQPjUT5B4) <br> > [Exact Instructions Challenge](https://youtu.be/I8IK-yRmtP8)

**Algoritmo é uma "receita"** para executarmos uma tarefa ou resolver algum problema. Utilizamos algoritmos no nosso dia-a-dia para a execução de alguma tarefa ou até mesmo para resolver algum problema.

Para escrever um programa de computador, você tem que dizer ao computador, passo a passo, exatamente o que você quer que ele faça. O computador "executa" o programa, seguindo cada etapa mecanicamente, para atingir o objetivo final.

**Alguns exemplos de algoritmos que podemos citar: receitas culinárias, manual de instrução de aparelhos e funções matemáticas.**

Pense na receita culinária, por exemplo. Ela tem os ingredientes necessários **(dados de entrada)**, passo a passo para realizar a receita **(processamento ou instruções lógicas)** e o prato finalizado **(saída esperada)**.

<img src="images/flow-2.png">

Um algoritmo, portanto, conta com a entrada **(input)**, com o processamento desses dados e saída **(output)** de informações.

As estruturas de um algoritmo são:

- **variáveis**: são as informações de entrada inseridas que determinam aonde o algoritmo poderá ir. As mais comuns são texto, inteiro, lógico e real;
- **comandos de repetição\***: consiste no uso de “se” e “enquanto”, para que o algoritmo saiba o que fazer quando determinados processos ocorrerem e o que fazer se eles mudarem.

### Ferramentas para testar o código

- **Console**:
  O objeto Console fornece acesso ao console de depuração do navegador. O seu funcionamento específico varia de navegador para navegador, mas existe um conjunto de ferramentas que na prática são fornecidas normalmente.

Com o navegador aberto como abrir o painel dedicado Console:

- Pressione F12 ou fn+F12, se o DevTools não estiver aberto no console pressione o botão do Console.
- Pressione Ctrl+Shift+J (Windows/Linux) ou Cmd+Opt+J (Mac)
- Clique com o botão direito do mouse em uma página web qualquer e clique na opção Inspecionar/Inspect, se o DevTools não estiver aberto no console pressione o botão do Console.

<img src = 'images/console.png' width=450px >

#### console.log(), alert(), confirm e prompt

O `console.log()` é uma funcão que utilizamos para testar nosso código. O resultado será impresso no console do navegador.

```js
let mensagem = "Mensagem que vai aparecer no nosso alerta";
console.log(mensagem);
```

O `alert()` tem a mesma função do console.log, porém ele mostra uma mensagem na tela do usuário.

```js
let mensagem = "Mensagem que vai aparecer no nosso alerta";
alert(mensagem);
```

O `confirm` é um alerta que nos oferece uma lógica, com dois botões (`Ok` (true) e `Cancel` (false))

```js
let mensagem = "Aperte o botão ok";
confirm(mensagem);
// Se o usuário apertar Ok vai retornar true, se apertar Cancel vai retornar false
```

O `prompt` é um alerta que nos oferece, além da lógica de botões, um input para coletarmos variáveis.

```js
let nome = "Digite o seu nome";
prompt(nome);
```

## Referenciando o JavaScript dentro do HTML

Você precisa avisar ao navegador que existe um arquivo Javascipt e que ele precisa carregá-lo.

```javascript
<script src="./js/hello.js"></script>`
```

```javascript
<script>
  Seu script Essa não é uma boa prática, serve apenas para exercícios e pequenos
  testes.
</script>
```

---

## Variáveis e constantes

O recurso utilizado nos programas para escrever e **ler dados da memória do computador** é conhecido como variável, que é simplesmente um espaço na memória, o qual reservamos e damos um nome. Por exemplo, podemos criar uma variável chamada "idade" para armazenar a idade de uma pessoa. Você pode imaginar uma variável como uma gaveta "etiquetada" em um armário.

Toda vez que precisarmos armazenar e recuperar dados, utilizaremos variáveis.

No Javascript temos 3 maneiras de usar variáveis:

- var
- let
- const

```javascript
let numero = 1;
let texto = "Javascript!!!";
```

### Declarando variáveis

Um identificador JavaScript deve começar com:

- uma letra
- underline (\_)
- cifrão ($)

Os caracteres subsequentes podem também ser

- números (0-9)
- letras incluem caracteres de "A" a "Z" (maiúsculos)
- caracteres de "a" a "z" (minúsculos)

Uma variável não pode ser uma palavra reservada, [clique aqui para saber quais são](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#palavras-chave)

## Tipos de dados

### String

é uma sequência de caracteres usados para representar texto.

```javascript
"Variáveis em Javascript são uma forma para se salvar dados";
"Isabelle";
"1 é um número ímpar";
```

### Number

é um tipo de dado numérico.

```javascript
1;
20;
300;
4000;
94863049863409863;
```

### Boolean

é um tipo de dado lógico que pode ter apenas um de dois valores possíveis: verdadeiro ou falso.

```javascript
false;
true;
```

### Null

representa um valor nulo ou "vazio".

```javascript
null;
```

```javascript
let y = null;
console.log(y);
```

### undefined

```javascript
undefined;
```

```javascript
let x;
console.log(x);
```

O javascript não tem o que chamamos de tipagem de dados que é literalmente descrever qual é o tipo dessa variável, o que ele faz é "entender/adivinhar" qual é o tipo de dados de determinada variável sem ela ter sido declarada no código escrito.

---

## Operadores

### Operadores de atribuição

O operador de atribuição básico é o igual (=), que atribui o valor do operando à direita ao operando à esquerda. Isto é, x = y atribui o valor de y a x.

#### Igual

```javascript
let y = 7;
let x = y; // x é igual à 7
```

### Operadores Aritméticos

#### Adição (+)

```javascript
let y = 7;
let x = 3;
let resultado = y + x;
console.log(resultado); // 10
```

#### Subtração (-)

```javascript
let y = 5;
let x = 2;
let resultado = y - x;
console.log(resultado); // 3
```

#### Multiplicação(\*)

```javascript
let y = 4;
let x = 5;
let resultado = y * x;
console.log(resultado); // 20
```

#### Divisão (/)

O operador de divisão produz o quociente de seus operandos onde o operando da esquerda é o dividendo e o da direita é o divisor.

```javascript
let y = 10;
let x = 2;
let resultado = y / x;
console.log(resultado); // 5
```

#### Módulo (%)

O operador módulo retorna o resto inteiro da divisão de um numero pelo outro.

```javascript
let y = 10;
let x = 2;
let resultado = y % x;
console.log(resultado); // 0
```

#### Sintaxe encurtada:

Incremento (++)
Decremento (--)
Expoente (\*\*)

abreviados:
+=
-=
\*=
/=

### Operadores de Comparação - Relacional e Igualdade

#### == Igual

Retorna verdadeiro caso os operandos sejam iguais.

```javascript
3 == let1;
"3" == let1;
3 == "3";
```

#### != Não igual

Retorna verdadeiro caso os operandos não sejam iguais.

```javascript
let1 != 4;
let2 != "3";
```

#### === Estritamente igual

Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object.is e igualdade em JS.

```javascript
3 === let1;
```

#### !== Estritamente não igual

Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

```javascript
let1 !== "3";
3 !== "3";
```

#### > maior que

O operador de Maior retorna true se o operando da esquerda for maior que o operando da direita.

```javascript
4 > 3; // true
```

#### >= maior ou igual a

O operador maior ou igual retorna true se o operando da esquerda for maior ou igual ao operando da direita.

```javascript
4 >= 3; // true
3 >= 3; // true
```

#### < menor que

O operador menor retorna true (verdadeiro) se o operando da esquerda for menor que o operando da direita.

```javascript
3 < 4; // verdade
```

#### <= menor ou igual a

O operador menor ou igual retorna true (verdadeiro) se o operando da esquerda for menor ou igual ao operando da direita.

```javascript
3 <= 4; // verdade
```

### Operadores Lógicos

#### && E lógico

Se o primeiro valor for verdadeiro, ou puder ser considerado ou convertido pra verdadeiro retorna o segundo valor.

Se o primeiro valor for falso, retorna falso.

```javascript
true && "oi"; // "oi"
"oi" && true; // true
true && false; // false
```

#### || Ou lógico

Se o primeiro valor for verdadeiro, ou puder ser considerado ou convertido pra verdadeiro retorna o primeiro valor.

Se o primeiro valor for falso, retorna o segundo valor.

```javascript
false || true; // true
false || false; // false
false || "oi"; // "oi"
false || 0; // 0
```

#### ! Não lógico

Esse operador inverte o valor de uma expressão

Obs: Se um valor pode ser convertido para verdadeiro, este valor é chamado de truthy. Se um valor pode ser convertido para falso, este valor é chamado de falsy.

Exemplos de expressões que podem ser convertidas para falso são:

- null;
- NaN;
- 0;
- string vazia ("");
- undefined.

Todos os outros são considerados verdadeiros.

```javascript
!true; // false
!false; // true
!"Oi"; // false
!""; // true
```

## Condicionais

Usamos para verificar uma condição e definir se algo deve ou não acontecer a partir da condição dada.

É a linguagem que utilizamos para nos comunicar, repare:

Se amanhã fizer sol, vou viajar para a praia.

Temos uma condição (Se amanhã fizer sol) para executar uma ação (viajar para a praia) dependendo do resultado dessa condição. Se verdadeira, a ação é executada.

### Expressões condicionais simples

```javascript
// Variável booleana verdadeira
let sol = true;

// Condição
if (sol) {
  // Ação
  alert("Vou viajar para a praia!");
}
```

### Estrutura if / else

```javascript
// Variável booleana verdadeira
var sol = false;

// Condição
if (sol) {
  // Ação
  alert("Vou viajar para a praia!");
} else {
  // Ação
  alert("Vou ao cinema");
}
```

### Estrutura if / else if / else

```javascript
// Variável booleana verdadeira
let hora = 8;

// Condição
if (hora <= 12) {
  // Ação
  alert("Bom dia");
} else if (hora <= 18) {
  // Ação
  alert("Boa tarde");
} else {
  // Ação
  alert("Boa noite");
}
```

### Switch case

Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

```javascript
let dia = "Segunda";

switch (dia) {
  case "Segunda":
    alert("😴");
    break;
  case "Terça":
    alert("😐");
    break;
  case "Quarta":
    alert("🙂");
    break;
  case "Quinta":
    alert("😬");
    break;
  case "Sexta":
    alert("🤪");
    break;
  case "Sábado":
    alert("😎");
    break;
  case "Domingo":
    alert("😞");
    break;
  default:
    alert("Não achei sua condição.");
}
```

### Importância do break (switch case)

A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch.

Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não.

### Operador ternário

O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

```javascript
let idade = 16;

let acesso = idade > 18 ? true : false;
```

A expressão antes do ? é a condição if, se for verdadeira o primeira ação é executada, caso contrário a segunda ação, a que vem depois dos :, é executada

É muito útil para testes mais básicos em que se tem apenas uma única linha de código dentro do if ou do else.

```javascript
let salario = 1000;
let bonus = salario * (salario > 1000 ? 0.1 : 0.15);
```

## Laços de repetição

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.

JavaScript suporta diferentes tipos de loops:

### for

Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos.

```javascript
var passo;
for (passo = 1; passo <= 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 1 a 5.
  console.log("já dei " + passo + " passos");
}
// já dei 1 passos
// já dei 2 passos
// já dei 3 passos
// já dei 4 passos
// já dei 5 passos
```

### while

O "while" permite que a iteração ocorra enquanto a condição estiver sendo satisfeita.

Ou seja, enquanto (while) a condiçao x for satisfeita, execute tal instrução.

```javascript
let indiceUVAlto = true;

while (indiceUVestaAlto) {
  alert("Use filtro solar");
}
```

Lendo a execução acima, podemos entender que: enquanto a variável indiceUVAlto for verdadeira, virá um alerta indicando que você precisa usar filtro solar.

Outro exemplo usando números:

```javascript
while (i < 10) {
  console.log("The number is " + i);
  i++;
}
```

Ou seja, enquanto o valor da variável i for menor que 10, o console irá imprimir a frase "the number is (valor atual de i)".

## Funções e parâmetros

Uma função JavaScript é definida com a palavra-chave `function`, seguida por um **nome**(opcional), seguido por parênteses **()**.

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras que as variáveis).

Os parênteses podem incluir nomes de parâmetros separados por vírgulas:
**(parâmetro1, parâmetro2, ...)**

O código a ser executado pela função é colocado entre colchetes: **{}**

```javascript
function nome(parametro1, parametro2, parametro3) {
  // código a ser executado
}
```

Os **parâmetros** da função estão listados entre parênteses () na definição da função.

Os **argumentos** da função são os **valores** recebidos pela função quando ela é chamada.

Dentro da função, os argumentos (os parâmetros) se comportam como **variáveis** locais.

## Arrays

Em JavaScript, o Array representa uma lista de itens. Ele trabalha de uma forma indexada a partir de um valor inteiro começando com 0. Os tipos de dados que você pode colocar no Array são os mais variáveis possíveis, ou seja, uma estrutura heterogênea em que você pode colocar um inteiro, um boolean, um objeto ou outro Array, não existe restrição. Dito isso, a boa prática diz que você deve trabalhar com dados homogêneos dentro de um array.

**Exemplo de Array**

```javascript
let minhaSaladaDeFrutas = ["banana", "maçã", "uva", "morango"];

let arrayHeterogenea = [
  "string",
  true,
  false,
  988776,
  { nome: "mariazinha", idade: 12 },
  [1, 1, 2, 3, 44, 5678],
];
```

### Acessando um item do array a partir do seu índice:

```javascript
let arr = ["primeiro", "segundo"];
console.log(arr[0]); // exibe 'primeiro'
console.log(arr[1]); // exibe 'segundo'
```

---

## Links interessantes para aprender e exercitar

#### Livros Free

- [Eloquent JavaScript (Online) ](https://braziljs.github.io/eloquente-javascript/)

- [Eloquent JavaScript (PDF Download)](https://github.com/braziljs/eloquente-javascript/blob/master/pdf/livro.pdf)

- [Apostila de HTML, CSS e JavaScript](https://www.caelum.com.br/apostila/apostila-html-css-javascript.pdf)

#### Canais de youtube

- [Pare de chutar JavaScript - Collab Code](https://www.youtube.com/watch?v=RrwkYVHxotk&-list=PLirko8T4cEmyQagmRU6f9HCMTpL6Qk2I8)

- [JavaScript - Rodrigo Branas](https://www.youtube.com/watch?v=093dIOCNeIc&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)

- [Curso de Javascript - Daniel Berg](https://www.youtube.com/watch?v=pL9nX6Ac2Lc&list=PLbV6TI03ZWYVP6EByYoUxZJeZaqitHi9r)

- [Roger Melo](https://www.youtube.com/channel/UCmjDevp9Y8r-qi-xueD3Izg)

- [Curso JavaScript - Curso em Video](https://www.cursoemvideo.com/course/javascript/)

#### Documentações

- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [W3Schools](https://www.w3schools.com/js/default.asp)

#### Sites

- [Dev Furia ](http://devfuria.com.br/javascript/)

- [Cangaceiro JavaScript](http://cangaceirojavascript.com.br/)

- [da2k blog](https://blog.da2k.com.br/categories/javascript/)

#### Plataformas de exercícios

- [Edabit - JavaScript](https://edabit.com/challenges/javascript)

- [URI Online Judge](https://www.urionlinejudge.com.br/judge/pt/login?redirect=%2Fpt)

- [FreeCodeCamp](https://www.freecodecamp.org/)

- [KhanAcademy](https://www.khanacademy.org/computing/computer-programming)

- [Dev Furia - Lógica Programação](http://devfuria.com.br/logica-de-programacao/)
