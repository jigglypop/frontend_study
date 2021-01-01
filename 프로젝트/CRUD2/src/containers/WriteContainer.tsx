import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorHandle from 'src/components/common/ErrorHandle';
import Write from 'src/components/write/Write'
import WriteButton from 'src/components/write/WriteButton'
import { WRITEPOST } from 'src/gql/write';
import { RootState } from 'src/modules';
import { changeFieldWrite, writeFailure, writeSuccess } from 'src/modules/write/actions';
import changeHelmet from './changeHelmet';

const WriteContainer =({ history } : any)=> {
    const dispatch = useDispatch();
    const { title, body, post } = useSelector(({ write }: RootState) =>({ 
        title: write.title,
        body: write.body,
        post: write.post,
    }))
    const [bodySum, setBodySum] = useState("")

    const [addWrite, { loading: mutationLoadingWrite, error: mutationErrorWrite, data: dataWrite }] = useMutation(WRITEPOST, {
        variables: {
            title : title,
            body : body,
            summary : bodySum,
        }
    });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(changeFieldWrite({key:name, value}))
    }
    useEffect(() => {
        if (body){
            const body_split = body.substr(0,100) + '...'
            setBodySum(body_split)
        }
    }, [body, setBodySum])
    useEffect(()=>{
        if (dataWrite) {
            dispatch(writeSuccess(dataWrite.writePost))
            history.push(`/post/${dataWrite.writePost.id}`)
        } else if (mutationErrorWrite && !dataWrite){
            dispatch(writeFailure(mutationErrorWrite.message))
        }
    },[dispatch, dataWrite, mutationErrorWrite])

    useEffect(()=>{
        const titlehelmet="글쓰기"
        changeHelmet({titlehelmet})
    },[])

    return (
        <div>
            <Write 
                onChange={onChange}
                title={title? title:''}
                body={body? body:''}
            />
            <WriteButton
                addWrite={addWrite}
            />
            <ErrorHandle 
                mutationLoading={mutationLoadingWrite} 
                mutationError={mutationErrorWrite}
            />
        </div>
    )
}
export default withRouter(WriteContainer)