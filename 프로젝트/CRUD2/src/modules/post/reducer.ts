import { createReducer } from 'typesafe-actions';
import {  PostAction, PostState } from './types';
import { POST_FAILURE, POST_SUCCESS, INITIALIZE_POST } from './actions'


const initialState : PostState = {
    post : null,
    postError:''
}

const post = createReducer<PostState, PostAction>(
    initialState, 
    {
        [POST_SUCCESS] : (state, {payload : post}) =>({
            ...state,
            post,
            postError: ''
        }),
        [POST_FAILURE] : (state, {payload: error}) => ({
            ...state,
            post: null,
            postError : error
        }),
        [INITIALIZE_POST] : ()=> initialState
    }
);
export default post;