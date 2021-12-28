const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';

function caracters() {
  fs.readFile(simpsonsFile, 'utf8')
    .then((result) => {
      console.log("\nExercício 4.1\n");
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
    console.log('\nExercício 4.2\n');
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
    console.log('\nExercício 4.3\n');
    const caracters = JSON.parse(result).filter((caracter) => {
      if(caracter.id !== '6' && caracter.id !== '10') return true
    } 
    );
    caracters.forEach((caracter) => console.log(`${ Object.values(caracter)[0] } - ${ Object.values(caracter)[1] }`));
  })
  .catch((err) => {
    console.log(`Não foi possível remover personagens ${ err.message }`);
  })
}

removeCaracter();

function createFile() {
  let newFamily;
  fs.readFile(simpsonsFile, 'utf8')
  .then((result) => {
    console.log('\nExercício 4.4\n');
    newFamily = JSON.parse(result)
      .map((caracter, index) => {
        if(index < 4) return `${ Object.values(caracter)[0] } - ${ Object.values(caracter)[1] }`
    })
      .filter((notUndefined) => notUndefined !== undefined).toString().replaceAll(',', '\n');
    fs.writeFile('simpsonFamily.json', newFamily)
    .then(() => {
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
      console.log(`Erro ao escrever o arquivo: ${ err.message }`);
    })
  })
  .catch((err) => {
    console.log('\nExercício 4.4\n');
    console.log(`Não foi possível fazer leitura do arquivo: ${ err.message }`);
  })
}

createFile();

function addCaracter() {
  let newFamily;
  fs.readFile(simpsonsFile, 'utf8')
  .then((result) => {
    console.log('\nExercício 4.5\n');
    newFamily = JSON.parse(result)
      .map((caracter, index) => {
        if(index < 4 || index === 7) return `${ Object.values(caracter)[0] } - ${ Object.values(caracter)[1] }`
    })
      .filter((notUndefined) => notUndefined !== undefined).toString().replaceAll(',', '\n');
    fs.writeFile('simpsonFamily.json', newFamily, { flag: 'w' })
    .then(() => {
      console.log('Arquivo sobrescrito com sucesso!');
    })
    .catch((err) => {
      console.log(`Erro ao sobrescrever o arquivo: ${ err.message }`);
    })
  })
  .catch((err) => {
    console.log('\nExercício 4.5\n');
    console.log(`Não foi possível fazer leitura do arquivo: ${ err.message }`);
  })
}

addCaracter();
