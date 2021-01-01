import React from 'react';
import styled from "styled-components";

const BlueButton = styled.button`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic";
  background: linear-gradient(45deg, #232526 30%, #414345 90%);
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 0 10px;
  margin: 10px;
  padding: 10px;
  height: 40;
  font-weight: 800;
  h1,
  h2,
  h3,
  h4 {
    margin: 5px;
    cursor: pointer;
  }
`;

export default BlueButton;
