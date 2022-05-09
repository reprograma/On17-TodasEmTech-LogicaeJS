/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

let nascimento = Number(prompt("Coloca aqui o ano que vc nasceu"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - nascimento;

if (idade >= 18) {
  alert("Compra de goró autorizada");
} else {
  alert("ihhhh não pode beber não");
}
