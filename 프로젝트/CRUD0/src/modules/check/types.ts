import { ActionType } from "typesafe-actions";
import { checkActions } from "./actions";


export type userProps = object
export type CheckAction = ActionType<typeof checkActions>;

export interface CheckState {
    username: string | undefined,
    user : object | null,
    checkError :string
}



