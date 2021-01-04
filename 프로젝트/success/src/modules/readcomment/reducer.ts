import { createReducer } from 'typesafe-actions';
import {  ReadCommentAction, ReadCommentState } from './types';
import { READCOMMENT_FAILURE, READCOMMENT_SUCCESS, INITIALIZE_READCOMMENT } from './actions'


const initialState : ReadCommentState = {
    readcomment : null,
    readcommentError:''
}

const post = createReducer<ReadCommentState, ReadCommentAction>(
    initialState, 
    {
        [READCOMMENT_SUCCESS] : (state, {payload : readcomment }) =>({
            ...state,
            readcomment,
            readcommentError:''
        }),
        [READCOMMENT_FAILURE] : (state, {payload: error}) => ({
            ...state,
            readcomment : null,
            readcommentError: error
        }),
        [INITIALIZE_READCOMMENT] : ()=> initialState
    }
);
export default post;