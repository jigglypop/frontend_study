import React from 'react'
import AuthForm, { AuthFormProps } from './AuthForm';


export default function LoginForm({type, form, onChange, addLogin} : AuthFormProps) {
    return (
        <AuthForm
            type={type}
            form={form}
            onChange={onChange}
            addLogin={addLogin}
        />
    )
}
