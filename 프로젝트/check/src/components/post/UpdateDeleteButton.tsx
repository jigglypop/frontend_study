import React from 'react'
import { Link } from 'react-router-dom'
import { url_tag } from 'src/lib/server_url'
import DeleteButton from '../delete/DeleteButton'

export interface UpdateDeleteButtonProps {
    postId:string;
    history:any;
}


export default function UpdateDeleteButton({postId, history}:UpdateDeleteButtonProps) {
    return (
        <div>
            <Link to={`/update/${postId}`}>업데이트</Link>
            {/* <DeleteButton history={history} postId={postId}/> */}
        </div>
    )
}
