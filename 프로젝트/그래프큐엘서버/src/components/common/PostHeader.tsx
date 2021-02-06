import React from "react";
import styled from "styled-components";

const PostWrapper = styled.div`
  width: 100%;
  margin: 10px auto;
  position: relative;
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  vertical-align: middle;
`;

const PostText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
    font-size: 40px;
    font-weight: 800;
    text-shadow: 8px 8px 8px black;
  }
  @media (max-width: 1000px) {
    p {
      font-size: 30px;
    }
  }
`;

interface Props {
  ImageUrl?: string;
  content?: string;
}

const PostHeader = ({ ImageUrl, content }: Props) => {
  return (
    <div>
      <PostWrapper>
        <PostImage>
          <img src={ImageUrl} alt="imageurl" />
        </PostImage>
        <PostText>
          <p>{content}</p>
        </PostText>
      </PostWrapper>
    </div>
  );
};

export default PostHeader;
