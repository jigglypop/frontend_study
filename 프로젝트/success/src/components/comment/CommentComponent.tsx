import { useMutation } from '@apollo/react-hooks'
import React, { useEffect } from 'react'
import { COMMENTDELETE } from 'src/gql/comment'

export interface CommentComponentProps {
    comment?:any,
    postId?:string
}

export interface CommentItemProps {
    id?: string,
    body?: string,
    createdAt?: string,
    username?: string,
    postId?:string
}



export default function CommentComponent({ comment, postId }: CommentComponentProps) {
    if (!comment) return null
    return (
        <div>
            {comment.map((item: any, index: number) => (
                <div key={index}>
                    <CommentItem
                        id={item.id}
                        body={item.body}
                        username={item.username}
                        createdAt={item.createdAt}
                        postId={postId}
                    />
                </div>
            ))}
        </div>
    )
}

const CommentItem = ({ id, body, username, createdAt, postId }: CommentItemProps) =>{
    const [addDelete, { loading: mutationLoadingDelete, error: mutationErrorDelete, data : dataDelete }] = useMutation(COMMENTDELETE,
        { variables: { postId: postId, commentId:id } }
    )
    useEffect(() => {
        if (dataDelete){
            window.location.reload()
        }
    }, [dataDelete])
    return(
        <div>
            <div>{username} | {createdAt} {localStorage.getItem('username') === username && <button onClick={() => addDelete()}>x</button>}</div>
            <div>{body}</div>
        </div>
    )
}