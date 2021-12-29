const number1 = Math.floor(Math.random() * 100 + 1);
const number2 = Math.floor(Math.random() * 100 + 1);
const number3 = Math.floor(Math.random() * 100 + 1);

// synchronous sintaxe
function numberFunction(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error("Informe apenas números");
  } else {
    const sum = (a + b) * c;
    if(sum < 50) throw new Error("Valor muito baixo");

    return sum;
  }
}

try {
  const result = numberFunction(number1, number2, number3);
  console.log(`result: ${ result }`);
} catch(e) {
  console.log(e.message);
}

function numberAsyncAwait(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error("Informe apenas números");
  } else {
    const sum = (a + b) * c;
    if(sum < 50) throw new Error("Valor muito baixo");

    return sum;
  }

}

// async await sintaxe
async function numberFunction2() {
  try {
    const result = await numberAsyncAwait(number1, number2, number3);
    console.log(`async/await result: ${ result }`);
  } catch(e) {
    console.log(e.message);
  }
}

numberFunction2();

// asynchronous sintaxe
function asynchronousNumber(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error("Informe apenas números"));
    } else {
      const sum = (a + b) * c;
      if(sum < 50) throw new Error("Valor muito baixo");
  
      resolve(sum);
    }
  
  })
  return promise;
}

asynchronousNumber(number1, number2, number3)
  .then(result => console.log(`Sucesso: ${ result }`))
  .catch(err => console.log(`erro: ${err.message}`));
