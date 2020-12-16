let result = (function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5);
console.log(result);
