/** Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .*/

let num1 = 2;
let num2 = 7;
let num3 = 3;
let result = false;

if((num1 % 2 == 0) || (num2 % 2 == 0) || (num3 % 2 == 0)){
  result = true;
};
console.log(result);