import { combineReducers } from "redux";
import auth from './auth/reducer'
import check from './check/reducer'
import server from './server/reducer'
import write from './write/reducer'
import list from './list/reducer'
import post from './post/reducer'
import update from './update/reducer'
import deletes from './delete/reducer'


const rootReducer = combineReducers({
    check,
    auth,
    write,
    server,
    list,
    post,
    update,
    deletes,
})
export default rootReducer

export type RootState = ReturnType<typeof rootReducer>;