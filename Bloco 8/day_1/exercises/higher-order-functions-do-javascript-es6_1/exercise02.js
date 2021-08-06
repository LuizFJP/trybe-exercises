const luckyNumber = (number) => {
  let luckNumber = Math.round(Math.random() * 2);
  if(luckNumber === number){
    return `Você é o novo milionário!`;
  }
  return `Mais uma vez sendo pobre :(`;
}

const randomNumber = (lottery) =>  {
  let result = lottery(Math.round(Math.random() * 2));
  return result;
}

console.log(randomNumber(luckyNumber));