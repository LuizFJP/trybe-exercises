const readline = require('readline-sync');

let number = readline.questionInt('Say a number!');
const fatFunction = () => {
  let result = number;
  while (number > 0 && number !== 1) {
    result *= (number - 1);
    number -= 1;
}
return result;
}

fatFunction();
