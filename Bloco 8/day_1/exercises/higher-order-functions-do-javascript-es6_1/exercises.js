const formatEmployees = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { name, email: `${email}@trybe.com` };
}

const newEmployees = (functionFormat) => {
  const employees = {
    id1: functionFormat('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: functionFormat('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: functionFormat('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(formatEmployees));
