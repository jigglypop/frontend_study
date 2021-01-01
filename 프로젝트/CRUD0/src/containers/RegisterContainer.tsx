import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthTemplate from 'src/components/auth/AuthTemplate';
import RegisterForm from 'src/components/auth/RegisterForm';
import ErrorHandle from 'src/components/common/ErrorHandle';
import { REGISTER } from 'src/gql/auth';
import { CHECK } from 'src/gql/check';
// import { usePreloader } from 'src/lib/PreloadContext';
import { RootState } from 'src/modules';
import { authFailure, authSuccess, changeField, initializeForm } from 'src/modules/auth/actions';
import { checkFailure, checkSuccess, tempSetUser } from 'src/modules/check/actions';
import changeHelmet from './changeHelmet';

export default function RegisterContainer() {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth, check }: RootState) =>({ 
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
    }))
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(changeField({form:'register',key:name,value}))
    }
    // usePreloader(()=>dispatch(initializeForm('register')))
    useEffect(()=>{
        dispatch(initializeForm('register'))
    },[dispatch])
    const [addRegister, { loading: mutationLoadingRegister, error: mutationErrorRegister, data:dataRegister }] = useMutation(REGISTER, {
        variables: form
    });
    useEffect(()=>{
        if (mutationErrorRegister) dispatch(authFailure(mutationErrorRegister.message))
        if (dataRegister){
            dispatch(authSuccess(dataRegister))
            localStorage.setItem("username", dataRegister.register.username)
            localStorage.setItem("token", dataRegister.register.token)
        }
    }, [dispatch, mutationErrorRegister, dataRegister])
    // 체크 처리구간
    const [addCheck, { loading: mutationLoadingCheck, error: mutationErrorCheck, data:dataCheck }] = useMutation(CHECK,{
        variables : {
            username: ""
        }
    });
    useEffect(()=>{
        if (auth) {
            addCheck()
        }
    }, [auth])
    useEffect(()=>{
        if (dataCheck && localStorage.getItem("token")) {
            dispatch(checkSuccess(dataCheck.check))
            dispatch(tempSetUser(localStorage.getItem('username') + ''))
        } else if (mutationErrorCheck && !dataCheck){
            dispatch(checkFailure(mutationErrorCheck.message))
        }
    },[dispatch, dataCheck, mutationErrorCheck])


    useEffect(()=>{
        const titlehelmet="회원가입"
        changeHelmet({titlehelmet})
    },[])
    
    return (
        <AuthTemplate>
            <RegisterForm
                type={"register"}
                form={form}
                onChange={onChange}
                addRegister={addRegister}
            />  
            <ErrorHandle 
                mutationLoading={mutationLoadingRegister}
                mutationError={mutationErrorRegister}
            />
        </AuthTemplate>
    )
}
