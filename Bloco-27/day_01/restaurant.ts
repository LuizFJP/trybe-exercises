class Client {
  private _name: string;

  constructor () {
    this._name = '';
  }
  
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }


}

class OrderItem {
  private _name: string[];
  private _value: number[];

  constructor() {
    this._name = [];
    this._value = [];
  }

  set name(name: string[]) {
    this._name = name
  }

  get name() {
    return this._name;
  }

  set value(value: number[]) {
    this._value = value;
  }

  get value() {
    return this._value;
  }
}

class Order {
  private _client: Client;
  private _itens: OrderItem;
  private _values: OrderItem;
  private _payment: string;
  private _percentualDiscount?: number;
  constructor(percentualDiscount: number = 0) {
    this._payment = '';
    this._percentualDiscount = percentualDiscount;
    this._client = new Client();
    this._itens = new OrderItem();
    this._values = new OrderItem();
  }

  set payment(payment: string) {
    this._payment = payment;
  }

  get payment() {
    return this._payment;
  }

  set client(client: Client) {
    this._client = client;
  }

  get client() {
    return this._client;
  }

  set orderItem(itens: OrderItem) {
    this._itens = itens;
  }

  get orderItem () {
    return this._itens;
  }

  set values(values: OrderItem) {
    this._values = values;
  }

  get values() {
    return this._values;
  }

  calculateTotal() {
    return this._values.value.reduce((acc, crr) => acc + crr);
  }

  calculateDiscount() {
    if (!this._percentualDiscount) this._percentualDiscount = 0;
    return this.calculateTotal() - this.calculateTotal() * this._percentualDiscount;
  }
}

const objClient = new Client();
objClient.name = 'Luiz';
const objOrders = new OrderItem();
objOrders.name = ['Batata frita', 'Açaí'];
objOrders.value = [3, 10];
const objOrderPrice = new Order();
objOrderPrice.payment = 'Dinheiro';
objOrderPrice.client = objClient;
objOrderPrice.orderItem = objOrders;
objOrderPrice.values = objOrders;

console.log('Nome do cliente: ', objOrderPrice.client);
console.log('Método de pagamento: ', objOrderPrice.payment);
console.log('Itens comprados: ', objOrderPrice.orderItem);
console.log('Valores: ', objOrderPrice.values);
console.log('Valor total: ', objOrderPrice.calculateTotal);
console.log('Valor com desconto: ', objOrderPrice.calculateDiscount);
