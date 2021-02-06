import {createAction} from 'typesafe-actions';
import { changeFieldProps, formProps } from './types';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD'
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'
export const INITIALIZE_AUTH = 'auth/INITIALIZE_AUTH'

export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS'
export const AUTH_FAILURE = 'auth/AUTH_FAILURE'

export const changeField = createAction(CHANGE_FIELD, ({form, key, value} : changeFieldProps )=>({form, key, value}))()
export const initializeForm = createAction(INITIALIZE_FORM, (form) : formProps => form )()
export const authSuccess = createAction(AUTH_SUCCESS, (data) : object => data)()
export const authFailure = createAction(AUTH_FAILURE, (err) : object => err)()
export const initializeAuth = createAction(INITIALIZE_AUTH)()

export const authActions = { changeField, initializeForm, authSuccess, authFailure, initializeAuth };

