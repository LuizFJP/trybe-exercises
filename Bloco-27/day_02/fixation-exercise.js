"use strict";
class Superclass {
    constructor(isSuper) {
        this.isSuper = isSuper;
        this.isSuper = true;
    }
    sayHello() {
        console.log('Hello world!');
    }
    logSuper() {
        console.log(this.isSuper);
    }
}
class Subclass extends Superclass {
}
const example = (ex) => {
    ex.sayHello();
    ex.logSuper();
};
const superObject = new Superclass(false);
example(superObject);
const sub = new Subclass(false);
example(sub);
