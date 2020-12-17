import React from "react";
import MyComponent from "./MyComponent";
import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";
import Counter from "./Counter";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Say from "./Say";

const App = () => {
  return (
    <>
      <MyComponent name="아이린">슬기</MyComponent>
      <MyComponent1 name="아이린">슬기</MyComponent1>
      <MyComponent2 name="조이">슬기</MyComponent2>
      <Counter />
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Say />
    </>
  );
};

export default App;
