import React from "react";

const MyComponent = props => {
  return (
    <div>
      <h1>component1</h1>
      <h2>모듈 컴포넌트 {props.name}</h2>
      <h2>children 값은 {props.children}입니다.</h2>
      <br></br>
    </div>
  );
};
// MyComponent.defaultProps = {
//   name: "슬기"
// };
export default MyComponent;
