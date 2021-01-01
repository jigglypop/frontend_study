import React from 'react'
import { url_tag } from 'src/lib/server_url'

export interface ListComponentProps {
    list?:any,
}

export interface ListItemProps {
    id?: string,
    body?: string,
    summary?: string,
    title?: string,
    createdAt?: string,
    username?: string,
    comments?: object,
    likes?: object,
}

export default function ListComponent({list}:ListComponentProps) {
    if (!list) return null
    return (
        <div>
            {list.map((item: any, index: number) => (
                <div key={index}>
                    <ListItem
                        id={item.id}
                        title={item.title}
                        summary={item.summary}
                        username={item.username}
                        likes={item.likes}
                        comments={item.comments}
                        createdAt={item.createdAt}
                    />
                </div>
            ))}
        </div>
    )
}

const ListItem = ({id, title, summary, username, likes, comments, createdAt}:ListItemProps) =>{
    return(
        <div>
            <hr/>
            <a href={`${url_tag}/post/${id}`}>
                <div>{title}</div>
            </a>
            <div>{summary}</div>
            <div>{username}</div>
            <div>{createdAt}</div>
        </div>

    )
}