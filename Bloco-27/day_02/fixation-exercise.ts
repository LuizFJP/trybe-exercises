class Superclass {
  public isSuper: boolean = true;

  public sayHello():void {
    console.log('Hello world!');
    
  }

}

class Subclass extends Superclass {

}

const example = (ex: Superclass) => {
  ex.sayHello();
}

const superObject = new Superclass();

example(superObject);
const sub = new Subclass();

example(sub);