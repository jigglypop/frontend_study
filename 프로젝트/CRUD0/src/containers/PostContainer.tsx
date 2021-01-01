import { useLazyQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import PostComponent from 'src/components/post/PostComponent';
import { POST } from 'src/gql/post';
import { RootState } from 'src/modules';
import { postSuccess } from 'src/modules/post/actions';

const PostContainer = ({match}:any) => {
    const dispatch = useDispatch();
    const { post } = useSelector(({ post }: RootState) =>({ 
        post: post.post,
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
    return (
        <>
            <PostComponent
                post={post? post: undefined}
            />
            <ErrorHandle 
                mutationLoading={mutationLoadingPost}
                mutationError={mutationErrorPost}
            />
        </>
    )
}
export default withRouter(PostContainer)