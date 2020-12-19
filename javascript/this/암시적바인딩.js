function foo() {
  console.log(this.a);
}
var obj2 = {
  a: 2,
  foo: foo,
};

var obj1 = {
  a: 1,
  obj2: obj2,
};

obj1.obj2.foo();
