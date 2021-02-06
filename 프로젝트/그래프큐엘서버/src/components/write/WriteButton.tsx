import React from 'react'

export interface WriteButtonProps {
    addWrite:()=>{}
}


export default function WriteButton({addWrite}:WriteButtonProps) {
    return (
        <div>
            <button onClick={addWrite}>포스트 등록</button>
        </div>
    )
}
