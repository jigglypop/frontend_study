import { createReducer } from 'typesafe-actions';
import { UpdateAction, UpdateState } from './types';
import { CHANGE_FIELD_UPDATE, INITIALIZE_UPDATE, UPDATE_FAILURE, UPDATE_SUCCESS } from './actions'


const initialState : UpdateState = {
    title:'',
    body:'',
    summary:'',
    post : null,
    postError : null,
}

const write = createReducer<UpdateState, UpdateAction>(
    initialState, 
    {
        [INITIALIZE_UPDATE] : () =>initialState,
        [UPDATE_SUCCESS] : (state, {payload : post}) =>({
            ...state,
            post : post
        }),
        [UPDATE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            post : null,
            postError : error
        }),
        [CHANGE_FIELD_UPDATE] : (state, {payload: {key, value}})=>({
            ...state,
            [key] : value
        })
    }
);
export default write;