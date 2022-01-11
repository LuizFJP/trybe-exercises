// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const a = require('./exercise01');

it('the function must return 10', () => {
  a.randomNumber = jest.fn().mockReturnValue(10);
  expect(a.randomNumber()).toBe(10);
  expect(a.randomNumber).toHaveBeenCalled();

  expect(a.randomNumber).toHaveBeenCalledTimes(1);

})