//Utilizando for , descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let aux = 0;

for (let number of numbers) {
  if(aux < number){
    aux = number;
  }
}

console.log(`Maior valor é: ${aux}`);