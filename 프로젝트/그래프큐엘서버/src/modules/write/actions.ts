import {createAction} from 'typesafe-actions';
import { WriteProps, WriteState } from './types';

export const WRITE_SUCCESS = 'write/WRITE_SUCCESS'
export const WRITE_FAILURE = 'write/WRITE_FAILURE'
export const INITIALIZE_WRITE = 'write/INITIALIZE_WRITE'
export const CHANGE_FIELD_WRITE = 'write/CHANGE_FIELD_WRITE'


export const writeSuccess = createAction(WRITE_SUCCESS, ({title, body, summary} : WriteProps) => ({title, body, summary}))()
export const writeFailure = createAction(WRITE_FAILURE, (error : string)  => (error))()
export const initializeWrite = createAction(INITIALIZE_WRITE)()
export const changeFieldWrite = createAction(CHANGE_FIELD_WRITE, ({key, value})=>({key, value}))()

export const writeActions = { writeSuccess, writeFailure, initializeWrite, changeFieldWrite };

