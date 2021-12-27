// synchronous sintaxe
function number(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error("Informe apenas números");
  } else {
    const sum = (a + b) * c;
    if(sum < 50) throw new Error("Valor muito baixo");

    return sum;
  }
}

try {
  const result = number(1, 1, 1);
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
async function number2() {
  try {
    const result = await numberAsyncAwait(6, 7, 9);
    console.log(`async/await result: ${ result }`);
  } catch(e) {
    console.log(e.message);
  }
}

number2();

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

asynchronousNumber(2, 'a', 3)
  .then(result => console.log(`Sucesso: ${ result }`))
  .catch(err => console.log(`erro: ${err.message}`))