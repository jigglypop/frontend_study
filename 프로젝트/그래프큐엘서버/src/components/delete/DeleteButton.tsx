
import React from 'react';
import Modal from "../common/Modal";
import BlueButton from "../common/BlueButton";


interface DeleteButtonProps {
  postId: string | undefined;
  onDelete: ()=>void;
  onCancel: ()=>void;
  onModal:()=>void;
  visible:boolean;
}

const DeleteButton= ({ visible, postId, onDelete, onCancel, onModal }:DeleteButtonProps) => {

  return (
    <div>
      <Modal
        visible={visible}
        title={"포스트 삭제"}
        description={"포스트를 삭제하시겠습니까?"}
        onCancel={onCancel}
        onConfirm={onDelete}
      />

      {postId &&
          <BlueButton onClick={onModal}>
            <h3>삭제</h3>
          </BlueButton>
      }
    </div>
  );
}
export default DeleteButton


