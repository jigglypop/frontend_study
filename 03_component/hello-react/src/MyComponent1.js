import React from "react";

const MyComponent1 = props => {
  const { name, children } = props;
  return (
    <div>
      <h1>component2</h1>
      <h2>모듈 컴포넌트 {name}</h2>
      <h2>children 값은 {children}입니다.</h2>
      <br></br>
    </div>
  );
};
// MyComponent.defaultProps = {
//   name: "슬기"
// };
export default MyComponent1;
