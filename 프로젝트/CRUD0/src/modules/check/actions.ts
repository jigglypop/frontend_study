import {createAction} from 'typesafe-actions';

export const TEMP_SET_USER= 'check/TEMP_SET_USER'
export const CHECK_SUCCESS = 'check/CHECK_SUCCESS'
export const CHECK_FAILURE = 'check/CHECK_FAILURE'
export const INITIALIZE_CHECK = 'check/INITIALIZE_CHECK'


export const tempSetUser = createAction(TEMP_SET_USER, (username : string) =>(username))()
export const checkSuccess = createAction(CHECK_SUCCESS, (user : object) => (user) )()
export const checkFailure = createAction(CHECK_FAILURE, (error : string)  => (error))()
export const initializeCheck = createAction(INITIALIZE_CHECK)()

export const checkActions = { tempSetUser, checkSuccess, checkFailure, initializeCheck };

