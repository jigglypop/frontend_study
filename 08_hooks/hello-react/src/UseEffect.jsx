import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("name");
    };
  }, [name]);

  const Name = e => {
    setName(e.target.value);
  };
  const Nickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <h1>8.2. useEffect</h1>
      <input onChange={Name} />
      <input onChange={Nickname} />
      <h3>이름: {name}</h3>
      <h3>닉네임: {nickname}</h3>
      <hr></hr>
    </div>
  );
};

export default UseEffect;
