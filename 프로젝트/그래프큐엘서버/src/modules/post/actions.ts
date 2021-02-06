import {createAction} from 'typesafe-actions';

export const POST_SUCCESS = 'post/POST_SUCCESS'
export const POST_FAILURE = 'post/POST_FAILURE'
export const INITIALIZE_POST = 'post/INITIALIZE_POST'

export const postSuccess = createAction(POST_SUCCESS, (post : object) => (post) )()
export const postFailure = createAction(POST_FAILURE, (error : string)  => (error))()
export const initializePost = createAction(INITIALIZE_POST)()

export const postActions = { postSuccess, postFailure, initializePost };

