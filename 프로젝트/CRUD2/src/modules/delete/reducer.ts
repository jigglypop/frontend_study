import { createReducer } from 'typesafe-actions';
import { DeleteAction, DeleteState } from './types';
import { DELETE_FAILURE, DELETE_SUCCESS } from './actions'


const initialState : DeleteState = {
    delete: '' ,
    deleteError : '',
}

const deletes = createReducer<DeleteState, DeleteAction>(
    initialState, 
    {
        [DELETE_SUCCESS] : (state, {payload : results}) =>({
            ...state,
            delete : results
        }),
        [DELETE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            delete : null,
            deleteError : error
        }),
    }
);
export default deletes;