const options = { threshold: 1.0 };
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      console.log("화면에서 노출됨");
    } else {
      console.log("화면에서 제외됨");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(document.getElementById("id"));
