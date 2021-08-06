//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smaller = 2**1024;

for (let number of numbers) {
  if(Number(smaller) > number){
    smaller = number;
  }
}

console.log(`Maior valor é: ${smaller}`);