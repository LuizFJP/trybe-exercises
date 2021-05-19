/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/


let alfa = 30; 
let beta = 30;
let theta = 0;

if(alfa+beta+theta == 180){
  console.log("true")
}else if(alfa+beta+theta != 180){
  console.log("false")
}else{
  console.log("ERROR!")
}
