import React, { useState } from "react";

const UseState = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>8.1. useState</h1>
      <h3>현재 카운터 값은 {value}입니다.</h3>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <hr></hr>
    </div>
  );
};

export default UseState;
