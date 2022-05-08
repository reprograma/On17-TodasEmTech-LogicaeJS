/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let preco = parseFloat(prompt("Insira o preço da mercadoria"));
    let desconto = parseFloat(prompt("percentual de desconto"));
    let mercadoriaComDesconto = preco - (preco * desconto) / 100;
    alert(`O valor da mercadoria é ${mercadoriaComDesconto.toFixed(2)}`);
    let quantiaEcomizada = preco - mercadoriaComDesconto;
    alert(`Voce ecomonizou ${quantiaEcomizada.toFixed(2)}`);
