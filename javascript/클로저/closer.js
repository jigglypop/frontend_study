const outer = () => {
  let x = 10;

  const inner = () => {
    x++;
    console.log(x);
  };
  return inner;
};

var x = -10;
let foo = outer();

foo(); // (a)
foo(); // (b)
console.log(x); // (c)
