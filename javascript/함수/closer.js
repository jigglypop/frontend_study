const makeCounter = () => {
  let count = 0;
  function f() {
    return count++;
  }
  return f;
};
let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
console.log(counter2());
