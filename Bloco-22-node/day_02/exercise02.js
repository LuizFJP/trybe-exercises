const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';

function caracters() {
  fs.readFile(simpsonsFile, 'utf8')
    .then((result) => {
      console.log("Exercício 1\n");
      JSON.parse(result).forEach((caracter) => {
        console.log(`${Object.values(caracter)[0]} - ${Object.values(caracter)[1]}`);
      });
    })
    .catch((error) => {
      console.error(`Erro ao ler arquivo: ${ error }`);
    });
}

caracters();

function findById(id) {
  fs.readFile(simpsonsFile, 'utf8')
  .then((result) => {
    console.log('\nExercício 2\n');
    if(JSON.parse(result).length < id) throw new Error("Id não existente");
    console.log(JSON.parse(result).find((caracter) => caracter.id == id));
  })
  .catch((error) => {
    console.log(`Erro ao ler arquivo: ${ error }`);
  });
}

findById(2);

function removeCaracter() {
  fs.readFile(simpsonsFile, 'utf8')
  .then((result) => {
    console.log('\nExercício 3\n');
    const caracters = JSON.parse(result).filter((caracter) => {
      if(caracter.id !== '6' && caracter.id !== '10') return true
    } 
    );
    caracters.forEach((caracter) => console.log(`${ Object.values(caracter)[0] } - ${ Object.values(caracter)[1] }`));
  })
}

removeCaracter();
