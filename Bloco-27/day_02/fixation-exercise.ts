class Superclass {
  public isSuper: boolean = true;

  protected sayHello() {
    console.log('Hello world!');
    
  }

}

class Subclass extends Superclass {
  sayHello2(): void {
    this.sayHello();
  }
}

const example = (ex: Subclass) => {
  ex.sayHello();
}

const superObject = new Superclass();

// example(superObject);
const sub = new Subclass();

example(sub);