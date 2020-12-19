import React, { useReducer } from "react";

const InfoReducer = () => {
  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };
  const [{ name, nickname }, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <hr />
      <h1>useReducer Info</h1>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름 : </b> {name}
      </div>
      <div>
        <b>닉네임 : </b> {nickname}
      </div>
    </div>
  );
};

export default InfoReducer;
