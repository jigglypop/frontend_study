import React from "react";
import Counter from "../components/Counter";
import { increateAsync, decreateAsync } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increateAsync())}
      onDecrease={() => dispatch(decreateAsync())}
    />
  );
};

export default CounterContainer;
