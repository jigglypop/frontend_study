import React from "react";
import PropTypes from "prop-types";

const MyComponent2 = ({ name, children }) => {
  return (
    <div>
      <h1>component3</h1>
      <h2>모듈 컴포넌트 {name}</h2>
      <h2>children 값은 {children}입니다.</h2>
      <br></br>
    </div>
  );
};

MyComponent2.propTypes = {
  name: PropTypes.string.isRequired
};

export default MyComponent2;
