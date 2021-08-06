// Faça uma lista com as suas frutas favoritas
const specialFruit = ['abacaxi', 'morango', 'laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'creme de leite', 'açúcar'];

const fruitSalad = (fruit, additional) => {
  const salad = [...specialFruit, ...additionalItens];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));