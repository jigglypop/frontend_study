function norm(x) {
  let sum2 = sumSquare();
  return Math.sqrt(sum2);
  function sumSquare() {
    sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i] * x[i];
    }
    return sum;
  }
}
let a = [2, 2];
let n = norm(a);
console.log(n);
