import { ActionType } from "typesafe-actions";
import { authActions } from "./actions";

export interface changeFieldProps {
    form: 'register' | 'login',
    key: string,
    value: string
}

export type formProps = 'register' | 'login'

export type AuthAction = ActionType<typeof authActions>;

export interface AuthState {
    register:{
        username : string,
        password : string,
        email: string,
        confirmPassword : string
    },
    login:{
        username : string,
        password : string,
        email?: string,
        confirmPassword? : string
    }
    auth : any,
    authError : any
}

export interface authProps {
    username : string,
    password : string,
    email?: string,
    confirmPassword? : string
}

