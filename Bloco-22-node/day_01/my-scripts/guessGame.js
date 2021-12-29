const readline = require('readline-sync');

let playAgain = 'y';

const guessFunction = () => {
  while(playAgain === 'y') {
    const guessNumber = readline.questionInt('Guess a number');
    const number = Math.floor(Math.random() * 10);
    if(number == guessNumber) {
      console.log("Congratulations, correct number!");
    } else {
      console.log(`That's poor, you lost. The number was ${ number }`);
    }
    playAgain = readline.question('Do you wanna play again? y/n');
  }
  return;
}

guessFunction();
