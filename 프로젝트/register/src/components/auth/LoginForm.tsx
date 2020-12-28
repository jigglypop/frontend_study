import React, { ChangeEvent,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePreloader } from 'src/lib/PreloadContext';
import { rootState } from 'src/modules';
import { changeField, initializeForm } from 'src/modules/auth';
import AuthForm from './AuthForm';



export default function LoginForm() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: rootState) =>({ form: auth.login}))
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        )
    }

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }

    usePreloader(()=>dispatch(initializeForm('login')))
    useEffect(()=>{
        dispatch(initializeForm('login'))
    },[dispatch])
    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}
