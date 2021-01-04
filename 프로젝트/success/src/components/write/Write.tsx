import React, { ChangeEvent } from 'react'

export interface WriteComponentProps {
    title?:string,
    body?:string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
}

export default function Write({onChange, title, body} : WriteComponentProps) {
    return (
        <div>
            <div>
                <input 
                    type="text" 
                    placeholder="제목을 작성하세요" 
                    name="title"
                    value={title}
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="내용을 작성하세요" 
                    name="body" 
                    onChange={onChange}
                    value={body}
                />
            </div>
        </div>
    )
}
