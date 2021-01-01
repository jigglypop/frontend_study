import React from 'react'
import { Link } from 'react-router-dom'
import BlueButton from '../common/BlueButton'

export interface GoUpdateProps {
    postId:string;
}


export default function GoUpdateButton({ postId }: GoUpdateProps) {
    return (
        <BlueButton>
            <Link to={`/update/${postId}`}>업데이트</Link>
        </BlueButton>
    )
}
