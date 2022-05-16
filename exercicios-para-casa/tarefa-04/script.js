    /**
        Tarefa 04

        1. Receba o preço de cada um dos 10 itens;
        2. Mostre na tela a soma de todos os preços.
    */

    // criando uma array vazia para receber os valores do usuário
    let arrayPrices = [];

    // pedindo 10 vezes para o usuário digitar o valor do produto
    do {
        let whatPrice = Number(prompt("Digite o valor do item:"));
        // enviando os valores coletados para a "arrayPrices"
        arrayPrices.push(whatPrice);
    } while (arrayPrices.length < 10);

    // criando a variável que permitirá a soma dos valores dos produtos entre si
    let firstNumber = 0;
    // criando a array que irá armazenar os itens somados
    let finalSum = [];

    // percorrendo a array de dos preços e extraindo os números
    for (let item = 0; item <= arrayPrices.length; item++) {
        let justPrice = arrayPrices[item];
        // "+=" é igual a "x=x+y", e "inicio" muda sempre que o laço roda (somando os números entre si)
        let elementsSum = firstNumber += justPrice;
        // armazenando os valores somados na array "finalSum"
        finalSum.push(elementsSum);
        
        // quando o tamanho da array "finalSum" for igual ao da "arrayPrices", imprimimos o ultimo index, que o valor final da soma
        if (finalSum.length === arrayPrices.length){
            console.log(finalSum[finalSum.length - 1]);
        };
    };