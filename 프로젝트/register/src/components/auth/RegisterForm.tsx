import React from 'react'
import AuthForm, { AuthFormProps } from './AuthForm';


export default function RegisterForm({type, form, onChange, addRegister} : AuthFormProps) {

    return (
        <AuthForm
            type={type}
            form={form}
            onChange={onChange}
            addRegister={addRegister}
        />
    )
}
