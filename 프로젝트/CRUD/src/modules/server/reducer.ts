import { createReducer } from 'typesafe-actions';
import {  ServerAction, ServerState  } from './types';
import { SERVER_FAILURE, SERVER_SUCCESS, SERVER_HELMET, INITIALIZE_SERVER } from './actions'


const initialState : ServerState = {
    server_url: null,
    server : null,
    error : ''
}

const server = createReducer<ServerState, ServerAction>(
    initialState, 
    {
        [SERVER_HELMET] : (state, {payload : server_url}) =>({
            ...state,
            server_url: server_url
        }),
        [SERVER_SUCCESS] : (state, {payload : server}) =>({
            ...state,
            server,
            error : ''
        }),
        [SERVER_FAILURE] : (state, {payload: error}) => ({
            ...state,
            server: null,
            error
        }),
        [INITIALIZE_SERVER] : ()=> initialState
    }
);
export default server;