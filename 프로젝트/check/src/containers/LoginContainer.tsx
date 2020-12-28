import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthTemplate from 'src/components/auth/AuthTemplate';
import LoginForm from 'src/components/auth/LoginForm';
import ErrorHandle from 'src/components/common/ErrorHandle';
import { LOGIN } from 'src/gql/auth';
import { usePreloader } from 'src/lib/PreloadContext';
import { RootState } from 'src/modules';
import { authFailure, authSuccess, changeField, initializeForm } from 'src/modules/auth/actions';

export default function LoginContainer() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: RootState) =>({ 
        form: auth.login
    }))
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

    usePreloader(()=>dispatch(initializeForm('login')))
    useEffect(()=>{
        dispatch(initializeForm('login'))
    },[dispatch])
    const [addLogin, { loading: mutationLoading, error: mutationError, data }] = useMutation(LOGIN, {
        variables: form
    });
    useEffect(()=>{
        if (mutationError){
            console.log(mutationError.message)
            dispatch(authFailure(mutationError.message))
        }
        if (data){
            dispatch(authSuccess(data))
        }
    },[mutationError, data])
    return (
        <AuthTemplate>
            <LoginForm 
                type="login"
                form={form}
                onChange={onChange}
                addLogin={addLogin}
            />
            <ErrorHandle 
                mutationLoading={mutationLoading}
                mutationError={mutationError}
            />      
        </AuthTemplate>
    )
}
