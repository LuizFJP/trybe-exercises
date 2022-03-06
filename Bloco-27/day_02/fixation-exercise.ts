class Superclass {
  isSuper: boolean;
  constructor () {
    this.isSuper = true;
  }
  public sayHello():void {
    console.log('Hello world!');
    
  }

}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const example = (ex: Superclass) => {
  ex.sayHello();
  ex.isSuper ? console.log('Super!') : console.log('Sub!');

}

const superObject = new Superclass();

example(superObject);
const sub = new Subclass();

example(sub);

interface MyInterface {
  myNumber: number,
  myFunc(myParam: number):string,
};

class MyClass implements MyInterface {
  constructor(public myNumber: number) {

  }

  myFunc(myParam: number): string {
    return `${this.myNumber + myParam}`;
  }

  get number(): number {
    return this.myNumber
  }
}

const objClass = new MyClass(6);
console.log(objClass.myFunc(10));
console.log(objClass.number);

