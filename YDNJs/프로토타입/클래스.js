function Foo() {}

var a = new Foo();
// console.log(Foo.prototype);
console.log(Object.getPrototypeOf(a) === Foo.prototype);
