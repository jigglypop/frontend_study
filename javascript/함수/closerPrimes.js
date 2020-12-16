function Primes(n) {
  var p = [];
  for (var i = 2; i <= n; i++) {
    p[i] = true;
  }
  var x = 2;
  for (var x = 2; x <= Math.floor(Math.sqrt(n)); x++) {
    for (var i = 2 * x; i <= n; i += x) {
      p[i] = false;
      while (!p[++x]);
    }
  }
  var primes = [];
  var nprimes = 0;
  for (var i = 0; i <= n; i++) {
    if (p[i]) {
      primes[nprimes++] = i;
    }
  }
  p = null;
  return function (m) {
    for (var i = 0, product = 1; i < m; i++) {
      product *= primes[Math.floor(Math.random() * nprimes)];
    }
    return product;
  };
}

var primeProduct = Primes(100000);
console.log(primeProduct(2));
console.log(primeProduct(2));
