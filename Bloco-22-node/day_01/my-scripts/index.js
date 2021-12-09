const readline = require('readline-sync');

console.log('1. imc\n2. velocity\n3. sorteio\n4. fatorial\n5. fibonacci');
const script = readline.questionInt('Choose the number of the program tha0t you want to \n');

if (script === 1) {
  require('./imc');

} else if (script === 2) {
  require('./velocity');

} else if (script === 3) {
  require('./guessGame');

} else if (script === 4) {
  require('./fatorial');

} else {
  require('./fibonacci');
}
