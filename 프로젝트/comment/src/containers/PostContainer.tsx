import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import PostComponent from 'src/components/post/PostComponent';
import UpdateDeleteButton from 'src/components/post/UpdateDeleteButton';
import { DELETE } from 'src/gql/delete';
import { POST } from 'src/gql/post';
import { RootState } from 'src/modules';
import { deleteFailure, deleteSuccess } from 'src/modules/delete/actions';
import { postSuccess } from 'src/modules/post/actions';


export interface PostItemProps {
    id?: string,
    body?: string,
    title?: string,
    createdAt?: string,
    username?: string,
    comments?: object,
    likes?: object,
}


const PostContainer = ({ match, history}:any) => {
    const dispatch = useDispatch();
    const { post, loginUser } = useSelector(({ post, check }: RootState) =>({ 
        post: post.post,
        loginUser : check.username,
    }))
    const postId =  match.params.postId
    const [addPost, { loading: mutationLoadingPost, error: mutationErrorPost, data:dataPost }] = useLazyQuery(POST,
        { variables: { postId: postId } }
    );

    // 삭제
    const [addDelete, { loading: mutationLoadingDelete, error: mutationErrorDelete, data: dataDelete }] = useMutation(DELETE, {
        variables: {
            postId : postId,
        }
    });
    useEffect(() => {
        if (postId){
            addPost()
        }
    }, [postId])
    useEffect(()=>{
        if (dataPost){
            dispatch(postSuccess(dataPost.readPost))
        }
    },[dispatch, dataPost])


    // 유저 확인
    const [isOwner, setIsOwner] = useState<boolean>(false)
    useEffect(()=>{
        if (post){
            const temppost : PostItemProps = post
            if (temppost.username === loginUser){
                setIsOwner(true)
            }
        }
    },[post, loginUser])

    // 삭제
    const [visible, setVisible] = useState(false);

    const onDelete = () =>{
        addDelete();
        setVisible(false);
    }
    const onModal = () => {
        setVisible(true);
      };
    
      const onCancel = () => {
        setVisible(false);
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
            <PostComponent
                post={post? post: undefined}
            />
            {isOwner && 
                <UpdateDeleteButton 
                    postId={postId} 
                    onDelete={onDelete}
                    onCancel={onCancel}
                    onModal={onModal}
                    visible={visible}
                />
            }
            <ErrorHandle 
                mutationLoading={mutationLoadingPost}
                mutationError={mutationErrorPost}
            />
        </>
    )
}
export default withRouter(PostContainer)