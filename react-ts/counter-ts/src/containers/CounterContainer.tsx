import React from "react";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";


const CounterContainer = () => {
  const number = useSelector((state: RootState) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
