import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import Update from 'src/components/update/Update'
import UpdateButton from 'src/components/update/UpdateButton'
import { POST } from 'src/gql/post';
import { UPDATEPOST } from 'src/gql/update';
import { RootState } from 'src/modules';
import { postSuccess } from 'src/modules/post/actions';
import { changeFieldUpdate, updateFailure, updateSuccess } from 'src/modules/update/actions';


export interface TempPostItemProps {
    id?: string,
    body?: string,
    title?: string,
    summary?:string,
    createdAt?: string,
    username?: string,
    comments?: object,
    likes?: object,
}

const UpdateContainer = ({ match, history } : any) =>{
    const { postId } = match.params
    const dispatch = useDispatch();
    const { title, body, post } = useSelector(({ update, post }: RootState) =>({ 
        title: update.title,
        body: update.body,
        post: post.post
    }))
    const [bodySum, setBodySum] = useState("")

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
    useEffect(()=>{
        if (post){
            const temppost : TempPostItemProps = post
            if (temppost){
                const title = temppost.title
                const body = temppost.body
                dispatch(changeFieldUpdate({key:"title", value: title}))
                dispatch(changeFieldUpdate({key:"body", value : body}))
            }
        }
    },[dispatch, post])
    // 업데이트 부분
    const [addUpdate, { loading: mutationLoadingUpdate, error: mutationErrorUpdate, data: dataUpdate }] = useMutation(UPDATEPOST, {
        variables: {
            postId : postId,
            title : title,
            body : body,
            summary : bodySum,
        }
    });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(changeFieldUpdate({key:name, value}))
    }
    useEffect(() => {
        if (body){
            const body_split = body.substr(0,100) + '...'
            setBodySum(body_split)
        }
    }, [body, setBodySum])
    useEffect(()=>{
        if (dataUpdate) {
            dispatch(updateSuccess(dataUpdate.updatePost))
            history.push(`/post/${dataUpdate.updatePost.id}`)
        } else if (mutationErrorUpdate && !dataUpdate){
            dispatch(updateFailure(mutationErrorUpdate.message))
        }
    },[dispatch, dataUpdate, mutationErrorUpdate])

    return (
        <div>
            <Update 
                onChange={onChange}
                title={title? title:''}
                body={body? body:''}
            />
            <UpdateButton
                addUpdate={addUpdate}
            />
            <ErrorHandle 
                mutationLoading={mutationLoadingUpdate} 
                mutationError={mutationErrorUpdate}
            />
        </div>
    )
}
export default withRouter(UpdateContainer)