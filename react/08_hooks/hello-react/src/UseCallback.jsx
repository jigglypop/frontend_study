import React, { useState, useMemo, useCallback } from "react";

const getAverage = numbers => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <h1>8.5.useCallback(함수)</h1>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <h3>평균값 : {avg}</h3>
      </div>
      <hr></hr>
    </div>
  );
};

export default UseCallback;
