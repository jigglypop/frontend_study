import {createAction} from 'typesafe-actions';
import { UpdateProps, UpdateState } from './types';

export const UPDATE_SUCCESS = 'update/UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'update/UPDATE_FAILURE'
export const INITIALIZE_UPDATE = 'update/INITIALIZE_UPDATE'
export const CHANGE_FIELD_UPDATE = 'update/CHANGE_FIELD_UPDATE'


export const updateSuccess = createAction(UPDATE_SUCCESS, ({title, body, summary} : UpdateProps) => ({title, body, summary}))()
export const updateFailure = createAction(UPDATE_FAILURE, (error : string)  => (error))()
export const initializeUpdate = createAction(INITIALIZE_UPDATE)()
export const changeFieldUpdate = createAction(CHANGE_FIELD_UPDATE, ({key, value})=>({key, value}))()

export const updateActions = { updateSuccess, updateFailure, initializeUpdate, changeFieldUpdate };

