/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */


    const preco = Number(prompt("Informe o preço: "));
    const percentual = Number(prompt("Informe o desconto: "));
    const precocomdesconto = preco * (1 - percentual/100);
    const economia = preco - precocomdesconto;
    alert(`o novo preço com desconto é ${precocomdesconto} e você economizou ${economia}}!`)