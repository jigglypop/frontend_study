import React, { useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePreloader } from 'src/lib/PreloadContext';
import { rootState } from 'src/modules';
import { changeField, initializeForm } from 'src/modules/auth';
import AuthForm from './AuthForm';


export default function RegisterForm() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: rootState) =>({ form: auth.register}))
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(
            changeField({
                form:'register',
                key:name,
                value
            })
        )
    }

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }
    usePreloader(()=>dispatch(initializeForm('register')))
    useEffect(()=>{
        dispatch(initializeForm('register'))
    },[dispatch])
    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}
