/**Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

let num1 = 2;
let num2 = 6;
let num3 = 4;
let result = false;

if((num1 % 2 == 1) || (num2 % 2 == 1) || (num3 % 2 == 1)){
  result = true;
};
console.log(result);