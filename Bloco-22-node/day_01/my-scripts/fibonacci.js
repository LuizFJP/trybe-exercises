const readline = require('readline-sync');

const fibonacciFunction = () => {
  const number = readline.questionInt('Say a number!\n');
  let acc = 0;
  let next = 1;
  let sum = 0;
  for (let index = 0; index < number; index++) {
    sum = acc + next;
    acc = next;
    console.log(next);
    next = sum;
  }
}

fibonacciFunction();
