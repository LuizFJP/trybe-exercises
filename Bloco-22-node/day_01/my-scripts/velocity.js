const readline = require('readline-sync');

const velocityFunction = () => {
  const distance = readline.questionFloat('Say the distance in kilometers!');
  const time = readline.questionInt('Say the time spent in hours!');
  
  const avgVelocity = distance/time;
  console.log(`The average velocity is ${avgVelocity}km/h`);

  return;
}

velocityFunction();
