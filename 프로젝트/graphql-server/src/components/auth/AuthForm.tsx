import React, {ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
import { rootState } from 'src/modules'

const textMap = {
    login:'로그인',
    register:'회원가입'
}

interface typeProps {
    type: "login" | "register",
    form: rootState['auth']['login'] | rootState['auth']['register'], 
    onChange : (e: ChangeEvent<HTMLInputElement>) => void, 
    onSubmit: (e: ChangeEvent<HTMLFormElement>) => void
}

export default function AuthForm({ type, form, onChange, onSubmit } : typeProps ) {
    const text = textMap[type]
    return (
        <div>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <input 
                    autoComplete="username" 
                    name="username" 
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                />
                <input 
                    autoComplete="new-password" 
                    name="password" 
                    placeholder="비밀번호" 
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <input 
                        autoComplete="new-password" 
                        name="password" 
                        placeholder="비밀번호" 
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}
                <button>{text}</button>
            </form>
            <footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ):(
                    <Link to="/login">로그인</Link>
                )}
            </footer>
        </div>
    )
}
