import { createReducer } from 'typesafe-actions';
import { AuthAction, AuthState } from './types';
import { CHANGE_FIELD, INITIALIZE_FORM, AUTH_SUCCESS, AUTH_FAILURE } from './actions'


const initialState : AuthState = {
    register:{
        username:'',
        password:'',
        email:'',
        confirmPassword:''
    },
    login:{
        username:'',
        password:'',
    },
    auth : null,
    authError : null
}


const auth = createReducer<AuthState, AuthAction>(
    initialState, 
    {
        [CHANGE_FIELD] : (state, {payload:{form, key, value}}) =>({
            ...state,
            [form]:{
                ...state[form],
                [key]:value
            },
        }),
        [INITIALIZE_FORM] : (state, {payload : form}) =>({
            ...state,
            [form]: initialState[form],
        }),
        [AUTH_SUCCESS] : (state, {payload: data}) => ({
            ...state,
            auth : data
        }),
        [AUTH_FAILURE] : (state, {payload: err}) => ({
            ...state,
            authError : err
        })
    }
);
export default auth;