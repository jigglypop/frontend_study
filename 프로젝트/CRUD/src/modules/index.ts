import { combineReducers } from "redux";
import auth from './auth/reducer'
import check from './check/reducer'
import server from './server/reducer'
import write from './write/reducer'
import list from './list/reducer'
import post from './post/reducer'

import loading from './loading'

const rootReducer = combineReducers({
    check,
    auth,
    write,
    server,
    list,
    post,
    loading
})
export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;