var myObject = {
  a: 2,
};
console.log(myObject.a);

var anotherObject = {
  a: 4,
};
var myObject = Object.create(anotherObject);
console.log(myObject.a);
