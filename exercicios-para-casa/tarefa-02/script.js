/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */
    let solicitarPreco = parseFloat(prompt(`solicite preço da mercadoria`));
    alert(`O preço da mercadoria é ${solicitarPreco} `);
    
    let descMercadoria = parseInt(prompt(`solicite um desconto`));
    
    let valorMercadoriaDesc = solicitarPreco - (solicitarPreco * descMercadoria)/100;
    alert(`valor da mercadoria com desconto é  R$ ${valorMercadoriaDesc.toFixed(2)}`);
    
    let valorDesconto = solicitarPreco - valorMercadoriaDesc;
    alert(`Você economizou R$ ${valorDesconto.toFixed(2)}`);