import {createAction} from 'typesafe-actions';

export const COMMENTWRITE_SUCCESS = 'commentwrite/COMMENTWRITE_SUCCESS'
export const COMMENTWRITE_FAILURE = 'commentwrite/COMMENTWRITE_FAILURE'
export const INITIALIZE_COMMENTWRITE = 'commentwrite/INITIALIZE_COMMENTWRITE'
export const CHANGE_FIELD_COMMENTWRITE = 'commentwrite/CHANGE_FIELD_COMMENTWRITE'


export const commentwriteSuccess = createAction(COMMENTWRITE_SUCCESS, ({ commentwrite } ) => ({  commentwrite}))()
export const commentwriteFailure = createAction(COMMENTWRITE_FAILURE, (error : string)  => (error))()
export const initializeCommentWrite = createAction(INITIALIZE_COMMENTWRITE)()
export const changeFieldCommentWrite = createAction(CHANGE_FIELD_COMMENTWRITE, ({ key, value })=>({ key, value }))()

export const commentwriteActions = { commentwriteSuccess, commentwriteFailure, initializeCommentWrite, changeFieldCommentWrite };

