import { createReducer } from 'typesafe-actions';
import { CommentWriteAction, CommentWriteState } from './types';
import { CHANGE_FIELD_COMMENTWRITE, INITIALIZE_COMMENTWRITE, COMMENTWRITE_FAILURE, COMMENTWRITE_SUCCESS } from './actions'


const initialState : CommentWriteState = {
    body:'',
    commentwrite : null,
    commentError : null,
}

const commentwrite = createReducer<CommentWriteState, CommentWriteAction>(
    initialState, 
    {
        [INITIALIZE_COMMENTWRITE] : () =>initialState,
        [COMMENTWRITE_SUCCESS] : (state, {payload : commentwrite}) =>({
            ...state,
            commentwrite,
            commentError:''
        }),
        [COMMENTWRITE_FAILURE] : (state, {payload: error}) => ({
            ...state,
            commentwrite : null,
            commentError : error
        }),
        [CHANGE_FIELD_COMMENTWRITE] : (state, {payload: {key, value}})=>({
            ...state,
            [key] : value
        })
    }
);
export default commentwrite;