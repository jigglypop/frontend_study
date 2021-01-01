import React from "react";
import styled from "styled-components";

const SmallWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  position: relative;
`;

const SmallImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  vertical-align: middle;
  border: 5px solid white;
`;

const SmallText = styled.div`
  text-align: center;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    color: white;
    font-size: 50px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 30px;
      font-weight: 800;
    }
  }
`;
const SmallSummary = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
    font-size: 20px;
    font-weight: 800;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 15px;
      font-weight: 800;
    }
  }
`;
interface Props {
  ImageUrl?: string;
  content?: string;
  summary?: string;
}

const SmallHeader = ({ ImageUrl, content, summary }: Props) => {
  return (
    <div>
      <SmallWrapper>
        <SmallImage>
          <img src={ImageUrl} alt="imageurl" />
        </SmallImage>
        <SmallText>
          <p>{content}</p>
        </SmallText>
        <SmallSummary>
          <p>{summary}</p>
        </SmallSummary>
      </SmallWrapper>
      <hr />
    </div>
  );
};

export default SmallHeader;
