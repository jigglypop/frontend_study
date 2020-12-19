// const say = () => {
//   // window 객체
//   console.log(this);
//   console.log("Hello, my name is " + this.name);
// };
// say();

// call

const obj1 = { name: "Call" };
const say1 = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};
// say1("call");
say1.call(obj1, "callcity");

// apply

const obj2 = { name: "Apply" };
const say2 = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};
// say2("apply");
say2.apply(obj2, ["applycity"]);

// bind

const obj3 = { name: "Bind" };
const say3 = function (city) {
  console.log(`Hello, my name is ${this.name}, I live in ${city}`);
};

const boundSay = say3.bind(obj3);
boundSay("bindcity");
