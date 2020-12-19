setTimeout(function () {
  console.log("A");
  setTimeout(function () {
    console.log("B");
    setTimeout(function () {
      console.log("C");
    }, 1000);
  }, 1000);
}, 1000);
