const promise = (param) => {
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve("성공");
    } else {
      reject("실패");
    }
  });
};
promise(true).then(
  function (result) {
    console.log(result);
  },
  function (err) {
    console.log(err);
  }
);
