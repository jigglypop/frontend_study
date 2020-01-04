import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1>현재 카운터 값은 {value}입니다.</h1>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
