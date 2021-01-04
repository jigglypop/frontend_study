import { ActionType } from "typesafe-actions";
import { updateActions } from "./actions";

export interface UpdateProps {
    title : string | null,
    body : string | null,
    summary : string | null
}

export type UpdateAction = ActionType<typeof updateActions>;

export interface UpdateState {
    title: string | null,
    body : string | null,
    summary : string | null,
    post :  object | null,
    postError : string| null
}



