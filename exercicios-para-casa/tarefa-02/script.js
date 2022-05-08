/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


//   1. Solicite o preço de uma mercadoria; 
let preco = parseFloat(prompt("insira o preço da mercadoria"));

// 2. Solicite um percentual de desconto;
let desconto = parseFloat(prompt("percentual de desconto"));

// 3. Informe ao usuário o valor da mercadoria após o desconto;
let mercadoriaComDesconto = preco - (preco * desconto) / 100;

alert(`valor da mercadoria é R$ ${mercadoriaComDesconto.toFixed(2)}`);

// 4. Informe ao usuário qual quantia foi economizada por conta do desconto.
let quantiaEconomizada = preco - mercadoriaComDesconto;
alert(`Olha que legal, você economizou R$ ${quantiaEconomizada.toFixed(2)}`);
