import { combineReducers } from "redux";
import auth, { AuthState } from './auth'


export interface rootState {
    auth: AuthState
}

const rootReducer = combineReducers({
    auth
})
export default rootReducer