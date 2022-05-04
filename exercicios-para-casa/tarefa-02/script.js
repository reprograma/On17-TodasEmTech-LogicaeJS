/**
    Tarefa 02

    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

 let price = prompt('Informe o preço da mercadoria');
 console.log(price);
 let discount = prompt('Informe o percentual do desconto');
 console.log(discount);

 let priceWithDiscount = (price/100) * (100-discount);
 alert("O valor da mercadoria após o desconto é :" + priceWithDiscount);

 alert(`Você economizou ${price - priceWithDiscount}`)