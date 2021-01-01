import { ActionType } from "typesafe-actions";
import { readcommentActions } from "./actions";


export type ReadCommentAction = ActionType<typeof readcommentActions>;

export interface ReadCommentState {
    readcomment: object | null,
    readcommentError:string|null
}



