import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, actions) => ({ number: state.number + 1 }),
    [DECREASE]: (state, actions) => ({ number: state.number - 1 }),
  },
  initialState
);
export default counter;
