// function foo() {
//   console.log(this.a);
// }
// var obj1 = {
//   a: 2,
//   foo: foo,
// };
// var obj2 = {
//   a: 3,
//   foo: foo,
// };
// obj1.foo();
// obj2.foo();

// obj1.foo.call(obj2);
// obj2.foo.call(obj1);

let words = "123@naver.com";
console.log(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    words
  )
);
