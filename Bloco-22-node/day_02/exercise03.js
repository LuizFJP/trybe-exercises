const fs = require('fs').promises;

const words = [
  'Finalmente',
  'estou',
  'usando',
  'Promise.all',
  '!!!'
];

function createFiles() {
  words.forEach((word, index) => {
    fs.writeFile(`file${index + 1}.txt`, word)
    .then(() => {
      console.log(`${ index + 1} arquivos criados com sucesso!`);
    })
    .catch((err) => {
      console.log(`Erro ao criar os 5 arquivos: ${ err.message }`);
    })
  })
  Promise.all([
    fs.readFile('file1.txt'),
    fs.readFile('file2.txt'),
    fs.readFile('file3.txt'),
    fs.readFile('file4.txt'),
    fs.readFile('file5.txt')
  ])
  .then(([f1, f2, f3, f4, f5]) => {
    fs.writeFile('fileAll.txt', `${ f1 } ${ f2 } ${ f3 } ${ f4 } ${ f5 }`)
    .then(() => {
      console.log('Arquivo fileAll criado');
  })
  .catch((err) => {
    console.log(`Não foi possível criar o arquivo fileAll: ${ err.message }`);
  })
  })

}

createFiles();

