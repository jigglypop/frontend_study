import styled from "styled-components";

const RedButton = styled.button`
  @font-face {
    font-family: "NanumBarunGothic";
    src: url("/NanumBarunGothic.ttf");
  }
  font-family: "NanumBarunGothic";
  background: linear-gradient(45deg, #ff416c 30%, #ff4b2b 90%);
  border: 0;
  border-radius: 10px;
  box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
  color: white;
  margin: 10px;
  padding: 10px;
  height: 40;
  cursor: pointer;

  h1,
  h2,
  h3,
  h4 {
    margin: 5px;
  }
  p {
    font-size: 10px;
    margin: 5px;
  }
`;

export default RedButton;
