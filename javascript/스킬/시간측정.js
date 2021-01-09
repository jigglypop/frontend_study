const testTime = (test) => {
  let start = new Date(); // 시작
  test();
  let end = new Date(); // 종료
  return `${end - start}ms / ${(end - start) * 0.0001}s `;
};

function concatTest() {
  const A = Array.from({ length: 1000000 }, (_, i) => i);
  const B = Array.from({ length: 1000000 }, (_, i) => i);
  A.concat(B);
}
function pushTest() {
  const A = Array.from({ length: 1000000 }, (_, i) => i);
  const B = Array.from({ length: 1000000 }, (_, i) => i);
  A.push(B);
}
// var A = Array.from({ length: 10000000 }, (_, i) => i % 2);

// function shiftTest() {
//   console.log(A.shift());
// }
var B = Array.from({ length: 10000000 }, (_, i) => i);
var C = new Set(B);

function filterTest() {
  console.log(B.filter((x) => x === 1).length);
}

function includes1Test() {
  console.log(B.includes(9999999));
}
function includes2Test() {
  console.log(B.includes(1));
}

function push2Test() {
  B.push(1);
}
function addTest() {
  C.add(1);
}

// console.log(testTime(concatTest));
// console.log(testTime(pushTest));
// console.log(testTime(shiftTest));
// console.log(testTime(filterTest));
// console.log(testTime(includes1Test));
// console.log(testTime(includes2Test));
console.log(testTime(push2Test));
console.log(testTime(addTest));
