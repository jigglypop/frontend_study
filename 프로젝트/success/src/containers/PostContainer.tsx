import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import GoDeleteButton from 'src/components/post/GoDeleteButton';
import GoUpdateButton from 'src/components/post/GoUpdateButton';
import PostComponent from 'src/components/post/PostComponent';
import { POST } from 'src/gql/post';
import { RootState } from 'src/modules';
import { postSuccess } from 'src/modules/post/actions';


export interface PostProps {
    id?: string,
    body?: string,
    title?: string,
    createdAt?: string,
    username?: string,
    comments?: object,
    likes?: object,
}


const PostContainer = ({ history, match }:any) => {
    const dispatch = useDispatch();
    const { post, username } = useSelector(({ post, check }: RootState) =>({ 
        post : post.post,
        username : check.username
    }))
    const postId =  match.params.postId
    const [addPost, { loading: mutationLoadingPost, error: mutationErrorPost, data:dataPost }] = useLazyQuery(POST,
        { variables: { postId: postId } }
    );

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
    // 수정
    const [isUser, setIsUser] = useState<boolean>(false)
    useEffect(()=>{
        if(post){
            const _post :PostProps= post
            if (_post.username === username){
                setIsUser(true)
            }
        }
    },[post, username])


    return (
        <>
            <PostComponent
                post={post? post: undefined}
            />
            {isUser && postId && 
                <div>
                    <GoUpdateButton 
                        postId={postId}
                    />
                    <GoDeleteButton 
                        postId={postId}
                    />
                </div>
            }
            <ErrorHandle 
                mutationLoading={mutationLoadingPost}
                mutationError={mutationErrorPost}
            />
        </>
    )
}
export default withRouter(PostContainer)