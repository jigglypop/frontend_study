import React from "react";
import styled from "styled-components";
import BlueButton from "./BlueButton";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AskModalBlock = styled.div`
  width: 320px;
  background: black;
  color: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
interface Props {
  visible?: boolean;
  title?: string;
  description?: string;
  onConfirm?: any;
  onCancel?: any;
}

const Modal = ({ visible, title, description, onConfirm, onCancel }: Props) => {
  if (!visible) return null;

  return (
    <Fullscreen>
      <AskModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <BlueButton onClick={onCancel}>
            <h4>취소</h4>
          </BlueButton>
          <BlueButton onClick={onConfirm}>
            <h4>확인</h4>
          </BlueButton>
        </div>
      </AskModalBlock>
    </Fullscreen>
  );
};

export default Modal;
