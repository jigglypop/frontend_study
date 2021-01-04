import React from 'react'
import CommentContainer from 'src/containers/CommentContainer'
import PostContainer from 'src/containers/PostContainer'

export default function PostPage() {
    return (
        <div>
            {typeof window !== 'undefined' && <PostContainer/>}
            <hr/>
            {typeof window !== 'undefined' && <CommentContainer/>}
        </div>
    )
}
