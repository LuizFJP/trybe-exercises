function number(answer) {

  return new Promise((resolve, reject) => {
      if(answer % 3 == 0 && answer % 3 == 0) {
        resolve('FizzBuzz');
      } else if(answer % 3 == 0) {
        resolve('Fizz');
      } else if(answer % 5 == 0) {
        resolve('Buzz');
      } else{
        reject(`${ answer } it\'s not a number divided by three and/or five`)
      }
      rl.close();

    
  })
}

number(2).catch(console.error);
number(3).then(console.log);
number(5).then(console.log);
number(15).then(console.log);