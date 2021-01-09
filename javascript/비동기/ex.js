const promise = (param) => {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("성공");
    } else {
      reject("실패");
    }
  });
};

const result = promise(false).then(
  function (result) {
    console.log(result);
    return promise();
  },
  function (err) {
    return err;
  }
);
console.log(result);
