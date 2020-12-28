import { combineReducers } from "redux";
import loading from "./loading";
import sample from "./sample";

const rootReducer = combineReducers({ sample, loading });
export default rootReducer;
