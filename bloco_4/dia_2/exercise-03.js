//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for (let sum of numbers) {
  aux = sum + aux;
}
console.log(aux/numbers.length);