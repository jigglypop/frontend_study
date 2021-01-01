import React from 'react'

export interface UpdateButtonProps {
    addUpdate:()=>{}
}


export default function UpdateButton({addUpdate}:UpdateButtonProps) {
    return (
        <div>
            <button onClick={addUpdate}>포스트 등록</button>
        </div>
    )
}
