async function test() {
  await foo(1, 2000);
  await foo(2, 500);
  await foo(3, 1000);
}

const foo = (num, sec) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(num);
      resolve();
    }, sec);
  });
};
test();
