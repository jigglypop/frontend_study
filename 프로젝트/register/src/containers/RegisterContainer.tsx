import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthTemplate from 'src/components/auth/AuthTemplate';
import RegisterForm from 'src/components/auth/RegisterForm';
import ErrorHandle from 'src/components/common/ErrorHandle';
import { REGISTER } from 'src/gql/auth';
import { usePreloader } from 'src/lib/PreloadContext';
import { RootState } from 'src/modules';
import { authFailure, authSuccess, changeField, initializeForm } from 'src/modules/auth/actions';

export default function RegisterContainer() {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }: RootState) =>({ 
        form: auth.register
    }))
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


    usePreloader(()=>dispatch(initializeForm('register')))
    useEffect(()=>{
        dispatch(initializeForm('register'))
    },[dispatch])
    const [addRegister, { loading: mutationLoading, error: mutationError, data }] = useMutation(REGISTER, {
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
            <RegisterForm
                type={"register"}
                form={form}
                onChange={onChange}
                addRegister={addRegister}
            />  
            <ErrorHandle 
                mutationLoading={mutationLoading}
                mutationError={mutationError}
            />
        </AuthTemplate>
    )
}
