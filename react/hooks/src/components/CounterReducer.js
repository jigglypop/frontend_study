import React, { useReducer } from "react";

const CounterReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREACE":
        return { value: state.value + 1 };
      case "DECREACE":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };
  const [{ value }, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <hr />
      <h1>useReducer Counter</h1>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREACE" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREACE" })}>-1</button>
    </div>
  );
};

export default CounterReducer;
