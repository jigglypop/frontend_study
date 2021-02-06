import {createAction} from 'typesafe-actions';
import { DeleteState } from './types';

export const DELETE_SUCCESS = 'delete/DELETE_SUCCESS'
export const DELETE_FAILURE = 'delete/DELETE_FAILURE'

export const deleteSuccess = createAction(DELETE_SUCCESS, (results : string) => ( results ))()
export const deleteFailure = createAction(DELETE_FAILURE, (error : string)  => (error))()


export const deleteActions = { deleteSuccess, deleteFailure };

