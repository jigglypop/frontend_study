import React from "react";

const IterationSample = () => {
  const names = ["A", "B", "C", "D"];
  const nameList = names.map(name => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
