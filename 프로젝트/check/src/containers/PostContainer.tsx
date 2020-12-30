import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import PostComponent from 'src/components/post/PostComponent';
import UpdateDeleteButton from 'src/components/post/UpdateDeleteButton';
import { DELETE } from 'src/gql/delete';
import { POST } from 'src/gql/post';
import { RootState } from 'src/modules';
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


const PostContainer = ({match, history }:any) => {
    const dispatch = useDispatch();
    const { post, loginUser } = useSelector(({ post, check }: RootState) =>({ 
        post: post.post,
        loginUser : check.username,
    }))
    const postId =  match.params.postId
    const [addPost, { loading: mutationLoadingPost, error: mutationErrorPost, data:dataPost }] = useLazyQuery(POST,
        { variables: { postId: postId } }
    );
    const [isOwner, setIsOwner] = useState<boolean>(false)
    useEffect(() => {
        if (postId){
            addPost()
        }
    }, [postId])
    useEffect(()=>{
        if (dataPost){
            dispatch(postSuccess(dataPost.readPost))
        }
    },[dispatch, dataPost, loginUser])

    // 삭제
    const [addDelete, { loading: mutationLoadingDelete, error: mutationErrorDelete, data: dataDelete }] = useMutation(DELETE, {
        variables: {
            postId : postId,
        }
    });

    // 유저 확인
    useEffect(()=>{
        if (post){
            const temppost : PostItemProps = post
            if (temppost.username === loginUser){
                setIsOwner(true)
            }
        }
    },[post, loginUser])


    return (
        <>
            <PostComponent
                post={post? post: undefined}
            />
            {/* {isOwner && 
                <UpdateDeleteButton 
                    postId={postId} 
                    history={history}
                />
            } */}
            <ErrorHandle 
                mutationLoading={mutationLoadingPost}
                mutationError={mutationErrorPost}
            />
        </>
    )
}
export default withRouter(PostContainer)