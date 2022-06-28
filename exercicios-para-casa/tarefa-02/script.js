//   Tarefa 02

    // 1. Solicite o preço de uma mercadoria;

        let precoMercadoria = parseFloat(prompt("Digite o valor da mercadoria"));

    // 2. Solicite um percentual de desconto;
        
        let percentualDesconto = parseFloat(prompt("Insira o percentual de desconto:"));


    // 3. Informe ao usuário o valor da mercadoria após o desconto;

        let desconto = precoMercadoria - (precoMercadoria * percentualDesconto) / 100;
        let mercadoriaComDesconto = precoMercadoria - desconto;
        alert('O valor da mercadoria com desconto é de ${mercadoriaComDesconto}');

    // 4. Informe ao usuário qual quantia foi economizada por conta do desconto.

        let valorEconomizado = precoMercadoria - mercadoriaComDesconto;
        alert('Você economizou R$ ${valorEconomizado}');     
 