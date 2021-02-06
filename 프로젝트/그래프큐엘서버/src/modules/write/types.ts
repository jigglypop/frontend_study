import { ActionType } from "typesafe-actions";
import { writeActions } from "./actions";

export interface WriteProps {
    title : string | null,
    body : string | null,
    summary : string | null
}

export type WriteAction = ActionType<typeof writeActions>;

export interface WriteState {
    title: string | null,
    body : string | null,
    summary : string | null,
    post :  object | null,
    postError : string| null
}



