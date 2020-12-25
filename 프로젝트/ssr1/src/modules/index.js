import { combineReducers } from "redux";
import users, { usersSaga } from "./users";
import user from "./user";

import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([usersSaga()]);
}

const rootReducer = combineReducers({ users, user });
export default rootReducer;
