import {createAction} from 'typesafe-actions';

export const READCOMMENT_SUCCESS = 'readcomment/READCOMMENT_SUCCESS'
export const READCOMMENT_FAILURE = 'readcomment/READCOMMENT_FAILURE'
export const INITIALIZE_READCOMMENT = 'readcomment/INITIALIZE_READCOMMENT'

export const readcommentSuccess = createAction(READCOMMENT_SUCCESS, (readcomment : object) => (readcomment) )()
export const readcommentFailure = createAction(READCOMMENT_FAILURE, (error : string)  => (error))()
export const initializeReadComment = createAction(INITIALIZE_READCOMMENT)()

export const readcommentActions = { readcommentSuccess, readcommentFailure, initializeReadComment };

