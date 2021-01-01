import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from 'src/components/common/Header'
import { url_tag } from 'src/lib/server_url'
import { RootState } from 'src/modules'
import { initializeAuth } from 'src/modules/auth/actions'
import { initializeCheck } from 'src/modules/check/actions'

export default function HeaderContainer() {
    const { username } = useSelector(({ check }: RootState) =>({ 
        username: check.username
    })) 
    const dispatch = useDispatch()
    const onLogout = () =>{
        dispatch(initializeAuth())
        dispatch(initializeCheck())
        localStorage.clear()
    }
    return (
        <div>
            <Header 
                username={username}
                onLogout={onLogout}
            />
        </div>
    )
}
