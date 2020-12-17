import React, { useState } from "react";

const Apply = () => {
  const [names, setNames] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
    { id: 4, text: "D" },
    { id: 5, text: "E" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(names.length + 1);

  // 데이터 추가
  const onChange = event => setInputText(event.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    console.log(nextId);
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default Apply;
