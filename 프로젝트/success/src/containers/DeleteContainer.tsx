import { useMutation } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'src/components/common/Modal';
import { DELETE } from 'src/gql/delete';
import { RootState } from 'src/modules';
import { deleteFailure, deleteSuccess } from 'src/modules/delete/actions';
import { PostProps } from './PostContainer';


const DeleteContainer = ({ history, match }:any) => {
    const dispatch = useDispatch();
    const { post, username } = useSelector(({ post, check }: RootState) =>({ 
        post : post.post,
        username : check.username
    }))
    const postId =  match.params.postId


    // 삭제
    const [addDelete, { loading: mutationLoadingDelete, error: mutationErrorDelete, data: dataDelete }] = useMutation(DELETE, {
        variables: {
            postId : postId,
        }
    });

    // 유저 확인
    const [isUser, setIsUser] = useState<boolean>(false)
    useEffect(()=>{
        if (post){
            const _post : PostProps = post
            if (_post.username === username){
                setIsUser(true)
            }
        }
    },[post, username])

    // 삭제
    const [visible, setVisible] = useState(true);

    const onDelete = () =>{
        addDelete();
        setVisible(false);
    }

    const onCancel = () => {
        setVisible(false);
        history.goBack();
    };
    useEffect(()=>{
        if (dataDelete){
            history.push('/');
            dispatch(deleteSuccess(dataDelete.deletePost))
        } else if (mutationErrorDelete && !dataDelete){
            dispatch(deleteFailure(dataDelete.error.message))
        }
    },[dispatch, dataDelete, mutationErrorDelete])


    return (
        <>
            <div>삭제</div>
            {isUser && postId && 
                <div>
                    <Modal
                      visible={visible}
                      title={"포스트 삭제"}
                      description={"포스트를 삭제하시겠습니까?"}
                      onCancel={onCancel}
                      onConfirm={onDelete}
                    />
                </div>
            }
        </>
    )
}
export default withRouter(DeleteContainer)