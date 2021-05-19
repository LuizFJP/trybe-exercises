/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let num1 = 89;
let num2 = 3;
let num3 = 57;

if(num1 > num2 && num1 > num3){
  console.log(`${num1} is the bigger`)
}else if(num2 > num1 && num2 > num3){
  console.log(`${num2} is the bigger`)
}
else{
  console.log(`${num3} is the bigger`)
}