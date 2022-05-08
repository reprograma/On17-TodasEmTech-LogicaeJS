/**
    Tarefa 04

    1. Receba o preço de cada um dos 10 itens;
    2. Mostre na tela a soma de todos os preços.
 */



    // laço, repeticao, lopping 
    
    let resultado = 0;

    for(let contador = 0; contador < 10; contador++){
        console.log("meu valor é: " + contador);
        let valor = prompt("Insira o valor do item" + contador)
        resultado = resultado + Number (valor);
              console.log(resultado)
    }

    alert("Soma total " + resultado)