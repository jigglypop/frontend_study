import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = event => {
    setName(event.target.value);
  };
  const onChangeNickname = event => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <input onChange={onChangeName} />
      <input onChange={onChangeNickname} />
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </div>
  );
};

export default Info;
