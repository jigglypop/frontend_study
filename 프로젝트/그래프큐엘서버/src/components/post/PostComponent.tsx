import React from 'react'

export interface PostComponentProps {
    post?:any,
}

export default function PostComponent({ post }: PostComponentProps) {
    if (!post) return null
    return (
        <div>
            <div>{post.title}</div>
            <hr/>
            <div>{post.body}</div>
            <div>{post.username}</div>
            <div>{post.createdAt}</div>
        </div>
    )
}
