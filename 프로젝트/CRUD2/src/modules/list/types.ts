import { ActionType } from "typesafe-actions";
import { listActions } from "./actions";


export type ListAction = ActionType<typeof listActions>;

export interface ListState {
    list: object | null,
    listError:string|null
}



