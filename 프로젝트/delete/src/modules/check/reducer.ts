import { createReducer } from 'typesafe-actions';
import {  CheckAction, CheckState } from './types';
import { CHECK_FAILURE, CHECK_SUCCESS, TEMP_SET_USER, INITIALIZE_CHECK } from './actions'


const initialState : CheckState = {
    username: '',
    user : null,
    checkError : ''
}

const check = createReducer<CheckState, CheckAction>(
    initialState, 
    {
        [TEMP_SET_USER] : (state, {payload : user}) =>({
            ...state,
            username: user
        }),
        [CHECK_SUCCESS] : (state, {payload : user}) =>({
            ...state,
            user: user,
            checkError: ''
        }),
        [CHECK_FAILURE] : (state, {payload: error}) => ({
            ...state,
            user: null,
            checkError : error
        }),
        [INITIALIZE_CHECK] : ()=> initialState
    }
);
export default check;