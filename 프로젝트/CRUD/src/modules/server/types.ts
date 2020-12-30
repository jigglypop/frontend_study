import { ActionType } from "typesafe-actions";
import { serverActions } from "./actions";


export type ServerAction = ActionType<typeof serverActions>;

export interface ServerState {
    server_url: object | null,
    server : object | null,
    error : string | null
}



