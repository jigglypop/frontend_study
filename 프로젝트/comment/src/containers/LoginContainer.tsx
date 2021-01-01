import { useMutation } from '@apollo/react-hooks';
import React, { ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthTemplate from 'src/components/auth/AuthTemplate';
import LoginForm from 'src/components/auth/LoginForm';
import ErrorHandle from 'src/components/common/ErrorHandle';
import { LOGIN } from 'src/gql/auth';
import { CHECK } from 'src/gql/check';
// import { usePreloader } from 'src/lib/PreloadContext';
import { RootState } from 'src/modules';
import { authFailure, authSuccess, changeField, initializeForm } from 'src/modules/auth/actions';
import { checkFailure, checkSuccess, tempSetUser } from 'src/modules/check/actions';
import changeHelmet from './changeHelmet';

export default function LoginContainer() {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth, check }: RootState) =>({ 
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: check.user,
    }))
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        dispatch(changeField({form:'login', key:name,value}))
    }

    // usePreloader(()=>dispatch(initializeForm('login')))
    // 로그인 처리구간
    useEffect(()=>{
        dispatch(initializeForm('login'))
    },[dispatch])
    const [addLogin, { loading: mutationLoadingLogin, error: mutationErrorLogin, data:dataLogin }] = useMutation(LOGIN, {
        variables: form
    });
    useEffect(()=>{
        if (mutationErrorLogin) dispatch(authFailure(mutationErrorLogin.message))
        if (dataLogin){
            dispatch(authSuccess(dataLogin))
            localStorage.setItem("username", dataLogin.login.username)
            localStorage.setItem("token", dataLogin.login.token)
        }
    }, [dispatch, mutationErrorLogin, dataLogin])
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
        if (dataCheck) {
            dispatch(checkSuccess(dataCheck.check))
            dispatch(tempSetUser(localStorage.getItem('username') + ''))
        } else if (mutationErrorCheck && !dataCheck){
            dispatch(checkFailure(mutationErrorCheck.message))
        }
    },[dispatch, dataCheck, mutationErrorCheck])

    useEffect(()=>{
        const titlehelmet="로그인"
        changeHelmet({titlehelmet})
    },[])
    
    return (
        <AuthTemplate>
            <LoginForm 
                type="login"
                form={form}
                onChange={onChange}
                addLogin={addLogin}
            />
            <ErrorHandle 
                mutationLoading={mutationLoadingLogin}
                mutationError={mutationErrorLogin}
            />      
        </AuthTemplate>
    )
}
