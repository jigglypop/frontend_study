import React, { useState } from "react";

const UseState2 = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const Name = e => {
    setName(e.target.value);
  };
  const Nickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <h1>8.1.1. useState를 여러번 사용하기</h1>
      <input onChange={Name} value={name} />
      <input onChange={Nickname} value={nickname} />
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickname}</h3>
      <hr></hr>
    </div>
  );
};

export default UseState2;
