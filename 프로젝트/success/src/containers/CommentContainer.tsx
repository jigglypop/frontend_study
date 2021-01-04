import { DocumentNode, useLazyQuery, useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentComponent from 'src/components/comment/CommentComponent';
import { COMMENTREAD, COMMENTWRITE } from 'src/gql/comment';
import { RootState } from 'src/modules';
import { readcommentFailure, readcommentSuccess } from 'src/modules/readcomment/actions';


export interface PostProps {
    id?: string,
    body?: string,
    title?: string,
    createdAt?: string,
    username?: string,
    comments?: object,
    likes?: object,
}


// export interface getLazyQueryTypes {
//     GQL : DocumentNode, 
//     variables : object, 
//     requestSuccess : any,
//     requestFailure : any
// }

// export const getLazyQuery = ({GQL, variables, requestSuccess, requestFailure}: getLazyQueryTypes)  =>{
//     const dispatch = useDispatch();
//     const [addResult, { loading: mutationLoadingResult, error: mutationErrorResult, data : dataResult }] = useLazyQuery(GQL,
//         { variables: variables }
//     );
//     useEffect(()=>{
//         addResult()
//     },[])
//     useEffect(() => {
//         if (dataResult){
//             dispatch(requestSuccess(dataResult.readComment.comments))
//         } else if (mutationErrorResult && !dataResult){
//             dispatch(requestFailure(dataResult.message))
//         }
//     }, [dispatch, dataResult, mutationErrorResult])

// }


const CommentContainer = ({ history, match }:any) => {
    const dispatch = useDispatch();
    const { readcomment, username } = useSelector(({ readcomment, check }: RootState) =>({ 
        readcomment : readcomment.readcomment,
        username : check.username,
    }))

    const postId =  match.params.postId
    const [addComment, { loading: mutationLoadingComment, error: mutationErrorComment, data : dataComment }] = useLazyQuery(COMMENTREAD,
        { variables: { postId: postId } }
    );
    useEffect(() => {
        if (postId){
            addComment()
        }
    }, [postId])
    
    useEffect(() => {
        if (dataComment){
            dispatch(readcommentSuccess(dataComment.readComment.comments))
            setCommentState(dataComment.readComment.comments)
        } else if (mutationErrorComment && !dataComment){
            dispatch(readcommentFailure(dataComment.message))
        }
    }, [dispatch, dataComment, mutationErrorComment])


    const [body, setBody] = useState<string>('');
    const [commentState, setCommentState] = useState<object[]>([])


    const [addWrite, { loading: mutationLoadingWrite, error: mutationErrorWrite, data : dataWrite }] =  useMutation(COMMENTWRITE,
        { variables: { postId: postId, body: body } }
    );

        

    

    // 쓰기
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setBody(value)
    }

    const onSubmit = () =>{
        addWrite()
        addComment()
        window.location.reload()
    }

    return (
        <>
            <div>
                <input onChange={onChange} value={body}/>
                <button onClick={onSubmit}>제출</button>
                <CommentComponent 
                    comment={commentState}
                    postId={postId}
                />
            </div>
        </>

    )
}
export default withRouter(CommentContainer)