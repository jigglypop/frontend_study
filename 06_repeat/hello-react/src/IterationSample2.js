import React from "react";

const IterationSample2 = () => {
  const names = ["A", "B", "C", "D"];
  const nameList = names.map((name, index) => (
    <li key={index}>
      {index}
      <span> </span>
      {name}
    </li>
  ));
  return <ul>{nameList}</ul>;
};

export default IterationSample2;
