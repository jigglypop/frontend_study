import {createAction,ActionType,createReducer} from 'typesafe-actions';

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

interface changeFieldProps {
    form: 'register' | 'login',
    key: string,
    value: string
}


export type LoadingState = object

export const startLoading = createAction(START_LOADING, requestType => requestType)()
export const finishLoading = createAction(FINISH_LOADING, requestType => requestType)()

const actions = { startLoading, finishLoading };
type LoadinAction = ActionType<typeof actions>;

const initialState : LoadingState = {}
const loading = createReducer<LoadingState, LoadinAction>(
    initialState, 
    {
        [START_LOADING]: (state, actions)=>({
            ...state,
            [actions.payload]:true
        }),
        [FINISH_LOADING]: (state, actions)=>({
            ...state,
            [actions.payload]:true
        })
    }
);
export default loading;