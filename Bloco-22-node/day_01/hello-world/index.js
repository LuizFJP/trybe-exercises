const readline = require('readline-sync');

const name = readline.question('What is your name?');
const age = readline.questionInt('What is your age?');

console.log(`Hello, ${name}! You are ${age} years old!`);