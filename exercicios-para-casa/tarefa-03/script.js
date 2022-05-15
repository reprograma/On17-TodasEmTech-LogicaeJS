/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */


     // 1. Solicite o ano de nascimento;
     const usuario =confirm(prompt("Qual é seu ano de nascimento?"))
    console.log(usuario)

   /* 2. Verifique se a pessoa é maior de idade:
 - caso seja, informe na tela que ela pode comprar bebidas;
 - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */
let idade = 21;
if (idade <= 18){
  alert('Proibido comprar bebidas alcoólicas');
} else{
  alert("pode comprar bebidas alcoólicas");
}


