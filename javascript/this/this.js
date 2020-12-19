function identify() {
  return this.name.toUpperCase();
}
function speak() {
  let greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}
let me = {
  name: "Kyle",
};
console.log(identify.call(me));
speak.call(me);
