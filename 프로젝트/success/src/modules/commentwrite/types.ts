import { ActionType } from "typesafe-actions";
import { commentwriteActions } from "./actions";

export type CommentWriteAction = ActionType<typeof commentwriteActions>;

export interface CommentWriteState {
    body : string | null,
    commentwrite :  object | null,
    commentError : string | null
}



