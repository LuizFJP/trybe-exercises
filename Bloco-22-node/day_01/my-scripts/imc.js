const readline = require('readline-sync');

const imcFunction = () => {
  const height = readline.questionFloat('Say your height in meters!');
  const weigth = readline.questionFloat('Say your weigth!');
  
  const imc = weigth / (height ** 2);
  
  if(imc < 18.5) {
    console.log("Magreza");
  } else if(imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
  } else if(imc >= 25.0 && imc <= 29.9) {
    console.log("Sobrepeso");
  } else if(imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade grau I");
  } else if(imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade grau III");
  }
  return;
}

imcFunction();
