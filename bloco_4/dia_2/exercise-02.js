//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for (let sum of numbers) {
  aux = sum + aux;    
  
}
console.log(aux);

