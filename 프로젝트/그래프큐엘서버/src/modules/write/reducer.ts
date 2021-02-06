import { createReducer } from 'typesafe-actions';
import { WriteAction, WriteState } from './types';
import { CHANGE_FIELD_WRITE, INITIALIZE_WRITE, WRITE_FAILURE, WRITE_SUCCESS } from './actions'


const initialState : WriteState = {
    title:'',
    body:'',
    summary:'',
    post : null,
    postError : null,
}

const write = createReducer<WriteState, WriteAction>(
    initialState, 
    {
        [INITIALIZE_WRITE] : () =>initialState,
        [WRITE_SUCCESS] : (state, {payload : post}) =>({
            ...state,
            post : post
        }),
        [WRITE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            post : null,
            postError : error
        }),
        [CHANGE_FIELD_WRITE] : (state, {payload: {key, value}})=>({
            ...state,
            [key] : value
        })
    }
);
export default write;