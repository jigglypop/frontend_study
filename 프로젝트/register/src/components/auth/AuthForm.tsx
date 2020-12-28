import React, {ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
import { RootState } from 'src/modules'

const textMap = {
    login:'로그인',
    register:'회원가입'
}

export type AuthFormProps = {
    type: "login" | "register",
    form: RootState['auth']['login'] | RootState['auth']['register'], 
    onChange : (e: ChangeEvent<HTMLInputElement>) => void, 
    addLogin? : ()=>{},
    addRegister? : ()=>{}
}

export default function AuthForm({ type, form, onChange, addLogin, addRegister } : AuthFormProps ) {
    const text = textMap[type]
    return (
        <div>
            <h3>{text}</h3>
            <form>
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
                    <div>
                        <input 
                            autoComplete="email" 
                            name="email" 
                            placeholder="이메일" 
                            type="email"
                            onChange={onChange}
                            value={form.email}
                            />
                        <input 
                            autoComplete="confirmPassword" 
                            name="confirmPassword" 
                            placeholder="비밀번호 확인" 
                            type="password"
                            onChange={onChange}
                            value={form.confirmPassword}
                        />
                    </div>
                )}
            </form>
            <footer>
                {type === 'login' ? (
                    <div>
                        <Link to="/register">회원가입</Link>
                        <button onClick={addLogin}>{text}</button>
                    </div>
                ):(
                    <div>
                        <Link to="/login">로그인</Link>
                        <button onClick={addRegister}>{text}</button>
                    </div>
                )}
            </footer>
        </div>
    )
}
