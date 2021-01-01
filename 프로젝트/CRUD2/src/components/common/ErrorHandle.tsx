import { ApolloError } from '@apollo/react-hooks'
import React from 'react'

export interface ErrorHandleProps {
    mutationLoading : boolean,
    mutationError : ApolloError | undefined
}

export default function ErrorHandle({mutationLoading, mutationError} : ErrorHandleProps) {
    return (
        <div>
            <div>{mutationLoading ? "처리중..." : ""}</div>
            <div>{mutationError?.message}</div>      
        </div>
    )
}
