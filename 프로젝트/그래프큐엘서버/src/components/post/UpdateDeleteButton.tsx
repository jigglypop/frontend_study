import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../delete/DeleteButton'

export interface UpdateDeleteButtonProps {
    postId:string;
    onDelete:()=>void;
    onCancel: ()=>void;
    onModal:()=>void;
    visible:boolean;

}


export default function UpdateDeleteButton({ visible, postId, onDelete, onCancel, onModal }: UpdateDeleteButtonProps) {
    return (
        <div>
            <Link to={`/update/${postId}`}>업데이트</Link>
            <DeleteButton 
                postId={postId} 
                onDelete={onDelete}
                onCancel={onCancel}
                onModal={onModal}
                visible={visible}
            />
        </div>
    )
}
