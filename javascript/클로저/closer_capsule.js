function Outer() {
  var x = 10;
  this.getX = function () {
    return x;
  };
  this.setX = function (newNum) {
    x = newNum;
  };
}

var foo = new Outer();
console.log(foo.getX());
console.log(foo.x);

foo.setX(20);
console.log(foo.getX());
