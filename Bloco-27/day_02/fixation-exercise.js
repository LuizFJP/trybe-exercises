"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello world!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super();
        this.isSuper = false;
    }
}
const example = (ex) => {
    ex.sayHello();
    ex.isSuper ? console.log('Super!') : console.log('Sub!');
};
const superObject = new Superclass();
example(superObject);
const sub = new Subclass();
example(sub);
;
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `${this.myNumber + myParam}`;
    }
    get number() {
        return this.myNumber;
    }
}
const objClass = new MyClass(6);
console.log(objClass.myFunc(10));
console.log(objClass.number);
