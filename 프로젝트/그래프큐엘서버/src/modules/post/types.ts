import { ActionType } from "typesafe-actions";
import { postActions } from "./actions";


export type PostAction = ActionType<typeof postActions>;

export interface PostState {
    post: object | null,
    postError:string|null
}



