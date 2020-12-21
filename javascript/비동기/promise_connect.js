const test = (bool, bool2) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (bool) {
        resolve(`fulfilled 상태입니다. then으로 연결됩니다.(${bool2})`);
      } else {
        reject("rejected 상태입니다. catch로 연결됩니다.");
      }
    }, 1000);
  });
};

test(true, 1)
  .then(function (result) {
    console.log("1) " + result);
    return test(true, 2);
  })
  .then(function (result) {
    console.log("2) " + result);
    return test(false, 3);
  })
  .then(function (result) {
    console.log("3) " + result);
    return test(true, 4);
  })
  .catch(function (result) {
    console.log("4) " + result);
    return test(true, 5);
  })
  .then(function (result) {
    console.log("5) " + result);
    return test(true, 6);
  });
