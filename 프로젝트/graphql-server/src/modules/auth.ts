import {createAction,ActionType,createReducer} from 'typesafe-actions';

const CHANGE_FIELD = 'auth/CHANGE_FIELD'
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'

interface changeFieldProps {
    form: 'register' | 'login',
    key: string,
    value: string
}

type formProps = 'register' | 'login'

export interface AuthState {
    register:{
        username : string,
        password : string,
        passwordConfirm : string
    },
    login:{
        username : string,
        password : string,
        passwordConfirm? : string

    }
}

export const changeField = createAction(CHANGE_FIELD, ({form, key, value} : changeFieldProps )=>({form, key, value}))()
export const initializeForm = createAction(INITIALIZE_FORM, (form) : formProps => form )()

const actions = { changeField, initializeForm };
type AuthAction = ActionType<typeof actions>;

const initialState : AuthState = {
    register:{
        username:'',
        password:'',
        passwordConfirm:''
    },
    login:{
        username:'',
        password:'',
    }
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
        })
    
    }
);
export default auth;