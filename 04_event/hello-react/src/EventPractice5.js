import React, { useState } from "react";

const EventPractice5 = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;
  const onChange = e => {
    console.log(e.target);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  return (
    <div>
      <h1>4.3. 함수형 컴포넌트 객체형</h1>
      <input text="text" name="username" value={username} onChange={onChange} />
      <input text="text" name="message" value={message} onChange={onChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice5;
