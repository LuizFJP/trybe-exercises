const fs = require('fs').promises;
const readline = require('readline');



function question() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  
  return new Promise((resolve) => {
     rl.question('What file do you want to read?\n 1. file1.txt\n 2. file2.txt\n 3. file3.txt\n 4. file4.txt\n 5. file5.txt\n 6. fileAll.txt\n 7. meu-arquivo.txt\n', (answer) => {
    rl.close();
    resolve(answer);
});
  });
}

async function start() {
  const fileName = await question();
  console.log(`O arquivo que você quer abrir é o ${ fileName }`);

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();
