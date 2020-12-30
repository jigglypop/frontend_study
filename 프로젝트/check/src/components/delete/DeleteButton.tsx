import { gql, useMutation } from "@apollo/react-hooks";
import { useState } from "react";
import { DELETE } from "src/gql/delete";
import Modal from "../common/popup";
import BlueButton from "../common/BlueButton";


interface DeleteButtonProps {
  history: any;
  postId: string | undefined;
}

const DeleteButton= ({history, postId }:DeleteButtonProps) => {
  // const [deletePost] = useMutation(DELETE, {
  //   update(proxy, result) {
  //     if (proxy) {
  //     }
  //     if (result) {
  //       console.log(result);
  //     }
  //   },
  //   onError(err) {
  //     console.log(err);
  //   },
  //   variables: {
  //     postId: postId,
  //   },
  // });
  // const [visible, setVisible] = useState(false);

  // const onDelete = () => {
  //   setVisible(true);
  // };

  // const onCancel = () => {
  //   setVisible(false);
  // };
  // const onConfirm = async () => {
  //   await deletePost();
  //   await setVisible(false);
  //   await history.push(`/posts`);
  // };
  // return (
  //   <div>
  //     <Modal
  //       visible={visible}
  //       title={"포스트 삭제"}
  //       description={"포스트를 삭제하시겠습니까?"}
  //       onCancel={onCancel}
  //       onConfirm={onConfirm}
  //     />

  //     {postId &&
  //         <BlueButton onClick={onDelete}>
  //           <h3>삭제</h3>
  //         </BlueButton>
  //     }
  //   </div>
  // );
}
export default DeleteButton

// const DeleteButton = ({ postIdset, usernameset, history }: CommentProps) => {
//   postId = postIdset;
//   username = usernameset;
//   return (
//     <div>
//       <DeleteButtonItem history={history}/>
//     </div>
//   );
// };

// export default DeleteButton;
