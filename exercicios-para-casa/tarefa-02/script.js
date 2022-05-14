/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    const valorMercadoria = "20"
    const desconto = "10";

    const valorMercadoriaPrompt = Number (prompt("digite o valor da mercadoria"));
    const descontoPrompt = Number (prompt("digite valor da porcentagem do desconto"));

    const valorDesconto = (descontoPrompt / 100) * valorMercadoriaPrompt;
    const valorTotal = (valorMercadoriaPrompt - valorDesconto);
        alert("sua mercadoria ficou por " + valorTotal);
        alert("você teve uma economia de " + valorDesconto); 