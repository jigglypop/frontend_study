import {createAction, handleActions} from 'redux-actions'


type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>

type CounterState = {
    number: number;
}


const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState = {
    number:0,
}

const counter = handleActions(
    {
        [INCREASE]:(state: CounterState, actions: CounterAction)=>({number:state.number + 1}),
        [DECREASE]:(state: CounterState, actions: CounterAction)=>({number:state.number - 1}),

    },
    initialState
)

export default counter;