import {createAction} from 'typesafe-actions';

export const SERVER_HELMET= 'server/SERVER_HELMET'
export const SERVER_SUCCESS = 'server/SERVER_SUCCESS'
export const SERVER_FAILURE = 'server/SERVER_FAILURE'
export const INITIALIZE_SERVER = 'server/INITIALIZE_SERVER'


export const serverHelmet = createAction(SERVER_HELMET, (server_url : object) =>(server_url))()
export const serverSuccess = createAction(SERVER_SUCCESS, (server : object) => (server) )()
export const serverFailure = createAction(SERVER_FAILURE, (error : string)  => (error))()
export const initializeServer = createAction(INITIALIZE_SERVER)()

export const serverActions = { serverHelmet, serverSuccess, serverFailure, initializeServer };

