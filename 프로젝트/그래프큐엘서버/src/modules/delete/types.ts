import { ActionType } from "typesafe-actions";
import { deleteActions } from "./actions";


export type DeleteAction = ActionType<typeof deleteActions>;

export interface DeleteState {
    delete: string | null,
    deleteError : string| null
}



