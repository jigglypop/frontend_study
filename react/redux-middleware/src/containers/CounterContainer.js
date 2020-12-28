import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";

export default function CounterContainer() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);

  return (
    <div>
      <Counter
        number={number}
        onIncrease={() => dispatch(increaseAsync())}
        onDecrease={() => dispatch(decreaseAsync())}
      />
    </div>
  );
}
