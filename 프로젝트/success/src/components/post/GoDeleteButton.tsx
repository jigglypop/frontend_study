import React from 'react'
import { Link } from 'react-router-dom'
import BlueButton from '../common/BlueButton'

export interface GoDeleteProps {
    postId:string;
}

export default function GoDeleteButton({ postId }: GoDeleteProps) {
    return (
        <BlueButton>
            <Link to={`/delete/${postId}`}>삭제</Link>
        </BlueButton>
    )
}
