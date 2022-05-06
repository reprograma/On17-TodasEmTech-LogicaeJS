/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let preco = parseFloat(prompt("Digite o valor da mercadoria"));
    let percentual = parseFloat(prompt("Digite o percentual de desconto"))/100

    let valorAdescontar = preco - (preco * percentual);
    let diferenca = preco * percentual;

    alert("O valor final é R$ " + valorAdescontar + " e você economizou R$ " + diferenca);
