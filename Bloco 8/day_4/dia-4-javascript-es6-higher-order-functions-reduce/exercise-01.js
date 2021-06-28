const assert = require('assert');

// Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  arrays.forEach((array => array).reduce(a => a));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

console.log(arrays);