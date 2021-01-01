import {createAction} from 'typesafe-actions';

export const LIST_SUCCESS = 'list/LIST_SUCCESS'
export const LIST_FAILURE = 'list/LIST_FAILURE'
export const INITIALIZE_LIST = 'list/INITIALIZE_LIST'

export const listSuccess = createAction(LIST_SUCCESS, (list : object) => (list) )()
export const listFailure = createAction(LIST_FAILURE, (error : string)  => (error))()
export const initializeList = createAction(INITIALIZE_LIST)()

export const listActions = { listSuccess, listFailure, initializeList };

