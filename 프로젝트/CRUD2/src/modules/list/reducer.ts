import { createReducer } from 'typesafe-actions';
import {  ListAction, ListState } from './types';
import { LIST_FAILURE, LIST_SUCCESS, INITIALIZE_LIST } from './actions'


const initialState : ListState = {
    list : null,
    listError:''
}

const list = createReducer<ListState, ListAction>(
    initialState, 
    {
        [LIST_SUCCESS] : (state, {payload : list}) =>({
            ...state,
            list,
            listError: ''
        }),
        [LIST_FAILURE] : (state, {payload: error}) => ({
            ...state,
            list: null,
            listError : error
        }),
        [INITIALIZE_LIST] : ()=> initialState
    }
);
export default list;