/**Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Luiz Portela',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryName = order.order.delivery.deliveryPerson;
  const orderName = order.name;
  const orderPhone = order.phoneNumber;
  const orderStreet = order.address.street;
  const orderNumber = order.address.number;
  const orderApartment = order.address.apartment;
  console.log(`Olá ${deliveryName}, entrega para: ${orderName}, Telefone: ${orderPhone}, R. ${orderStreet}, Nº: ${orderNumber}, AP: ${orderApartment}`);

}

//customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order['pizza'] = "muzzarella";
  console.log(order);
}

//orderModifier(order);
//--------------------------------------
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
/**Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
Crie uma função para mostrar o tamanho de um objeto.
Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */

function addLesson2() {
  lesson2['turno'] = 'manhã'
  console.log(lesson2);
}
//addLesson2();

const objectKeys = () => console.log(Object.keys(lesson2));
//objectKeys();

const lengthObject = () => console.log(Object.keys(lesson2).length);
//lengthObject();

const objectValues = () => console.log(Object.values(lesson2));
//objectValues();

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

const numberStudents = () => console.log(parseInt(allLessons.lesson1.numeroEstudantes) + parseInt(allLessons.lesson2.numeroEstudantes) + parseInt(allLessons.lesson3.numeroEstudantes));
//numberStudents();

const valuePosition = (obj, key) => console.log(`Output: ${Object.values(obj)[key]}`);
//valuePosition(lesson1, 0);

const compareKeyValue = (obj,keyO, value) => {
 
  let valuesObj = Object.values(obj);
  let keyObj = Object.keys(obj);
  for(let key in valuesObj){
    if(keyObj[key] == keyO && valuesObj[key] == value){
      return true
    }
  }
};

console.log(compareKeyValue(lesson3, 'turno', 'noite'));





